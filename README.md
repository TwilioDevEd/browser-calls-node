# Browser Calls. Powered by Twilio - Node.js/Express
[![Build
Status](https://travis-ci.org/TwilioDevEd/browser-calls-node.svg?branch=master)](https://travis-ci.org/TwilioDevEd/browser-calls-node)

Learn how to use [Twilio Client](https://www.twilio.com/client) to make browser-to-phone and browser-to-browser calls with ease. The unsatisfied customers of the Birchwood Bicycle Polo Co. need your help!

## Quickstart

### Create a TwiML App

This project is configured to use a **TwiML App**, which allows us to easily set the voice URLs for all Twilio phone numbers we purchase in this app.

Create a new TwiML app at https://www.twilio.com/user/account/apps/add and use its `Sid` as the `TWIML_APPLICATION_SID` environment variable wherever you run this app.

![Creating a TwiML App](http://howtodocs.s3.amazonaws.com/call-tracking-twiml-app.gif)

See the end of the "Local development" section for details on the exact URL to use in your TwiML app.

Once you have created your TwiML app, configure your Twilio phone number to use it ([instructions here](https://www.twilio.com/help/faq/twilio-client/how-do-i-create-a-twiml-app)). If you don't have a Twilio phone number yet, you can purchase a new number in your [Twilio Account Dashboard](https://www.twilio.com/user/account/phone-numbers/incoming).

## Local development

First you need to install either [Node.js](http://nodejs.org/) or [io.js](https://iojs.org/en/index.html), both of which
should also install [npm](https://www.npmjs.com/).

To run the app locally, clone this repository and `cd` into its directory. Then:

1. First clone this repository and `cd` into its directory:
   ```
   git clone git@github.com:TwilioDevEd/browser-calls-node.git

   cd browser-calls-node
   ```

1. Install project's dependencies:

    ```
    npm install
    ```

1. Start the development server

    ```
    node .
    ```
    Alternatively you might also consider using [nodemon](https://github.com/remy/nodemon) for this. It works just like
    the node command, but automatically restarts your application when you change any source code files.

    ```
    npm install -g nodemon
    nodemon .
    ```

1. Expose the application to the wider Internet using [ngrok](https://ngrok.com/)

    ```
    ngrok http 3000 -host-header="localhost:3000"
    ```

1. Provision a number under the [Twilio's Manage Numbers](https://www.twilio.com/user/account/phone-numbers/incoming)
page on your account. Set the voice URL for the number to http://[your-ngrok-subdomain].ngrok.io/ivr/welcome

That's it

## Run the tests

You can run the tests locally by typing

```
mocha test
```

## Meta

* No warranty expressed or implied. Software is as is. Diggity.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
