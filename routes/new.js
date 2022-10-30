let express = require("express");
var router = express.Router();
const messages = require("../messages");

router.get("/", function (req, res, next) {
  res.render("form");
});

router.use("/", function (req, res, next) {
  if (req.method === "POST") {
    messages.push({
      text: req.body.message,
      user: req.body.user,
      added: new Date(),
    });
  }
  next();
});

router.post("/", function (req, res, next) {
  res.redirect("/");
});

module.exports = router;
