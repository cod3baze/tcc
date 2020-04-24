module.exports = {
  // new user
  async store(req, res) {
    const { name, email, password } = req.body;

    return res.json({ name, email, password });
  },

  // user login
  async indexedDB(req, res) {
    const { email, password } = req.body;

    return res.json({ ok: true });
  },

  async index(req, res) {
    return res.json({ o: true });
  },
};
