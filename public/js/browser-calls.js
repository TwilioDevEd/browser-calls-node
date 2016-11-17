/**
 * Twilio Client configuration for the browser-calls-rails
 * example application.
 */

// Store some selectors for elements we'll reuse
var callStatus = $("#call-status");
var answerButton = $(".answer-button");
var callSupportButton = $(".call-support-button");
var hangUpButton = $(".hangup-button");
var callCustomerButtons = $(".call-customer-button");

/* Helper function to update the call status bar */
function updateCallStatus(status) {
  callStatus.text(status);
}

/* Get a Twilio Client token with an AJAX request */
$(document).ready(function() {
  $.post("/token/generate", {page: window.location.pathname}, function(data) {
    // Set up the Twilio Client Device with the token
    Twilio.Device.setup(data.token);
  });

  initNewTicketForm();
});

/* Callback to let us know Twilio Client is ready */
Twilio.Device.ready(function (device) {
  updateCallStatus("Ready");
});

/* Report any errors to the call status display */
Twilio.Device.error(function (error) {
  updateCallStatus("ERROR: " + error.message);
});

/* Callback for when Twilio Client initiates a new connection */
Twilio.Device.connect(function (connection) {
  // Enable the hang up button and disable the call buttons
  hangUpButton.prop("disabled", false);
  callCustomerButtons.prop("disabled", true);
  callSupportButton.prop("disabled", true);
  answerButton.prop("disabled", true);

  // If phoneNumber is part of the connection, this is a call from a
  // support agent to a customer's phone
  if ("phoneNumber" in connection.message) {
    updateCallStatus("In call with " + connection.message.phoneNumber);
  } else {
    // This is a call from a website user to a support agent
    updateCallStatus("In call with support");
  }
});

/* Callback for when a call ends */
Twilio.Device.disconnect(function(connection) {
  // Disable the hangup button and enable the call buttons
  hangUpButton.prop("disabled", true);
  callCustomerButtons.prop("disabled", false);
  callSupportButton.prop("disabled", false);

  updateCallStatus("Ready");
});

/* Callback for when Twilio Client receives a new incoming call */
Twilio.Device.incoming(function(connection) {
  updateCallStatus("Incoming support call");

  // Set a callback to be executed when the connection is accepted
  connection.accept(function() {
    updateCallStatus("In call with customer");
  });

  // Set a callback on the answer button and enable it
  answerButton.click(function() {
    connection.accept();
  });
  answerButton.prop("disabled", false);
});

/* Call a customer from a support ticket */
function callCustomer(phoneNumber) {
  updateCallStatus("Calling " + phoneNumber + "...");

  var params = {"phoneNumber": phoneNumber};
  Twilio.Device.connect(params);
}

/* Call the support_agent from the home page */
function callSupport() {
  updateCallStatus("Calling support...");

  // Our backend will assume that no params means a call to support_agent
  Twilio.Device.connect();
}

/* End a call */
function hangUp() {
  Twilio.Device.disconnectAll();
}

function initNewTicketForm() {
  var formEl = $(".new-ticket");
  var buttonEl = formEl.find(".btn.btn-primary");

  // button handler
  formEl.find("[type='button']").click(function(e) {
    $.ajax({
        url: '/tickets/new',
        type: 'post',
        data: formEl.serialize()
    })
    .done(function(){
      showNotification("Support ticket was created successfully.", "success")
      // clear form
      formEl.find("input[type=text], textarea").val("");
    })
    .fail(function(res) {
      showNotification("Support ticket request failed. " + res.responseText, "danger")
    });
  });
}

function showNotification(text, style) {
  var alertStyle = "alert-"+style;
  var alertEl = $(".alert.ticket-support-notifications");

  if (alertEl.length == 0) {
    alertEl = $("<div class=\"alert ticket-support-notifications\"></div>");
    $("body").before(alertEl);
  }

  alertEl.removeClass (function (index, css) {
    return (css.match (/(^|\s)alert-\S+/g) || []).join(' ');
  });

  alertEl.addClass(alertStyle);
  alertEl.html(text);

  setTimeout(clearNotifications, 4000)
}

function clearNotifications() {
  var alertEl = $(".alert.ticket-support-notifications");
  alertEl.remove();
}
