const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", (req, res) => {
  res.render("pages/index");
});

router.post("/send", async (req, res, next) => {
  const post = new User({
    name: req.body.name,
    companyName: req.body.companyName,
    email: req.body.email,
  });
  console.log(post);

  try {
    const savedUser = await post.save();
    res.json(savedUser);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
