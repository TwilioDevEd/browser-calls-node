<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt="Twilio" width="250" />
</a>

# Browser Calls

[![Build Status](https://travis-ci.org/TwilioDevEd/browser-calls-node.svg?branch=master)](https://travis-ci.org/TwilioDevEd/browser-calls-node)

Twilio Client allows your users to make and receive phone calls in their browsers. This tutorial will show you the front-end and backend code necessary to make browser-to-phone and browser-to-browser calls with Twilio Client.

[See step-by-step tutorial.](https://www.twilio.com/docs/tutorials/walkthrough/browser-calls/node/express)

### Create a TwiML App

This project is configured to use a **TwiML App**, which allows us to easily set the voice URLs for all Twilio phone numbers we purchase in this app.

[Create a new TwiML app](https://www.twilio.com/console/phone-numbers/dev-tools/twiml-apps/add) and use its `Sid` as the `TWILIO_APP_SID` environment variable wherever you run this app.

![Creating a TwiML App](http://howtodocs.s3.amazonaws.com/call-tracking-twiml-app.gif)

See the end of the "Local development" section for details on the exact URL to use in your TwiML app.

Once you have created your TwiML app, [configure your Twilio phone number](https://www.twilio.com/help/faq/twilio-client/how-do-i-create-a-twiml-app). If you don't have a Twilio phone number yet, you can purchase a new number in your [Twilio Account Dashboard](https://www.twilio.com/console/phone-numbers/search).  

## Local development

First you need to install
  - [Node.js](http://nodejs.org/) which should also install [npm](https://www.npmjs.com/).
  - [MongoDB](https://www.mongodb.org/)

1. First clone this repository and `cd` into its directory:
    ```bash
    git clone git@github.com:TwilioDevEd/browser-calls-node.git

    cd browser-calls-node
    ```

1. Install dependencies:
    ```
    npm install
    ```

1. Copy the sample configuration file and edit it to match your configuration
    ```bash
    $ cp .env.example .env
    ```
    You can find your `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` in your
    [Twilio Account Settings](https://www.twilio.com/console).
    You will also need a `TWILIO_PHONE_NUMBER`, which you may find [here](https://www.twilio.com/console/phone-numbers/incoming).

    Run `source .env.local` to export the environment variables


1. Run the application.
    ```bash
    node ./bin/www
    ```
    Alternatively you might also consider using [nodemon](https://github.com/remy/nodemon) for this. It works just like
    the node command, but automatically restarts your application when you change any source code files.

    ```bash
    npm install -g nodemon
    nodemon ./bin/www
    ```

1. Run the application.
    ```bash
    $ npm start
    ```

1. To actually forward incoming calls, your development server will need to be publicly accessible. [We recommend using ngrok to solve this problem](https://www.twilio.com/blog/2015/09/6-awesome-reasons-to-use-ngrok-when-testing-webhooks.html).

1. Once you have started ngrok, update your TwiML app's voice URL setting to use your ngrok hostname, so it will look something like this:

    `http://88b37ada.ngrok.io/call/connect`

### Try it out
1. To create a support ticket go to:

    [http://localhost:3000](http://localhost:3000)

1. To respond to support tickets (should open two windows or tabs).

    [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

## Run the tests

You can run the tests locally by typing

```bash
npm test
```

## Meta

* No warranty expressed or implied. Software is as is. Diggity.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
