const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/pdf-maker");

module.exports = mongoose.connection;