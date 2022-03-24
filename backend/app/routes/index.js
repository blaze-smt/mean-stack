const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // throw new Error("Something went wrong!");
  res.render("./pages/index");
});

module.exports = router;
