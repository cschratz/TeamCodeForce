const authRouter = require('express').Router();
const passport = require('passport');

authRouter.get('/login', (req, res) => {
  res.send('login route');
});

authRouter.get('/logout', (req, res) => {
  res.send('logging out');
});

// auth route for google
authRouter.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

// callback route for google to redirect to
authRouter.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('reached callback UrI');
});

module.exports = {
  authRouter,
};
