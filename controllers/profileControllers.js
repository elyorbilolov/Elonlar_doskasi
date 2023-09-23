const User = require("../models/userModel");
//@route        GET /profile/:username
//@desc         User profile page
//@access       Private
const getProFilePage = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username })
      .populate("posters")
      .lean();
    if (!user) throw new Error("Bunday foydalanuvchi mavjud emas");
    const isMe = user._id == req.session.user._id.toString();
    res.render("user/profile", {
      title: `${user.username}`,
      user,
      isMe,
      myposters: req.session.user.username,
      posters: user.posters,
      isAuth: req.session.isLogged,
      url: process.env.URL,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProFilePage };
