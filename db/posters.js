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

const getAllPosters = async () => {
  const data = () => fs.readFileSync(path.join(__dirname, "db.json"), "utf-8");
  const posters = JSON.parse(data());
  return posters;
};

const getPosterById = (id) => {
  const data = () => fs.readFileSync(path.join(__dirname, "db.json"), "utf-8");
  const posters = JSON.parse(data());
  const poster = posters.find((p) => p.id === id);
  return poster;
};

const editPosterById = (id, editedPoster) => {
  const data = () => fs.readFileSync(path.join(__dirname, "db.json"), "utf-8");
  let posters = JSON.parse(data());
  const index = posters.findIndex((p) => p.id === id);
  posters[index] = {
    id: posters[index].id,
    title: editedPoster.title,
    amount: editedPoster.amount,
    image: editedPoster.image,
    region: editedPoster.region,
    description: editedPoster.description,
  };
  fs.writeFileSync(
    path.join(__dirname, "db.json"),
    JSON.stringify(posters),
    "utf-8"
  );
  console.log("Data edited...");
};

const deletePosterById = async (id) => {
  const data = () => fs.readFileSync(path.join(__dirname, "db.json"), "utf-8");
  let posters = JSON.parse(data());
  posters = posters.filter((p) => p.id !== id);
  fs.writeFileSync(
    path.join(__dirname, "db.json"),
    JSON.stringify(posters),
    "utf-8"
  );
  console.log("Data deleted...");
};

module.exports = {
  addNewPosterToDB,
  getAllPosters,
  getPosterById,
  editPosterById,
  deletePosterById,
};
