const authRouter = require('express').Router();
const passport = require('passport');

authRouter.get('/login', (req, res) => {
  res.send('login route');
});

authRouter.get('/logout', (req, res) => {
  res.send('logging out');
});

authRouter.get('/google', passport.authenticate('google', {
  scope: ['profile'],
}));


module.exports = {
  authRouter,
};
