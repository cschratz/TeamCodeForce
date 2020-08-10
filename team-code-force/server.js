const express = require('express');
const dotenv = require('dotenv');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportSetup = require('./passport/GoogleStrategy');
const { authRouter } = require('./routes/auth-routes');
const { session } = require('./.config.js');

const app = express();
dotenv.config();
require('./db/index.js');

const { SERVER_PORT } = process.env || 8080;

app.set('trust proxy', 1);
// set up cookie
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [session.cookieKey],
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use('/auth', authRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on ${SERVER_PORT}`);
});
