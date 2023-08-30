const { addNewPosterToDB } = require("../db/posters");
const { v4 } = require("uuid");

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

const addNewPoster = async (req, res) => {
  const poster = {
    id: v4(),
    title: req.body.title,
    amount: req.body.amount,
    region: req.body.region,
    image: req.body.image,
    description: req.body.description,
  };
  await addNewPosterToDB(poster);
  res.redirect("/");
};

module.exports = { getPostersPage, addNewPosterPage, addNewPoster };
