const { Router } = require("express");
const router = Router();
const { getProFilePage } = require("../controllers/profileControllers");

router.get("/:username", getProFilePage);

module.exports = router;
