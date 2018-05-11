// Importaciones
import * as http from 'http'
import { IncomingMessage, ServerResponse } from 'http';

interface IRuta {
    path: string,
    method: string,
    message: string
}

// Servidor
const servidor = http.createServer((req: IncomingMessage, res: ServerResponse) => {

    const rutas = [
        { path: "/", method: "get", message: "Home" },
        { path: "/usuario", method: "post", message: "Listado de usuarios" },
        { path: "/cursos", method: "put", message: "Listado de cursos" },
        { path: "/cursos/edicion", method: "delete", message: "Edición de cursos" }
    ]


    let message = ""

    //rutas.forEach((ruta: any) => {
    //rutas.forEach((ruta: {path: string, message: string}) => {
    rutas.forEach((ruta: IRuta) => {
        if (ruta.path === req.url.toLowerCase() && ruta.method === req.method.toLocaleLowerCase()) {
            res.writeHead(200, { "content-type": "text/plain" })
            return res.end(ruta.message)
        }
    })

    res.writeHead(404, { "content-type": "text/plain" })
    res.end(req.url)



})

servidor.listen(4000, () => console.log("Servidor ejecutándose en el puerto 4000"))
