const db = require("../db")
class OrderController {
	async createOrder(req, res) {
		const { prodId, sum } = req.body
		const newOrder = await db.query(`INSERT INTO ORDERS (prod_id, sum) VALUES ($1, $2) RETURNING *`, [prodId, sum])
		res.json(newOrder.rows[0])
	}
	async getOrders(req, res) {
		const prodID = req.query.id
		const ordersList = await db.query(`select * from orders where prod_id = $1`, [prodID])
		res.json(ordersList.rows)

	}
	/* 	async getOneProduct(req, res) {
			const prodID = req.params.id
			const productItem = await db.query(`select * from products where id = $1`, [prodID])
			res.json(productItem.rows)
		}
		async updateProduct(req, res) {
			const { id, pname, price } = req.body
			const updatedProductItem = await db.query(`UPDATE products SET pname=$2, price = $3 where id=$1 RETURNING *`, [id, pname, price])
			res.json(updatedProductItem.rows)
		}
		async deleteProduct(req, res) {
			const deletingID = req.params.id
			const deleteProductItem = await db.query(`DELETE from products where id=$1`, [deletingID])
			res.json(deleteProductItem.rows)
		} */
}

module.exports = new OrderController()