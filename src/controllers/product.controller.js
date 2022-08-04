const { Users, Products } = require('../models');

module.exports = {
  index: async (req, res) => {
    try {
        const products = await Products.findAll()
        return res.json({
            code: 200,
            data: products,
            message: 'Get all Products success'
        })
    } catch (error) {
        console.log(error)
      res.json(error)
    }
  },
  detail: async (req, res) => {
    try {
        const id = req.params.id
        
        const product = await Products.findAll({
            where: {
                id
            }
        })
        return res.json({
            code:200,
            data: product[0],
            message: 'Get detail Product success'
        })
    } catch (error) {
      res.json(error)
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id
      const { name, description } = req.body
      const product = await Products.update({
          name,
          description
      }, {
        where: {
          id
        }
      })
        return res.json({
            code: 200,
            message: 'Update product success'
        })
    } catch (error) {
      res.json(error)
    }
  },
  destroy: async (req, res) => {
    try {
      try {
        const id = req.params.id
        await Products.destroy({where:{ id:id }})
        return  res.json({
            code: 200,
            message: 'destroy Product success'
        })
      } catch (error) {
        res.json(error)
      }
    } catch (error) {
      res.json(error)
    }
  }
}