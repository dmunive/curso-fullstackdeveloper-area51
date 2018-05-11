const tbody = document.querySelector("tbody");
const inputTitulo = document.querySelector("#titulo");
const inputDireccion = document.querySelector("#direccion");
const btnGuardar = document.querySelector("#btnGuardar");

let idSeleccionado

const listar = () => {
  const cb = (respuesta) => {
    const registros = JSON.parse(respuesta);
    //console.log(registros);

    const filas = registros
      .sort((a, b) => {
        console.log(a.id);
        console.log(b.id);
        console.log(a.id - b.id);
        return a.id - b.id;
      })
      .map(farmacia => {
        let row = `
		  <tr>
			  <td>${farmacia.id}</td>
			  <td>${farmacia.titulo}</td>
			  <td>${farmacia.direccion}</td>
			  <td>
				  <button class='btn btn-danger btnEliminar' data-id='${farmacia.id}'>Eliminar</button>
				  <button class='btn btn-primary btnEditar' data-farmacia='${JSON.stringify(farmacia)}'>Editar</button>
			  </td>
		  </tr>	
		  `;
        return row;
      })
      .join("");

    tbody.innerHTML = filas;

    const botonesEliminar = document.querySelectorAll(".btnEliminar");
    botonesEliminar.forEach(boton => {
      boton.addEventListener("click", function () {
        const respuesta = confirm("Esta seguro de querer eliminar?");

        if (respuesta) {
          const id = this.dataset.id;
          //const id = this.getAttribute('data-id')

          ajax(
            "delete",
            `http://javascript.tibajodemanda.com/farmacia/${id}`,
            null
          )
            .then( () => {
              listar()
            })
        }
      });
    });

    const botonesEditar = document.querySelectorAll('.btnEditar')
    botonesEditar.forEach(boton => {
      boton.addEventListener('click', function () {
        const farmacia = JSON.parse(this.dataset.farmacia)

        inputTitulo.value = farmacia.titulo
        inputDireccion.value = farmacia.direccion

        idSeleccionado = farmacia.id
      })
    })
  };

  ajax("get", "http://javascript.tibajodemanda.com/farmacia", null)
    .then(respuesta => {
      cb(respuesta)
    })
    .catch(error => {
      console.log(error)
    })
}

listar();

////// PARA GUARDAR

btnGuardar.addEventListener("click", e => {
  e.preventDefault();

  const titulo = inputTitulo.value;
  const direccion = inputDireccion.value;

  const formData = new FormData();
  formData.append("titulo", titulo);
  formData.append("direccion", direccion);

  const cb = () => {
    inputTitulo.value = "";
    inputDireccion.value = "";
    idSeleccionado = undefined
    listar();
  };

  if (idSeleccionado) {
    ajax("put", `http://javascript.tibajodemanda.com/farmacia/${idSeleccionado}`, formData)
      .then(() => {
        cb()
      })
      .catch(error => {
        console.log(error)
      })
  } else {
    ajax("post", "http://javascript.tibajodemanda.com/farmacia", formData)
      .then(() => {
        cb()
      })
      .catch(error => {
        console.log(error)
      })
  }
})
