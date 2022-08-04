require('dotenv').config()

module.exports = {
  APP_PORT: process.env.APP_PORT,
  DB_HOSTNAME: process.env.DB_HOSTNAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_DIALECT: process.env.DB_DIALECT,
  JWT_SECRET: process.env.JWT_SECRET
}