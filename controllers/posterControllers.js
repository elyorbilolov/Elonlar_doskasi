const Poster = require("../models/posterModel");
const { v4 } = require("uuid");

//@route        GET /posters
//@desc         GET all posters
//@access       Public
const getPostersPage = async (req, res) => {
  try {
    const posters = await Poster.find().lean();
    res.render("poster/posters", {
      title: "Posters page",
      posters: posters.reverse(),
      url: process.env.URL,
    });
  } catch (error) {
    console.log(error);
  }
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
  try {
    const poster = {
      title: req.body.title,
      amount: req.body.amount,
      region: req.body.region,
      description: req.body.description,
      image: "uploads/" + req.file.filename,
    };
    await Poster.create(poster);
    res.redirect("/posters");
  } catch (error) {
    console.log(error);
  }
};

//@route        GET /posters/:id
//@desc         GET one poster by id
//@access       Public
const getOnePoster = async (req, res) => {
  try {
    const poster = await Poster.findByIdAndUpdate(req.params.id, { $inc: { visits: 1 } }, { new: true }).lean();
    res.render("poster/one", {
      title: poster.title,
      url: process.env.URL,
      poster,
    });
  } catch (error) {
    console.log(error);
  }
};

//@route        GET /posters/:id/edit
//@desc         Get edit poster page
//@access       Private (Own)
const getEditPosterPage = async (req, res) => {
  try {
    const poster = await Poster.findById(req.params.id).lean();
    res.render("poster/edit-poster", {
      title: "Edit page",
      url: process.env.URL,
      poster,
    });
  } catch (error) {
    console.log(error);
  }
};

//@route        POST /posters/:id/edit
//@desc         Edit poster by id
//@access       Private (Own)

const updatePoster = async (req, res) => {
  try {
    const editedPoster = {
      title: req.body.title,
      amount: req.body.amount,
      image: "uploads/" + req.file.filename,
      region: req.body.region,
      description: req.body.description,
    };
    await Poster.findByIdAndUpdate(req.params.id, editedPoster);
    res.redirect("/posters");
  } catch (error) {
    console.log(error);
  }
};

//@route        POST /posters/:id/delete
//@desc         Delete poster by id
//@access       Private (Own)
const deletePoster = async (req, res) => {
  try {
    await Poster.findByIdAndRemove(req.params.id);
    res.redirect("/posters");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPostersPage,
  addNewPosterPage,
  addNewPoster,
  getOnePoster,
  getEditPosterPage,
  updatePoster,
  deletePoster,
};
