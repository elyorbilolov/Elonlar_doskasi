const Poster = require("../models/posterModel");
//@route        GET /
//@desc         GET home page
//@access       Public
const getHomePage = async (req, res) => {
  const posters = await Poster.find().lean();
  res.render("home", {
    title: "Home page",
    posters,
    user: req.session.user,
    isLogged: req.session.isLogged,
    url: process.env.URL,
  });
};

module.exports = { getHomePage };
