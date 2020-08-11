const authRouter = require('express').Router();
const passport = require('passport');

// authRouter.get('/login', (req, res) => {
//   res.send('login route');
// });

authRouter.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'user is authenticated',
      user: req.user,
      cookies: req.cookies,
    });
  }
});

authRouter.get('/login/failed', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'user failed to authenticate',
  });
});

authRouter.get('/logout', (req, res) => {
  console.log('logging out');
  console.log(req.user, 'before logout');
  req.logout();
  console.log(req.user, 'after logout');
  res.redirect('http://localhost:3000/');
});

// auth route for google
authRouter.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

// callback route for google to redirect to
authRouter.get('/google/redirect', passport.authenticate('google', {
  successRedirect: 'http://localhost:3000/dashboard',
  failureRedirect: 'http://localhost:3000/login',
}));
// after they get sent to client homepage, call use effect there to success login route which will checkAuth and assign
// req.user properties

// auth check middleware
const authCheck = (req, res, next) => {
  if (!req.user) {
    // if user is not logged in
    // res.redirect('http://localhost:3000/login');
    res.status(404).json({
      success: false,
      message: 'user failed to authenticate',
    });
  }
  // if user is logged in
  next();
};

authRouter.get('/profile', authCheck, (req, res) => {
  console.log('profile hit');
  res.send('profile hit');
});

// authRouter.get('/google/redirect', passport.authenticate('google'), (req, res) => {
//   // res.send(req.user);
//   res.redirect('http://localhost:3000/');
//   // res.body = {message: 'user is authenticated'};
//   console.log('auth/redirect hit');
// //  return res.json({
// //     message: 'user is authenticated',
// //   });
// });

// authRouter.get('/google/redirect', (req, res, next) => {
//   passport.authenticate('google', (error, user, info) => {
//     console.log('google/redirect hit');
//     if (error) {
//     return  res.status(500).json({
//         message: 'error occurred',
//         error,
//       })
//     }
//     return res.json({
//       message: 'user is authenticated'
//     })
//   })(req, res, next);
// });
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
  authCheck,
};
