const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
	title: String,
	description: String,
	price: Number,
	rating: Number,
	stock: Number,
	brand: String,
	category: String,
	thumbnail: String,
	images: {
		type: String
	}
});

module.exports = productsSchema;
