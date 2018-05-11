const tbody = document.querySelector("tbody");
const inputTitulo = document.querySelector("#titulo");
const inputDireccion = document.querySelector("#direccion");
const btnGuardar = document.querySelector("#btnGuardar");

const listar = () => {
  ////////////// PARA LISTAR
  const objHttp = new XMLHttpRequest();

  objHttp.addEventListener("readystatechange", obj => {
    const e = obj.currentTarget;

    // readyState indica el estado de la llamada
    console.log(e.readyState);

    // status = 200 indica que la respuesta llego bien
    if (e.readyState == 4 && e.status == 200) {
      const registros = JSON.parse(e.responseText);
      //console.log(registros);

      const filas = registros
        .sort((a, b) => {
          console.log(a.id);
          console.log(b.id);
          console.log(a.id - b.id);
          return a.id - b.id;
        })
        //.sort( (a, b) => parseInt(a.id) > parseInt(b.id))
        //.sort( (a, b) => +a.id > +b.id)
        .map(farmacia => {
          let row = `
			<tr>
				<td>${farmacia.id}</td>
				<td>${farmacia.titulo}</td>
				<td>${farmacia.direccion}</td>
				<td>
					<button class='btn btn-danger btnEliminar' data-id='${farmacia.id}'>Eliminar</button>
				</td>
			</tr>	
			`;
          return row;
        })
        .join("");

	  tbody.innerHTML = filas;
	  
	  const botonesEliminar = document.querySelectorAll('.btnEliminar')
	  botonesEliminar.forEach( boton => {
		  boton.addEventListener('click', function() {
			  const respuesta = confirm('Esta seguro de querer eliminar?')

			  if(respuesta) {
				  const id = this.dataset.id
				  //const id = this.getAttribute('data-id')

				  const objxml = new XMLHttpRequest()
				  objxml.addEventListener('readystatechange', respuesta => {
					  const obj = respuesta.currentTarget

					  if(obj.readyState == 4 && obj.status == 200) {
						  listar()
					  }
				  })

				  objxml.open('delete', `http://javascript.tibajodemanda.com/farmacia/${id}` , true)
				  objxml.send()
			  }
		  })
	  })
    }
  });

  /*
	get: para traer uno o mas registros
	post: para insertar un registro
	put: para actualizar un registro
	delete: para eliminar un registro

	open
		1. Verbo
		2. Direccion URL
		3. Sincronia
*/
  objHttp.open("get", "http://javascript.tibajodemanda.com/farmacia", true);
  objHttp.send();
};

listar()

////// PARA GUARDAR

btnGuardar.addEventListener("click", e => {
  e.preventDefault();

  const titulo = inputTitulo.value;
  const direccion = inputDireccion.value;

  const formData = new FormData();
  formData.append("titulo", titulo);
  formData.append("direccion", direccion);

  const objxml = new XMLHttpRequest();

  objxml.addEventListener("readystatechange", respuesta => {
    const obj = respuesta.currentTarget;

    if (obj.readyState == 4 && obj.status == 201) {
      //alert('Se inserto')
      inputTitulo.value = "";
	  inputDireccion.value = "";
	  listar()
    }
  });

  objxml.open("post", "http://javascript.tibajodemanda.com/farmacia", true);
  objxml.send(formData);
});
