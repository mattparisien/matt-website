const router = require("express").Router();

module.exports = db => {
	router.get("/projects", (req, res) => {
		res.send("hi");
	});
};
