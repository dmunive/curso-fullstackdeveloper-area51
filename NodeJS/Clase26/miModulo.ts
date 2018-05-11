export module sistemas {
    export class Reloj {
        obtenerHora(): Date {
            return new Date()
        }
    }
}

export const fechaEnMs = ()=> {
    const fecha = new Date()

    return fecha.getTime()
}

export const annoActual = () => {
    return (new Date()).getFullYear()
}

const diaActual = ()=>{
    return (new Date()).getDate()
}

export default diaActual