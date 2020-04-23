module.exports = {
  accountSid: process.env.TWILIO_ACCOUNT_SID,
  appSid: process.env.TWILIO_APP_SID,
  twilioPhoneNumber: process.env.TWILIO_PHONE_NUMBER,
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  port: process.env.PORT || 3000,
};