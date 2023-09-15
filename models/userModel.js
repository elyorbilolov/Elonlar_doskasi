const { Schema, model } = require("mongoose");

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

module.exports = model("User", userSchema);
