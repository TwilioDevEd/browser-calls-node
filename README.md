<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt="Twilio" width="250" />
</a>

# Browser Calls

![](https://github.com/TwilioDevEd/browser-calls-node/workflows/Node.js/badge.svg)

> We are currently in the process of updating this sample template. If you are encountering any issues with the sample, please open an issue at [github.com/twilio-labs/code-exchange/issues](https://github.com/twilio-labs/code-exchange/issues) and we'll try to help you.

Twilio Client allows your users to make and receive phone calls in their browsers. This tutorial will show you the front-end and backend code necessary to make browser-to-phone and browser-to-browser calls with Twilio Client.

[See step-by-step tutorial.](https://www.twilio.com/docs/tutorials/walkthrough/browser-calls/node/express)

### Create a TwiML App

This project is configured to use a **TwiML App**, which allows us to easily set the voice URLs for all Twilio phone numbers we purchase in this app.

[Create a new TwiML app](https://www.twilio.com/console/voice/twiml/apps) and use its `Sid` as the `TWILIO_APP_SID` environment variable wherever you run this app.

![Creating a TwiML App](https://support.twilio.com/hc/article_attachments/360003105393/Pic01.png)

See the end of the "Local development" section for details on the exact URL to use in your TwiML app.

Once you have created your TwiML app, [configure your Twilio phone number](https://support.twilio.com/hc/en-us/articles/223180928-How-Do-I-Create-a-TwiML-App-). If you don't have a Twilio phone number yet, you can purchase a new number in your [Twilio Account Dashboard](https://www.twilio.com/console/phone-numbers/search).  

## Local development

First you need to install
  - [Node.js](http://nodejs.org/) which should also install [npm](https://www.npmjs.com/).
  - [MongoDB](https://www.mongodb.org/)

1. First clone this repository and `cd` into its directory:
    ```bash
    git clone https://github.com/TwilioDevEd/browser-calls-node.git
    cd browser-calls-node
    ```

1. Install dependencies:
    ```
    npm install
    ```

1. Copy the sample configuration file and edit it to match your configuration, you could find the value for each variable in the next table.
    ```bash
    $ cp .env.example .env
    ```

    | Config Value  | Description |
    | :-------------  |:------------- |
    `TWILIO_ACCOUNT_SID` | In [Twilio Account Settings](https://www.twilio.com/console).

    `TWILIO_APP_SID` | In [TwiML apps](https://www.twilio.com/console/voice/twiml/apps).

    `TWILIO_PHONE_NUMBER` | You may find [here](https://www.twilio.com/console/phone-numbers/incoming).

    `TWILIA_API_KEY` / `TWILIO_API_SECRET` | You could find [here](https://www.twilio.com/console/project/api-keys).

1. Run the application.
    ```bash
    npm start
    ```
    Alternatively you might also consider using [nodemon](https://github.com/remy/nodemon) for this. It works just like
    the node command, but automatically restarts your application when you change any source code files.

    ```bash
    npm install -g nodemon
    nodemon ./bin/www
    ```

1. To actually forward incoming calls, your development server will need to be publicly accessible. [We recommend using ngrok to solve this problem](https://www.twilio.com/blog/2015/09/6-awesome-reasons-to-use-ngrok-when-testing-webhooks.html).

1. Once you have started ngrok, update your TwiML app's voice URL setting to use your ngrok hostname, so it will look something like this:

    `http://88b37ada.ngrok.io/call/connect`

### Try it out
1. To create a support ticket go to the `home` page. On this page you could fill some fields and create a ticket or you can call to support:

    [http://localhost:3000](http://localhost:3000)

1. To respond to support tickets go to the `dashboard` page (you should open two windows or tabs). On this page you could call customers and answers phone calls.

    [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

## Run the tests

You can run the tests locally by typing

```bash
npm test
```

## Meta

* No warranty expressed or implied. Software is as is. Diggity.
* The CodeExchange repository can be found [here](https://github.com/twilio-labs/code-exchange/).
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
