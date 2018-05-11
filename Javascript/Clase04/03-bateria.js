const cajas = document.querySelectorAll("a")

cajas.forEach( elemento => {
    elemento.addEventListener("transitionend", evt => {
        console.log(evt)
        evt.target.classList.remove("presionada")
    })
})

window.addEventListener("keydown", e => {
    console.log(e)
    const teclaPresionada = e.keyCode
    //console.log(teclaPresionada)

    const audio = document.querySelector(`audio[data-tecla='${teclaPresionada}']`)

    if(audio){
        audio.currentTime = 0
        audio.play()

        const caja = document.querySelector(`a[data-tecla='${teclaPresionada}']`)

        caja.classList.add("presionada")
    }


})