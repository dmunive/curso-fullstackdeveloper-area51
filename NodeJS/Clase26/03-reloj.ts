import { Reloj } from './reloj'

const obj = new Reloj()
obj.on("hora actual", hora => {
    console.log(hora)
})
obj.iniciar()
