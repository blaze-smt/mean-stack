const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // throw new Error("Something went wrong!");
  res.redirect("/home");
});

router.get("/home", (req, res) => {
  res.render("pages/index");
});

module.exports = router;
