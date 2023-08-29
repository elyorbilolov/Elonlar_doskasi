//@route        GET /posters
//@desc         GET all posters
//@access       Public
const getPostersPage = (req, res) => {
  res.render("poster/posters", {
    title: "Posters page",
    url: process.env.URL,
  });
};

const addNewPosterPage = (req, res) => {
  res.render("poster/add-poster", {
    title: `Yangi e'lon qo'shish`,
    url: process.env.URL,
  });
};

const addNewPoster = (req, res) => {
  console.log(req.body);
};

module.exports = { getPostersPage, addNewPosterPage, addNewPoster };
