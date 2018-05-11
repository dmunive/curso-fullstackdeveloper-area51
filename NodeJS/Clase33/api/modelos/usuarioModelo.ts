const mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	usuario: {
		type: String,
		required: true,
		lowerCase: true
	},

	constrasena: {
		type: String,
		required: true
	},

	refreshToken: String
})

const Usuario = mongoose.model("Usuario", esquema)

export { Usuario }