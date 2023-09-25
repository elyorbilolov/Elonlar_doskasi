const User = require("../models/userModel");
//@route        GET /profile/:username
//@desc         User profile page
//@access       Private
const getProFilePage = async (req, res) => {
  try {
    const userProfile = await User.findOne({ username: req.params.username })
      .populate("posters")
      .lean();
    if (!userProfile) throw new Error("Bunday foydalanuvchi mavjud emas");

    let isMe = false;
    if (req.session.user) {
      isMe = userProfile._id == req.session.user._id.toString();
    }

    res.render("user/profile", {
      title: `${userProfile.username}`,
      user: req.session.user,
      userProfile,
      isMe,
      posters: userProfile.posters,
      isAuth: req.session.isLogged,
      url: process.env.URL,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProFilePage };
