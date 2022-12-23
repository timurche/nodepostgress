const db = require("../db")
class ProductController {
	async createProduct(req, res) {
		const { pname, price } = req.body
		const newProduct = await db.query(`INSERT INTO PRODUCTS (pname, price) VALUES ($1, $2) RETURNING *`, [pname,price])
		res.json(newProduct)
	}
	async getProducts(req, res) {

	}
	async getOneProduct(req, res) { }
	async updateProduct(req, res) { }
	async deleteProduct(req, res) { }
}

module.exports = new ProductController()