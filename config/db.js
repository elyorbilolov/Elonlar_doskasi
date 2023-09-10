const mongoose = require("mongoose");

const connectDB = async () => {
  const connecting = await mongoose.connect(
    "mongodb://127.0.0.1:27017/postersapp",
    {
      useNewUrlParser: true,
      //useCreateIndex: true,
      //useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );
  console.log(`MongoDB connect to: ${connecting.connection.host}`);
};

module.exports = connectDB;
