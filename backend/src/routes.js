const { Router } = require("express");
const routes = Router();
const { celebrate, Segments, Joi } = require("celebrate");

const endController = require("./controllers/end/endController");
const sessionController = require("./controllers/auth/sessionController");
const {
  verifyDataUserCreateSession,
} = require("./controllers/auth/validators/index");

// pegar todos os users
routes.get("/users", endController.index);

// rotas de auth
routes.post(
  "/sessions",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  sessionController.store
);

routes.get("/login", verifyDataUserCreateSession, sessionController.index);

module.exports = routes;
