module.exports = {
  async store(req, res) {
    const { title, tags, link, body } = req.body;

    const user = { title, tags, link, body, user: req.userId };

    return res.send({ user });
  },
};
