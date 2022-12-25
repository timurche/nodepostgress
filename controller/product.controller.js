const db = require("../db")
class ProductController {
	async createProduct(req, res) {
		const { pname, price } = req.body
		const newProduct = await db.query(`INSERT INTO PRODUCTS (pname, price) VALUES ($1, $2) RETURNING *`, [pname, price])
		res.json(newProduct.rows[0])
	}
	async getProducts(req, res) {
		const productList = await db.query(`select * from products`)
		res.json(productList.rows)

	}
	async getOneProduct(req, res) {
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
	}
}

module.exports = new ProductController()