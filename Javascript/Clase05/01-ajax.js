const ajax = (verbo, url, formData, cb) => {
	const objxml = new XMLHttpRequest()

	objxml.addEventListener('readystatechange', respuesta => {
		const obj = respuesta.currentTarget

		if(obj.readyState == 4 && (obj.status == 200 || obj.status == 201)) {
			if(verbo.toLowerCase() == 'get') {
				cb(obj.responseText)
			} else {
				cb()
			}
		}
	})

	objxml.open(verbo, url, true)

	if(verbo.toLowerCase() == 'post' || verbo.toLowerCase() == 'put') {
		objxml.send(formData)
	} else {
		objxml.send()
	}
	
} 