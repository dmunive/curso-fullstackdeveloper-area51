const mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	texto: {
		type: String,
		required: true
	},

	cine: {
		type: mongoose.Schema.ObjectId,
		ref: "Cine",
		required: true
	}
})

esquema.pre("find", function (next) {
	this.populate("cine")
	next()
})

const Opiniones = mongoose.model("Opiniones", esquema)

export { Opiniones }