const express = require('express')

const routes = express.Router()

const User = require('./controllers/user-controller')

//routes.get('/', Produto.index)

// Rotas de produtos
routes.post('/api/register', User.create)
routes.post('/api/login', User.verify)
//routes.get('/api/', Produto.index)
routes.get('/api/users/', User.index)
//routes.get('/api/users/:username', User.verify)
//routes.delete('/api/produtos/:id', Produto.delete)
//routes.put('/api/produtos', Produto.update)

module.exports = routes