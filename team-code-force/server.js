const express = require('express');
const dotenv = require('dotenv');
const { authRouter } = require('./routes/auth-routes');
const passportSetup = require('./passport/GoogleStrategy');

const app = express();
dotenv.config();
require('./db/index.js');

const { SERVER_PORT } = process.env || 8080;
app.use('/auth', authRouter);

// app.get('/', (req, res) => {
//   console.log('get sent');
//   res.send('getttt');
// });

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on ${SERVER_PORT}`);
});
