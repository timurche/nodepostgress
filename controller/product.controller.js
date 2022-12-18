class ProductController {
	async createProduct(req, res) {
		const { pname, price } = req.body
		console.log(pname, price)
		res.json('ok')
	}
	async getProducts(req, res) {

	}
	async getOneProduct(req, res) { }
	async updateProduct(req, res) { }
	async deleteProduct(req, res) { }
}

module.exports = new ProductController()