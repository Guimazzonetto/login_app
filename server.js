const express = require("express");
const mongoose = require("mongoose");

const app = express();

const apiConfig = require("./config/api.json");
const database = require("./config/database.json");
const register = require("./routes/register.js");
const login = require("./routes/login.js");

mongoose.set('strictQuery', true);
mongoose.connect(`${database.mongoHost}${database.db}`, () => {
  app.listen(apiConfig.port, console.log(`Listening port ${apiConfig.port}.`));
  app.use(express.json());
  app.use(`${apiConfig.version}/register`, register);
  // app.use(`${apiConfig.version}/login`, login);
}, error => console.log(`Error while connecting in database: ${error}`));