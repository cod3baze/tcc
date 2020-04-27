// const User = require("../../model/User");

module.exports = {
  // new user
  async store(req, res) {
    const { name, email, password } = req.body;

    return res.json({ name, email, password });
  },
};
