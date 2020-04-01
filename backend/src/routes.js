const { Router } = require('express')
const routes = Router()
const userController = require('./controllers/user/userController')
const sessionController = require('./controllers/session/sessionController')

// pegar todos os users
routes.get('/users', userController.index)
// inscrever user
routes.post('/sessions', sessionController.store)

module.exports = routes
