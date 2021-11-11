const express = require('express')

const routes = express.Router()

const User = require('./controllers/user-controller')

//routes.get('/', Produto.index)

// Rotas de usuários
routes.post('/api/register', User.create)
routes.post('/api/login', User.verify)
routes.get('/api/users/', User.index)
//routes.delete('/api/produtos/:id', Produto.delete)
//routes.put('/api/produtos', Produto.update)

module.exports = routes