const authRouter = require('express').Router();
const passport = require('passport');

authRouter.get('/login', (req, res) => {
  res.send('login route');
});

authRouter.get('/logout', (req, res) => {
  console.log('logging out');
  req.logout();
  // res.redirect('/home');
});

// auth route for google
authRouter.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

// callback route for google to redirect to
authRouter.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.send(req.user);
  // res.redirect('/profile')
  // res.json({
  //   message: 'user is authenticated',
  // });
});

// const authCheck = (req, res, next) => {
//   if (!req.user) {
//     // if user is not logged in
//     res.redirect('/auth/login');
//   }
//   // if user is logged in
//   next();
// };

module.exports = {
  authRouter,
};
