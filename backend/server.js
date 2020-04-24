const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { errors } = require("celebrate");
const routes = require("./src/routes");

const App = express();

App.use(bodyParser.json());
App.use(cors());
App.use(express.json());
App.use(routes);
App.use(errors());

App.listen(3333);
