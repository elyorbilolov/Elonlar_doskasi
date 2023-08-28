const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("home", {
    hello: "Changed title",
    another: "Nothing",
    title: "Home page",
  });
});

module.exports = router;
