const router = require('express').Router()
const jwtAuth = require('../middleware/jwtAuth')
const { index, detail, store, update, destroy } = require('../controllers/product.controller')
const { isUser } = require('../middleware/authorization')


router
    .get('/product',jwtAuth, isUser, index)
    .get('/product/:id',jwtAuth, isUser, detail)
    // .post('/product',jwtAuth, isUser, store)
    .put('/product/:id',jwtAuth, isUser, update)
    .delete('/product/:id',jwtAuth, isUser, destroy)

module.exports = router