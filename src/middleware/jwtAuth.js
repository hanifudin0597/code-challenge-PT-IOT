const { JWT_SECRET } = require('../helpers/env')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const { token } = req.headers
        const decoded = jwt.verify(token, JWT_SECRET)
        req.APP_DATA = {
            tokenDecoded: decoded
        }
        next()
    } catch (err) {
        res.json({
            code: 500,
            message: "Token Invalid",
            error: "Unauthorized"
        })
    }
}