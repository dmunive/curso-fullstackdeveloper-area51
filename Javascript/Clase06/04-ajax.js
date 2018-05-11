const ajax = (verbo, url, formData) => {
	const promesa = new Promise((resolve, reject) => {
		const objxml = new XMLHttpRequest()

		objxml.addEventListener('readystatechange', respuesta => {
			const obj = respuesta.currentTarget

			if (obj.readyState == 4 && (obj.status == 200 || obj.status == 201)) {
				resolve(obj.responseText)
			}
		})

		objxml.open(verbo, url, true)

		if (verbo.toLowerCase() == 'post' || verbo.toLowerCase() == 'put') {
			objxml.send(formData)
		} else {
			objxml.send()
		}
	})

	return promesa
} 