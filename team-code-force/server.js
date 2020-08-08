/* eslint-disable no-console */
const dotenv = require('dotenv');

dotenv.config();
const express = require('express');

const app = express();
require('../db/index.js');

const { SERVER_PORT } = process.env || 8080;

// app.get('/', (req, res) => {
//   console.log('get sent');
//   res.send('getttt');
// });

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on ${SERVER_PORT}`);
});
