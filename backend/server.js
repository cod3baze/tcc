const express = require("express");
require("./src/database");
const cors = require("cors");
const bodyParser = require("body-parser");
const { errors } = require("celebrate");
const routes = require("./src/routes");

// require("")

const App = express();

App.use(cors());
App.use(express.json());
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));
App.use(routes);
App.use(errors());

App.listen(3333);
