const bcrypt = require("bcrypt");
const User = require("../../model/User");
const { generateToken } = require("./utils/index");

module.exports = {
  // ~/register
  async store(req, res) {
    const { name, email, password } = req.body;

    try {
      if (await User.findOne({ email }))
        return res.status(400).send({ error: "User already exists - 0110" });

      const user = await User.create({ email, name, password });

      user.password = undefined;

      return res.send({ user, token: generateToken({ id: user._id }) });
    } catch (err) {
      return res.status(401).send({ error: "Registration failed - 010" });
    }
  },

  // ~/authenticate
  async index(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email }).select("+password");

      if (!user) return res.status(401).send({ error: "User not found" });

      if (!(await bcrypt.compare(password, user.password)))
        return res.status(401).send({ error: "Invalid password" });

      user.password = undefined;

      return res.send({ user, token: generateToken({ id: user._id }) });
    } catch (err) {
      return res.status(401).send({ error: "Cannot login" });
    }
  },
};
