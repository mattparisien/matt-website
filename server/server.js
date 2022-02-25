const express = require("express");
const PORT = 8080;
const app = express();
const router = require("express").Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

//Express config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
require("dotenv").config();

//Mongo config
mongoose.connect(
	process.env.MONGO_URI,
	() => {
		console.log("Connected");
	},
	e => console.log(e)
);
const Project = require("./db/models/Project");

//Routing config
app.use("/api", router);

router.get("/projects", (req, res) => {});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT} 😎😎😎`);
});
