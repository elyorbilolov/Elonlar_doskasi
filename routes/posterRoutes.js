const { Router } = require("express");
const router = Router();
const { getPostersPage } = require("../controllers/posterControllers");

router.get("/", getPostersPage);

module.exports = router;
