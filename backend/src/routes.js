const { Router } = require("express");

const sessionController = require("./controllers/auth/sessionController");

const routes = Router();

routes.post("/auth/authentication", sessionController.store);

module.exports = routes;
