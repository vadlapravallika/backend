// index.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();
var mongo_uri = process.env.MONGO_URI;
mongoose.connect(mongo_uri);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
