const registros = [
    {
        id: 30,
        titulo: "Farmacia Universal",
        ubicacion: "Av. Sucre 657"
    },
    {
        id: 40,
        titulo: "Farmacia Salud",
        ubicacion: "Av. Del Sol 456"
    },
    {
        id: 10,
        titulo: "Farmacia Señor de Luren",
        ubicacion: "Av. Bolívar 123"
    },
    {
        id: 23,
        titulo: "Farmacia Señor de Muruhuay",
        ubicacion: "Av. Roosevelt 478"
    }
]

const tbody = document.getElementsByTagName("tbody")[0]
const input = document.getElementById("textoABuscar")

/*const filas = registros
    .sort((a, b) => a.id > b.id)
    .map(farmacia => {
        let row = ""
        row = row + "<tr>"
        row = row + "<td>" + farmacia.id + "</td>"
        row = row + "<td>" + farmacia.titulo + "</td>"
        row = row + "<td>" + farmacia.ubicacion + "</td>"
        row = row + "</tr>"

        return row
    }).join("")

tbody.innerHTML = filas*/

input.addEventListener("keyup", function () {
    const texto = this.value

    if(texto=="") {
        tbody.innerHTML = ""
    } else {
        const filas = registros
        .filter(item => {
            return item.titulo.toLowerCase().indexOf(texto.toLowerCase()) >= 0  || item.ubicacion.toLowerCase().indexOf(texto.toLowerCase()) >= 0
        })
        .sort((a, b) => a.id > b.id)
        .map(farmacia => {
            let row = ""
            row = row + "<tr>"
            row = row + "<td>" + farmacia.id + "</td>"
            row = row + "<td>" + farmacia.titulo + "</td>"
            row = row + "<td>" + farmacia.ubicacion + "</td>"
            row = row + "</tr>"

            return row
        }).join("")

        tbody.innerHTML = filas
    }

    
})

// Filtrar los registros
/*
const filtro = registros.filter( item => {
    return item.titulo.toLowerCase().indexOf("far") >= 0
})

console.log(filtro)*/