const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const { google } = require('../.config.js');
const { User } = require('../db');

passport.use(
  new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: google.clientID,
    clientSecret: google.clientSecret,
  },
  (accessToken, refreshToken, profile, email, done) => {
    User.findOrCreate({
      where: { googleId: email.id },
      defaults: {
        name: email.displayName,
        googleId: email.id,
        // eslint-disable-next-line no-underscore-dangle
        email: email._json.email,
      },
    }).then((user) => {
      console.log(`new user ${user}`);
    }).catch((err) => {
      console.log(err);
    });
    // console.log('passport callback func fired');
    // console.log('this is profile', profile);
    // console.log('this is email', email);
  }),
);
