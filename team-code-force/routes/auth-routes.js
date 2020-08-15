const authRouter = require('express').Router();
const passport = require('passport');
require('dotenv').config();

const { VM_IP } = process.env || 'localhost';

authRouter.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'user is authenticated',
      user: req.user,
      cookies: req.cookies,
    });
  } else {
    res.status(500).send('Failed to authenticate');
  }
});

authRouter.get('/login/failed', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'user failed to authenticate',
  });
});

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect(`http://${VM_IP}:3000/login`);
});

// auth route for google
authRouter.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

// callback route for google to redirect to
authRouter.get('/google/redirect', passport.authenticate('google', {
  successRedirect: `http://${VM_IP}:3000/`,
  failureRedirect: `http://${VM_IP}:3000/login`,
}));

// auth check middleware
const authCheck = (req, res, next) => {
  if (!req.user) {
    // if user is not logged in
    res.status(404).json({
      success: false,
      message: 'user failed to authenticate',
    });
  }
  // if user is logged in
  next();
};

authRouter.get('/profile', authCheck, (req, res) => {
  res.send('profile hit');
});

module.exports = {
  authRouter,
  authCheck,
};
