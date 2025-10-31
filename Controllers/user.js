const User = require("../models/user.js");
const passport = require("passport");

// signup
module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

// signup logic
module.exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash("success", "Welcome to Wanderlust!");
      res.redirect("/listings");
    });
  } catch (err) {
    console.error(err);
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

// login form
module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

// login logic
module.exports.login = (req, res) => {
  req.flash("success", "Welcome to Wanderlust, you are logged in!");
  const redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

// logout logic
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "You are logged out!");
    res.redirect("/listings");
  });
};
