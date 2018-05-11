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

esquemaCine.statics.listarGeneros = function () {
	return this.aggregate([
		{ $unwind: "$tipos" },
		{ $group: { _id: "$tipos", cuenta: { $sum: 1 } } },
		{ $sort: { cuenta: -1 } }
	])
}

const cine: any = mongoose.model("Cine", esquemaCine)

export { cine }