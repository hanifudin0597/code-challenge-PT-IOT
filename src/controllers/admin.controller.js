const { Users } = require('../models')

module.exports = {
    active: async (req, res) => {
    try {
        const { id } = req.params;
      
        const users = await Users.findAll({
                where: {
                    id
                }
        })
      if (users.length) {
          if (users[0].role_id === 1) {
             return res.json({
              code: 403,
              message: "Can't deactivate admin account"
            })
          }
            const role_id = 2
            const user = await Users.update({
                role_id
            }, {
                where: {
                    id
                }
            })
            return res.json({
                code: 200,
                message: "Active user success",
            })
        }
      res.json({
        code: 500,
        message: 'active User failed'
      })
    } catch (error) {
      res.json(error)
    }
    },
    nonactive: async (req, res) => {
    try {
        const { id } = req.params;
        
        if (id === 1) {
            return res.json({
              code: 403,
              message: "Can't deactivate admin account"
            })
        }
        
        const users = await Users.findAll({
                where: {
                    id
                }
        })
        if (users.length) {
           if (users[0].role_id === 1) {
              return res.json({
                code: 403,
                message: "Can't deactivate admin account"
              })
            }
            const role_id = 3
            const user = await Users.update({
                role_id
            }, {
                where: {
                    id
                }
            })
            return res.json({
                code: 200,
                message: "Non Active user success",
            })
        }
      res.json({
        code: 500,
        message: 'Non active User failed'
      })
    } catch (error) {
      res.json(error)
    }
    },
    index: async (req, res) => {
    try {
      const users = await Users.findAll()
      res.json({
        data: users,
        message: 'get all user success'
      })
    } catch (error) {
      res.json(error)
    }
  },
}