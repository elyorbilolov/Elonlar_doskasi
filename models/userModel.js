const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true, // text ichiga yozish majburiy
      unique: true, //yagona ekanligini anglatadi
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true, //prabel bosh joyni olib tashlaydi
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6, //6-Qatordan kam bolmasligi kerak
    },
    posters: [{ type: Schema.Types.ObjectId, ref: "Poster" }],
  },
  {
    timestamps: true, //Malumotlar qachon yaratilganini etib turadi
  }
);

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = model("User", userSchema);
