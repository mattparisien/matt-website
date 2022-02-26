const mongoose = require("mongoose");
mongoose.set('debug', true);


const projectSchema = new mongoose.Schema({
	name: String,
	url: String,
	description: String,
	featureImage: String,
});

module.exports = projectSchema;
