const mongoose = require("mongoose");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const crypto = require("crypto");

const conn = mongoose.createConnection(process.env.MONGO_URI);

//Init gfs
let gfs;
let open = conn.once("open", () => {
	//Init stream
	gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
		bucketName: "uploads",
	});
	gfs = Grid(conn.db, mongoose.mongo);
	gfs.collection("uploads");
	return gfs;
});

//Models
const ProjectModel = conn.model("Project", require("./models/Project"));

//Create storage object for photography uploads
const storage = new GridFsStorage({
	url: process.env.MONGO_URI,
	file: (req, file) => {
		return new Promise((resolve, reject) => {
			crypto.randomBytes(16, (err, buf) => {
				if (err) {
					return reject(err);
				}
				const fileInfo = {
					filename: file.originalname,
					random: "quitecure",
					bucketName: "uploads",
				};
				resolve(fileInfo);
			});
		});
	},
});

const upload = multer({ storage });

module.exports = { conn, upload, ProjectModel };
