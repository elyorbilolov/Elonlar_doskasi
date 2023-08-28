//@route        GET /posters
//@desc         GET all posters
//@access       Public
const getPostersPage = (req, res) => {
  res.render("posters", {
    title: "Posters page",
  });
};

module.exports = { getPostersPage };
