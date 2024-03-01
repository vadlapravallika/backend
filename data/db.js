const mongoose = require('mongoose');
var dotenv = require("dotenv");

dotenv.config();
var mongo_uri = process.env.MONGO_URI;
mongoose.connect(mongo_uri);

module.exports = db;