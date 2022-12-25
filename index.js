const express = require('express')
const productRouter = require('./routes/product.routes')
const orderRouter = require('./routes/order.routes')

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use('/api/v1', productRouter)
app.use('/api/v1', orderRouter)
app.listen(PORT, () => { console.log(`app started on ${PORT}`) })