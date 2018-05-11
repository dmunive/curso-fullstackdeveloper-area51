import { EventEmitter } from 'events'

export class Reloj extends EventEmitter {
    obtenerHora(){
        const fecha = new Date()
        const hora = fecha.getHours()
        const minutos = fecha.getMinutes()
        const segundos = fecha.getSeconds()

        let cHora, cMinutos, cSegundos
        cHora = hora > 9 ? `${hora}`: `0${hora}`
        cMinutos = minutos > 9 ? `${minutos}`: `0${minutos}`
        cSegundos = segundos > 9 ? `${segundos}`: `0${segundos}`

        return `${cHora}:${cMinutos}:${cSegundos}`
    }

    iniciar(){
        setInterval(()=> {
            this.emit("hora actual", this.obtenerHora())
        }, 1000)
    }
}