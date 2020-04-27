const { Router } = require("express");

const authMiddleware = require("./controllers/end/middlewares/auth");

const sessionController = require("./controllers/auth/sessionController");
const lessonController = require("./controllers/lesson/lessonController");

const routes = Router();

// router session
routes.post("/auth/register", sessionController.store);
routes.post("/auth/authenticate", sessionController.index);

// router lesson
routes.post("/new/lesson", authMiddleware, lessonController.store);

module.exports = routes;
