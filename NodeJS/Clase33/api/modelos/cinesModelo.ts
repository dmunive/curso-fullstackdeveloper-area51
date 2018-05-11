import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true
	},

	ubicacion: {
		coordenadas: [
			{
				type: Number,
				required: false
			}
		],
		ubigeo: {
			type: Number,
			required: false
		}
	},

	caracteristicas: [{ type: String, required: false }]
})

const Cine = mongoose.model("Cine", esquema)

export { Cine }

