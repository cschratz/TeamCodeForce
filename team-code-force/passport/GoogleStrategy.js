const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const { google } = require('../.config.js');

passport.use(
  new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: google.clientID,
    clientSecret: google.clientSecret,
  }, () => {

  }),
);
