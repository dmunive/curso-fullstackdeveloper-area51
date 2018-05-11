(function(){
    function navegadores(){
        const miFavorito = "Chrome"

        function mostrarFavorito(){
            console.log(miFavorito)
        }

        return mostrarFavorito
    }

    const navigators = navegadores()
    navigators()

    function matricula() {
        const nombreAlumno = "Jana"
        let inscritos = 0

        function averiguarCupos(){
            console.log("No hay cupos")
        }

        function buscarHorario(){
            console.log("No hay horario aun")
        }

        function incrementarInscrito(){
            inscritos++
            console.log(`Total inscritos: ${inscritos}`)
        }

        return {
            cupos: averiguarCupos,
            incrementar: incrementarInscrito,
            horario: buscarHorario
        }

        const matricula = matricula()
        matricula.buscarHorario()
    }


    function operaciones(valorInicial) {
        return {
            suma: function(valor) {
                return valor + valorInicial
            },
            resta: function(valor) {
                return valor - valorInicial
            },
            multiplicacion: function(valor) {
                return valor * valorInicial
            },
            division: function(valor){
                return valorInicial!=0 ? valor/valorInicial : 0
            }
        }
    }
    const obj = operaciones(10)
    console.log(obj.suma(20))
    console.log(obj.resta(40))
    console.log(obj.multiplicacion(60))
    console.log(obj.division(200))

    function cambiarLetra(tamano){
        return function(){
            // document.body.style.fontSize = `${tamano}px`
        }
    }

    const cambio30 = cambiarLetra(30)

    // boton.addEventListener("click", cambio30)


    function Contador() {
        let cuenta = 0

        return {
            obtener: function(){ return cuenta },
            incrementar: function(){ cuenta++ }
        }
    }

    const contador = Contador()
    console.log(contador.obtener())
    contador.incrementar()
    contador.incrementar()
    contador.incrementar()
    console.log(contador.obtener())





})()