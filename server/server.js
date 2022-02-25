const express = require("express");
const PORT = 8080;
const app = express();
const router = require("express").Router();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const crypto = require("crypto");
const methodOverride = require("method-override");

const fs = require("fs");

//Express config
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.static("public"));
require("dotenv").config();
app.use(methodOverride("_method"));

//Mongo config
// const conn = mongoose.connect(
// 	process.env.MONGO_URI,
// 	() => {
// 		console.log("Connected");
// 	},
// 	e => console.log(e)
// );

const conn = mongoose.createConnection(process.env.MONGO_URI);
const Project = require("./db/models/Project");
const Image = require("./db/models/Image");

//Init gfs
let gfs;
conn.once("open", () => {
	//Init stream
	gfs = Grid(conn.db, mongoose.mongo);
	gfs.collection("uploads");
});

//Create storage object
const storage = new GridFsStorage({
	url: process.env.MONGO_URI,
	file: (req, file) => {
		return new Promise((resolve, reject) => {
			crypto.randomBytes(16, (err, buf) => {
				if (err) {
					return reject(err);
				}
				const filename = buf.toString("hex") + path.extname(file.originalname);
				const fileInfo = {
					filename: filename,
					bucketName: "uploads",
				};
				resolve(fileInfo);
			});
		});
	},
});
const upload = multer({ storage });

//Routing config
app.use("/api", router);

router.get("/projects", (req, res) => {
	Project.find({}, (err, projects) => {
		res.send(projects);
	});
});

router.post("/upload", upload.single("image"), (req, res) => {
	//Upload photography route and stores in db

	res.json({ file: req.file });
});

//Fetch photo files
router.get("/photography", (req, res) => {
	gfs.files.find().toArray((err, files) => {
		if (!files || files.length === 0) {
			return res.status(404).json({ error: "No files exist" });
		}
		//Files exist
		return res.json(files);
	});
});

router.get("/seeding", (req, res) => {
	const projects = [
		{
			name: "Gets It Done",
			url: "https://priceless-ptolemy-ba407f.netlify.app/",
			description:
				"An app to view and post once-off odd job listings. Need your lawn mowed, gutters cleaned, help moving? This app is for you! Post details of a job you need done, photos and a price you are willing to pay. View and manage your personal listings. Accept or decline offers and connect with successful applicants. Search for, view and offer to do jobs that need doing in your area.",
			featureImage:
				"https://images.pexels.com/photos/5764701/pexels-photo-5764701.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		},
		{
			name: "Keyhole",
			url: "https://priceless-ptolemy-ba407f.netlify.app/",
			description:
				"Keyhole is a full stack, multi-page password keeper which utilizes hashing and two way AES 256bit encryption to ensure the secure storage of passwords for each user.",
			featureImage:
				"https://images.pexels.com/photos/6484516/pexels-photo-6484516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		},
		{
			name: "Scheduler",
			url: "https://priceless-ptolemy-ba407f.netlify.app/",
			description:
				"Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors. Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday. Each appointment has one student and one interviewer. When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list. The user can save the appointment and view the entire schedule of appointments on any day of the week. Appointments can also be edited or deleted. The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database.",
			featureImage:
				"https://images.pexels.com/photos/7840137/pexels-photo-7840137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		},
		{
			name: "TinyApp",
			url: "https://priceless-ptolemy-ba407f.netlify.app/",
			description:
				"TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).",
			featureImage:
				"https://images.pexels.com/photos/11140734/pexels-photo-11140734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		},
	];

	Project.insertMany(projects)
		.then(() => res.status(200).send("Success!"))
		.catch(err => res.status(400).send(err));
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT} 😎😎😎`);
});
