const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')

const auth = require('./src/routers/auth.route')
const admin = require('./src/routers/admin.route')
const user = require('./src/routers/user.route')
const { APP_PORT } = require('./src/helpers/env')

const app = express();
app.use(cors())
app.use(helmet())
app.use(xss())
app.use(bodyParser.json())
app.use(auth,admin,user)


const PORT = APP_PORT || 3000
app.listen(PORT, () => {
  console.log(`service running at port ${PORT}`)
})

module.exports = app