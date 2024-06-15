var express = require("express");
var router = express.Router();
const connectDb = require("../connection");
const passport = require("passport");
const localStrategy = require("passport-local");
const userModels = require("../models/usermodels");
const postmodels = require("../models/postmodels");
const fs = require("fs");
const { userInfo } = require("os");
connectDb(); //connecting to database

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/register", (req, res) => {
  const error = req.flash("error")
  res.render("register", { error: error });
});

router.get("/login", (req, res) => {
  const error = req.flash("error")
  res.render("login", { error: error });
});
router.get("/logout", (req, res, next) => {
  req.logOut((err) => {
    if (err) return next(err);
    res.redirect("/login");
  });
});

router.get("/profile", isLoggedIn, async (req, res) => {
  const userData = await userModels.findOne({
    email: req.session.passport.user
  }).populate("post")
  const { username, email, fullname, dp, post, about } = userData
  res.render("profile", { username: username, email: email, fullname: fullname, dp: dp, post: post, about: about });
});

router.get("/uploadpost", isLoggedIn, (req, res) => {
  res.render("uploadpost")
})

router.get("/feed", isLoggedIn, async (req, res) => {
  const postData = await postmodels.find({}).populate("user")
  const userData = await userModels.findOne({ email: req.session.passport.user })
  const { dp, username, _id } = userData
  res.render("feed", { post: postData, dp: dp, username: username, })
})

router.get("/editprofile", isLoggedIn, async (req, res) => {
  const userData = await userModels.findOne({ email: req.session.passport.user })
  const { dp, username, fullname, about } = userData;
  res.render("editprofile", { dp: dp, username: username, fullname: fullname, about: about })
})

router.get("/deleteaccount", isLoggedIn, async (req, res) => {
  try {
    const userData = await userModels.findOne({ email: req.session.passport.user }).populate("post")
    const postData = await postmodels.deleteMany({ user: userData._id })
    userData.post.forEach(post => {
      fs.unlink(`public/images/upload/${post.image}`, (err) => {
        if (err) throw err;
      })
    });
    await userModels.deleteOne({ email: req.session.passport.user })
    res.redirect("/editprofile")
  } catch (error) {
    if (error) throw error;
  }
})

router.get("/profile/:userid/:username", isLoggedIn, async (req, res) => {
  const userData = await userModels.findOne({ _id: req.params.userid }).populate("post")
  const { username, email, fullname, dp, post, about } = userData
if (userData.email==req.session.passport.user){
  res.redirect("/profile")
}
else{
 res.render("viewersideprofile", { username: username, email: email, fullname: fullname, dp: dp, post: post, about: about } )
}
})

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
