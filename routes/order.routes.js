const Router = require('express')
const router = new Router()

const orderController = require('../controller/order.controller')

router.post('/order', orderController.createOrder)
router.get('/orders', orderController.getOrders)
//router.get('/product/:id', orderController.getOneProduct)
//router.put('/product/', orderController.updateProduct)
//router.delete('/product/:id', orderController.deleteProduct)

module.exports = router
