const { Router } = require("express");
const router = Router();
const {
  getPostersPage,
  addNewPosterPage,
  addNewPoster,
  getOnePoster,
} = require("../controllers/posterControllers");

router.get("/", getPostersPage);
router.get("/add", addNewPosterPage);
router.post("/add", addNewPoster);
router.get("/:id", getOnePoster);

module.exports = router;
