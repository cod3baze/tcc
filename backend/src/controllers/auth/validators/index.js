const { celebrate, Segments, Joi } = require("celebrate");

function verifyDataUserCreateSession(x, res, next) {
  const verify = celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  });

  try {
    if (verify._schema.body) {
      console.log(verify._schema.body);
      next();
    } else {
      console.log(`try again: ${verify}`);
      return res.send(verify._schema);
    }
  } catch (err) {
    return err;
  }
}

function verifyAuthorization() {
  return celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  });
}

module.exports = {
  verifyDataUserCreateSession,
  verifyAuthorization,
};
