<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt="Twilio" width="250" />
</a>

# Browser Calls

![](https://github.com/TwilioDevEd/browser-calls-node/workflows/Node.js/badge.svg)

> This template is part of Twilio CodeExchange. If you encounter any issues with this code, please open an issue at [github.com/twilio-labs/code-exchange/issues](https://github.com/twilio-labs/code-exchange/issues).

## About

Twilio Client allows your users to make and receive phone calls in their browsers. This tutorial will show you the front-end and backend code necessary to make browser-to-phone and browser-to-browser calls with Twilio Client and Nodejs.

[See step-by-step tutorial.](https://www.twilio.com/docs/tutorials/walkthrough/browser-calls/node/express)

Implementations in other languages:

| .NET | Java | Python | PHP | Ruby |
| :--- | :--- | :----- | :-- | :--- |
| [Done](https://github.com/TwilioDevEd/browser-calls-csharp) | [Done](https://github.com/TwilioDevEd/browser-calls-spark)  | [Done](https://github.com/TwilioDevEd/browser-calls-django)  | [Done](https://github.com/TwilioDevEd/browser-calls-laravel) | [Done](https://github.com/TwilioDevEd/browser-calls-rails)  |

## Set up

### Requirements

- [Nodejs](https://nodejs.org/) v10 or v12
- [Mongo](https://docs.mongodb.com/manual/installation/)

### Twilio Account Settings

This application should give you a ready-made starting point for writing your own application.
Before we begin, we need to collect all the config values we need to run the application:

| Config Value | Description            |
| :----------- | :----------------------|
| TWILIO_ACCOUNT_SID  | Your primary Twilio account identifier - find this [in the Console](https://www.twilio.com/console).|
| TWILIO_NUMBER | A Twilio phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) - you can [get one here](https://www.twilio.com/console/phone-numbers/incoming) |
| TWILIO_APP_SID | The TwiML application with a voice URL configured to access your server running this app - create one [in the console here](https://www.twilio.com/console/voice/twiml/apps) and use its `Sid`. Also, you will need to configure the Voice "REQUEST URL" on the TwiML app once you've got your server up and running. |
| TWILIO_API_KEY / TWILIO_API_SECRET | Your REST API Key information needed to create an [Access Token](https://www.twilio.com/docs/iam/access-tokens) - create [one here](https://www.twilio.com/console/project/api-keys). |

### Create a TwiML App

This project is configured to use a **TwiML App**, which allows us to easily set the Voice URLs for all Twilio phone numbers we purchase in this app.

[Create a new TwiML app](https://www.twilio.com/console/voice/twiml/apps) and use its `Sid` as the `TWILIO_APP_SID` environment variable wherever you run this app.

See the end of the "Local development" section for details on the exact URL to use in your TwiML app.

Once you have created your TwiML app, [configure your Twilio phone number](https://support.twilio.com/hc/en-us/articles/223180928-How-Do-I-Create-a-TwiML-App-). If you don't have a Twilio phone number yet, you can purchase a new number in your [Twilio Account Dashboard](https://www.twilio.com/console/phone-numbers/search). 

### Local development

1. First, clone this repository and `cd` into its directory.

   ```bash
   git clone https://github.com/TwilioDevEd/browser-calls-node.git
   cd browser-calls-node
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Copy the sample configuration file and edit it to match your configuration.

   ```bash
   cp .env.example .env
   ```

   See [Twilio Account Settings](#twilio-account-settings) to locate the necessary environment variables.

4. Run the application.

   ```bash
   npm start
   ```

   Alternatively you might also consider using [nodemon](https://github.com/remy/nodemon) for this. It works just like
   the node command, but automatically restarts your application when you change any source code files.

   ```bash
   npm install -g nodemon
   nodemon ./bin/www
   ```

5. Expose your application to the wider internet using [ngrok](http://ngrok.com). This step
   **is important** because the application won't work as expected if you run it through
   localhost. [Here](https://www.twilio.com/blog/2015/09/6-awesome-reasons-to-use-ngrok-when-testing-webhooks.html), you could read more about why we recomend you to use ngrok.

   ```bash
   ngrok http 3000
   ```

6. Once you have started ngrok, update your [TwiML app's](#create-a-twiml-app) Voice URL setting to use
   your ngrok hostname, so it will look something like this: 
   
   ```
   http://88b37ada.ngrok.io/call/connect
   ```
   
   See [Create a TwiML App](#create-a-twiml-App).

7. Everything is setup, now you can open two tabs in the browser to test the application.

   - To create a support ticket go to the `home` page. On this page you could fill some fields and create a ticket or you can call to support:

       [http://localhost:3000](http://localhost:3000)

   - To respond to support tickets go to the `dashboard` page (you should open two windows or tabs). On this page you could call customers and answers phone calls.

       [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

That's it!

### Docker

If you have [Docker](https://www.docker.com/) already installed on your machine, you can use our `docker-compose.yml` to setup your project.

1. Make sure you have the project cloned.
2. Setup the `.env` file as outlined in the [Local Development](#local-development) steps.
3. Run `docker-compose up`.
4. Follow the steps in [Local Development](#local-development) on how to expose your port to Twilio using a tool like [ngrok](https://ngrok.com/) and configure the remaining parts of your application.

### Tests

You can run the tests locally by typing

```bash
npm test
```

## Resources

- The CodeExchange repository can be found [here](https://github.com/twilio-labs/code-exchange/).

## Contributing

This template is open source and welcomes contributions. All contributions are subject to our [Code of Conduct](https://github.com/twilio-labs/.github/blob/master/CODE_OF_CONDUCT.md).

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.

[twilio]: https://www.twilio.com
