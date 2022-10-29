const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connection Successful woot");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

module.exports = { app };
