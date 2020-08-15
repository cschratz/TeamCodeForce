/* eslint-disable no-console */
const express = require('express');
const dotenv = require('dotenv');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
require('./passport/GoogleStrategy');
const { authRouter } = require('./routes/auth-routes');
const { parkRouter } = require('./routes/park-routes');
const { session } = require('./.config.js');
require('./db/models/Park');
require('./db/index.js');

dotenv.config();
const app = express();

const { SERVER_PORT } = process.env || 8080;

app.set('trust proxy', 1);
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET, HEAD, PUT, PATCH, DELETE',
  credentials: true,
}));

// set up cookie
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [session.cookieKey],
}));

app.use(cookieParser());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use('/auth', authRouter);
app.use('/park', parkRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on ${SERVER_PORT}`);
});
