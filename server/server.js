const express = require("express");
const PORT = 8080;
const app = express();
const router = require("express").Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const upload = require("./multer");
const cloudinary = require("./cloudinary");
const fs = require("fs");

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

//Cloudinary config
app.use("/upload-images", upload.array("image"), async (req, res) => {
	const uploader = async path => await cloudinary.uploads(path, "Images");

	if (req.method === "POST") {
		const urls = [];
		const files = req.files;
		for (const file of files) {
			const { path } = file;
			const newPath = await uploader(path);
			urls.push(newPath);
			fs.unlinkSync(path);
		}

		res
			.status(200)
			.json({ message: "images uploaded successfully", data: urls });
	} else {
		res.status(405).json({
			err: `${req.method} method not allowed`,
		});
	}
});

//Routing config
app.use("/api", router);

router.get("/projects", (req, res) => {
	Project.find({}, (err, projects) => {
		res.send(projects);
	});
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT} 😎😎😎`);
});
