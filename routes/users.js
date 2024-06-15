var express = require("express");
const passport = require("passport");
var router = express.Router();
const userModels = require("../models/usermodels");
const postModel = require("../models/postmodels")
const localStrategy = require("passport-local");
const multer = require("multer");
const path = require("path")
const { v4: uuidv4 } = require("uuid");
const { log } = require("console");
const fs = require("fs");
const { ifError } = require("assert");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "dp") {
      cb(null, "public/images/upload/dp")
    }
    else if (file.fieldname === "post") {
      cb(null, 'public/images/upload')
    }
  },
  filename: function (req, file, cb) {
    const fileType = path.extname(file.originalname)
    cb(null, `${uuidv4()}-${fileType}`);
  }
})

const upload = multer({ storage })

passport.use(
  new localStrategy({ usernameField: "email" }, userModels.authenticate())
);

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", async (req, res) => {
  const dp = "blank dp.png"
  const { username, email, fullname, password } = req.body;
  const userData = new userModels({ username, email, fullname, dp });

  try {
    const registeredUser = await userModels.register(userData, password);
    passport.authenticate("local")(req, res, () => {
      res.redirect("/");
    });
  } catch (error) {
    // Handle the error appropriately (e.g., send an error response to the client)
    res.status(400).send(error.message);
  }
});

router.post("/login", passport.authenticate("local", {

  successRedirect: "/feed",
  failureRedirect: "/login",
  failureFlash: true,
}),
  (req, res) => { }
);

router.post("/uploadpost", isLoggedIn, upload.single("post"), async (req, res) => {
  const { postTitle, description } = req.body
  const userData = await userModels.findOne({ email: req.session.passport.user })
  const postData = await postModel.create({
    postTitle, description, image: req.file.filename, user: userData._id
  })
  userData.post.push(postData._id)
  await userData.save()
  // console.log(req.file);
  res.redirect("/profile")
})

router.post("/setdp", isLoggedIn, upload.single("dp"), async (req, res) => {
  const userData = await userModels.findOneAndUpdate({ email: req.session.passport.user }, { dp: req.file.filename })
  if (userData.dp !== "blank dp.png") {
    fs.unlink(`public/images/upload/dp/${userData.dp}`, (err) => {
      if (err) {
        console.error(err)
        return
      }
    })
  }

  res.redirect("/profile")
})
router.post("/editprofile", isLoggedIn, async (req, res) => {
  const { fullname, username, about } = req.body;
  await userModels.findOneAndUpdate({ email: req.session.passport.user }, { fullname, username, about })
  res.redirect("/profile")
})
router.post("/editpost", isLoggedIn, (req, res) => {
  console.log(req.body);
  res.end()
}
)
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}
module.exports = router;
