const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
	name: String,
	url: String,
	description: String,
	featureImage: String,
});

module.exports = mongoose.model("Project", projectSchema);
