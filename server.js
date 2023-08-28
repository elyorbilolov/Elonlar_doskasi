const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.engine("hbs", engine({ extname: ".hbs" }));

app.set("view engine", "hbs");

app.get("/posters", (req, res) => {
  res.render("posters", {
    title: "Posters page",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
