const {
  addNewPosterToDB,
  getAllPosters,
  getPosterById,
} = require("../db/posters");
const { v4 } = require("uuid");

//@route        GET /posters
//@desc         GET all posters
//@access       Public
const getPostersPage = async (req, res) => {
  const posters = await getAllPosters();
  res.render("poster/posters", {
    title: "Posters page",
    posters,
    url: process.env.URL,
  });
};

//@route        GET /posters/:id
//@desc         GET one poster by id
//@access       Public
const getOnePoster = async (req, res) => {
  const poster = await getPosterById(req.params.id);
  console.log(poster);
  res.render("poster/one", {
    title: poster.title,
    url: process.env.URL,
    poster,
  });
};

//@route        GET /posters/add
//@desc         Get adding poster page
//@access       Private
const addNewPosterPage = (req, res) => {
  res.render("poster/add-poster", {
    title: `Yangi e'lon qo'shish`,
    url: process.env.URL,
  });
};

//@route        GET /posters/add
//@desc         Add new poster
//@access       Private
const addNewPoster = async (req, res) => {
  const poster = {
    id: v4(),
    title: req.body.title,
    amount: req.body.amount,
    region: req.body.region,
    image: req.body.image,
    describe: req.body.describe,
  };
  await addNewPosterToDB(poster);
  res.redirect("/posters");
};

module.exports = {
  getPostersPage,
  addNewPosterPage,
  addNewPoster,
  getOnePoster,
};
