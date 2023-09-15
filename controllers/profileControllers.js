const User = require("../models/userModel");
//@route        GET /profile/:username
//@desc         User profile page
//@access       Private
const getProFilePage = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).lean();
    if (!user) throw new Error("Bunday foydalanuvchi mavjud emas");
    res.render("user/profile", {
      title: `${user.username}`,
      user,
      isAuth: req.session.isLogged,
      url: process.env.URL,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProFilePage };
