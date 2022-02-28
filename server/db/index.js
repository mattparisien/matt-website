const mongoose = require("mongoose");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const crypto = require("crypto");

const conn = mongoose.createConnection(process.env.MONGO_URI);


module.exports = { conn };
