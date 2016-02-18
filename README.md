# Browser Calls. Powered by Twilio - Node.js/Express
[![Build
Status](https://travis-ci.org/TwilioDevEd/browser-calls-node.svg?branch=master)](https://travis-ci.org/TwilioDevEd/browser-calls-node)

Learn how to use [Twilio Client](https://www.twilio.com/client) to make browser-to-phone and browser-to-browser calls with ease. The unsatisfied customers of the Birchwood Bicycle Polo Co. need your help!

## Quickstart

### Create a TwiML App

This project is configured to use a **TwiML App**, which allows us to easily set the voice URLs for all Twilio phone numbers we purchase in this app.

Create a new TwiML app at https://www.twilio.com/user/account/apps/add and use its `Sid` as the `TWIML_APP_SID` environment variable wherever you run this app.

![Creating a TwiML App](http://howtodocs.s3.amazonaws.com/call-tracking-twiml-app.gif)

See the end of the "Local development" section for details on the exact URL to use in your TwiML app.

Once you have created your TwiML app, configure your Twilio phone number to use it ([instructions here](https://www.twilio.com/help/faq/twilio-client/how-do-i-create-a-twiml-app)). If you don't have a Twilio phone number yet, you can purchase a new number in your [Twilio Account Dashboard](https://www.twilio.com/user/account/phone-numbers/incoming).

## Local development

First you need to install either [Node.js](http://nodejs.org/) or [io.js](https://iojs.org/en/index.html), both of which
should also install [npm](https://www.npmjs.com/).

1. This sample application stores data in a [MongoDB](https://www.mongodb.org/) database using [Mongoose](http://mongoosejs.com/). You can download and run MongoDB yourself (OS X, Linux, Windows).

   On OS X, maybe the easiest way to get MongoDB running locally is to install via [Homebrew](http://brew.sh/).

   ```
   $ brew install mongodb
   ```
   You should then be able to run a local server with:

   ```
   $ mongod
   ```

To run the app locally, clone this repository and `cd` into its directory:

1. First clone this repository and `cd` into its directory:
   ```
   git clone git@github.com:TwilioDevEd/browser-calls-node.git

   cd browser-calls-node
   ```

1. Install dependencies:

    ```
    npm install
    ```

4. Edit the sample configuration file `.env` to match your configuration.

   Once you have edited the `.env` file, if you are using a UNIX operating system, just use the source command to load the variables into your environment:

  ```
  $ source .env
  ```

1. Run the application.

    ```
    node .
    ```
    Alternatively you might also consider using [nodemon](https://github.com/remy/nodemon) for this. It works just like
    the node command, but automatically restarts your application when you change any source code files.

    ```
    npm install -g nodemon
    nodemon .
    ```

1. Run the application.

  ```
  $ npm start
  ```

To actually forward incoming calls, your development server will need to be publicly accessible. [We recommend using ngrok to solve this problem](https://www.twilio.com/blog/2015/09/6-awesome-reasons-to-use-ngrok-when-testing-webhooks.html).

Once you have started ngrok, update your TwiML app's voice URL setting to use your ngrok hostname, so it will look something like this:

```
http://88b37ada.ngrok.io/support/call
```

1. Check it out at [http://localhost:3000](http://localhost:3000)

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
