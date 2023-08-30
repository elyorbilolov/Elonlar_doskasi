const fs = require("fs");
const path = require("path");

const addNewPosterToDB = async (poster) => {
  const data = () => fs.readFileSync(path.join(__dirname, "db.json"), "utf-8");
  const posters = JSON.parse(data());
  posters.push(poster);
  fs.writeFile(
    path.join(__dirname, "db.json"),
    JSON.stringify(posters),
    "utf-8",
    (err) => {
      if (err) throw err;
    }
  );
  console.log("Data added");
};

module.exports = { addNewPosterToDB };

