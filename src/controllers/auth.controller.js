const { Users } = require('../models');
const jwt = require('jsonwebtoken');
const jwtToken = require('../helpers/generateJwtToken');

module.exports = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const users = await Users.findAll({
                where: {
                    email,
                    password
                }
            })
            if (users.length) {
                const jwt = await jwtToken({
                    id: users[0].id,
                    role_id : users[0].role_id
                });
                return res.json({
                    code: 200,
                    message: "Login Success",
                    data: null,
                    token : jwt
                })
            }
            return res.json({
                    code: 401,
                    message: "Wrong Email or Password",
                    error: "Login failed"
            })
        } catch (error) {
           return res.json({
                    code: 500,
                    message: "Internal Server Error",
                    error: "Internal Server Error"
            })
        }
    },
}