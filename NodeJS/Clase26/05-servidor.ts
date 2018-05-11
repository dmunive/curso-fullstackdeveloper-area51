import * as http from 'http'
import * as fs from 'fs'
import { IncomingMessage, ServerResponse } from 'http';

const servidor = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    //res.writeHead(200, {'content-type': 'text/plain'})
    //res.end("Hola")

    //res.writeHead(200, {'content-type': "text/html"})
    //res.end("<h1>Título de la página</h1>")

    //res.writeHead(200, {'content-type': 'application/json'})
    //res.end(JSON.stringify({nombre: "Sergio"}))

    fs.readFile("./navidad.pdf", "utf8", (error, data)=>{
        res.writeHead(200, {'content-type': "application/pdf"})
        res.end(data)
    })
})

servidor.listen(4000, ()=> console.log("Servidor ejecutándose"))