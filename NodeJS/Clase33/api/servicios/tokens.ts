const moment = require("moment")
const randToken = require("rand-token")
const jwt = require("jwt-simple")

const tiempoExpiracion = 10 * 60
const secreto = "JavaXcriptEsl0m@ximo3nprogramaciOnW3b"

const refreshTokens = []

const crearTokens = id => {
	const payload = {
		id: id,
		iat: moment().unix(),
		exp: moment().add(tiempoExpiracion, "seconds").unix()
	}

	const refreshToken = randToken.uuid(256)

	refreshTokens.push(refreshToken)

	const tokens = {
		accessToken: jwt.encode(payload, secreto),
		refreshToken: refreshToken
	}

	return tokens
}

const generarNuevoAccessToken = rt => {
	if (refreshTokens.indexOf(rt) != -1) {
		const payload = {
			id: refreshTokens.indexOf(rt),
			iat: moment().unix(),
			exp: moment().add(tiempoExpiracion, "seconds").unix()
		}
		const nuevoAccessToken = jwt.encode(payload, secreto)

		return { accessToken: nuevoAccessToken }
	}
	return { estado: 500, mensaje: "Refresh Token inválido" }
}

const validarAccessToken = (at): Promise<{}> => {

	const promesa = new Promise((resolve, reject) => {
		try {
			const payload = jwt.decode(at, secreto)
			resolve({ estado: 200, id: payload.id })
		} catch (error) {
			if (error.message.toLower() === "token expired") {
				reject({ estado: 401, mensaje: "El token ha expirado" })
			} else {
				reject({ estado: 500, mensaje: "El token es inválido" })
			}
		}
	})

	return promesa
}

export { crearTokens, generarNuevoAccessToken, validarAccessToken }