import * as fs from 'fs'

const lectura = fs.createReadStream('./lectura.txt', "utf8")
const escritura = fs.createWriteStream('./stream.txt', {encoding: "utf8"})

/*lectura.on("data", chunk => {
    escritura.write(chunk)
})*/

lectura.pipe(escritura)