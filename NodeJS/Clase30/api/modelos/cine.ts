import mongoose = require("mongoose")

const esquemaCine = new mongoose.Schema({
	nombre: {
		type: String,
		trim: true,
		required: "El nombre es requerido"
	},

	descripcion: {
		type: String,
		trim: true
	},

	tipos: [{
		type: String
	}]
})

const cine = mongoose.model("Cine", esquemaCine)

export { cine }