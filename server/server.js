const express = require("express");
const PORT = 8080;
const app = express();
const router = require("express").Router();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const methodOverride = require("method-override");
const fs = require("fs");

//Express config
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
require("dotenv").config();
app.use(methodOverride("_method"));

//Routing config
app.use("/api", require("./routing/routes"));

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT} 😎😎😎`);
});
