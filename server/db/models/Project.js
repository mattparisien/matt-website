const mongoose = require("mongoose");
mongoose.set('debug', true);


const projectSchema = new mongoose.Schema({
	name: String,
	image_id: String,
	description: String,
	url: String
});

module.exports = projectSchema;


