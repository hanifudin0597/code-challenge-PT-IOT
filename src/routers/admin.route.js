const router = require('express').Router()
const { active, nonactive,index } = require('../controllers/admin.controller')
const { isAdmin } = require('../middleware/authorization')
const jwtAuth = require('../middleware/jwtAuth')


router 
  .put('/active/:id', jwtAuth, isAdmin, active)
  .put('/nonactive/:id',jwtAuth, isAdmin, nonactive)
  .get('/user',jwtAuth, isAdmin, index)

module.exports = router