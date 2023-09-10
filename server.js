const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const dotenv = require("dotenv");
const homeRoutes = require("./routes/homeRoutes");
const posterRoutes = require("./routes/posterRoutes");
const connectDB = require("./config/db");

//Connecting to database
connectDB();

//Env variables
dotenv.config();

const app = express();

//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Initialize template engine (Handlebars)
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

//Initialize routes
app.use("/", homeRoutes);
app.use("/posters", posterRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
