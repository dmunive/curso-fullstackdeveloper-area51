import * as fs from 'fs'

const lectura = fs.readFileSync("./lectura.txt",{encoding: "utf8"})
console.log(lectura)

fs.readFile("./lectura.txt", {encoding: "utf8"}, (error, data)=> {
    if(error) {
        console.log(error)
    } else {
        fs.writeFile("./escritura.txt", data, error => console.log(error))
        console.log(data)
    }
})