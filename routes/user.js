const express = require('express');
const router = express.Router();
const passport = require('passport');
const wrapAsync = require('../utils/wrapAsync.js');
const { savedRedirectUrl } = require('../middleware.js');
const userController = require('../Controllers/user.js');

// signup routes
router.route('/signup')
.get((userController.renderSignupForm))
.post( wrapAsync(userController.signup));




// login routes

router.route('/login')
.get((userController.renderLoginForm))
.post(savedRedirectUrl,passport.authenticate('local', {failureFlash: true,failureRedirect: '/login',}),(userController.login));


// logout route

router.get('/logout', (userController.logout));

module.exports = router;
