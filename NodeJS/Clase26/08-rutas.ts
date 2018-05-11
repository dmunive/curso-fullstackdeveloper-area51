import * as http from 'http'
import { IncomingMessage, ServerResponse } from 'http';

const servidor = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const ruta = req.url.toLowerCase()

    const rutas: Array<{}> = [
        { route: "/", mensaje: "Home" },
        { route: "/servidor", mensaje: "Listado servidores" },
        { route: "/servidor/id", mensaje: "Editando" }
    ]

    res.writeHead(200, { 'content-type': "text/plain" })

    var encontrado: boolean = false

    const indice = rutas.forEach((item: any) => {
        if (item["route"] === ruta) {
            encontrado = true
            res.end(item["mensaje"])
        }
    })

    res.end("Ruta no encontrada")
})

servidor.listen(4000, () => console.log("Servidor ejecutándose"))