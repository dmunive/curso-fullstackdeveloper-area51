import * as http from 'http'
import * as fs from 'fs'
import { IncomingMessage, ServerResponse } from 'http';

const servidor = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {'content-type': "text/html"})

    const lectura = fs.createReadStream("./home.html", "utf8")
    lectura.pipe(res)
})

servidor.listen(4000, ()=> console.log("Servidor ejecutándose"))
