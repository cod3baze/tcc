module.exports = {
   async store(req, res) {
      const { email, password, confirm } = req.body

      return res.json({email, password, confirm})
   }
}