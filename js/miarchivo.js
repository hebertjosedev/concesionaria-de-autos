// Proyecto de una concesionaria de autos

const formularioBusqueda = document.getElementById("formulario-busqueda");
const input = document.getElementById("input-buscador");
const boton_buscador = document.getElementById("boton-buscador");
const resultado_busqueda = document.getElementById("fila_de_card");

//Hacer una peticion al stock que tenemos en JSON
let autos = [];

const peticionDeAutos = () => {
  fetch("./stock.json")
    .then((res) => res.json())
    .then((data) => {
      autos = data;
      filtradoDeAutos(autos);
    });
};

//Ejecutar la funcion de la peticion para poder mostrar los autos correctamente
peticionDeAutos();

// funcion expresada para filtrar las busquedas del usuario
const filtradoDeAutos = () => {
  resultado_busqueda.innerHTML = "";
  const texto = input.value.toLowerCase();
  for (let auto of autos) {
    let nombre = auto.nombre.toLowerCase();
    if (nombre.indexOf(texto) !== -1) {
      const div = document.createElement("div");
      div.classList.add("card", "mb-4", "p-3");
      div.style = "width: 18rem";

      div.innerHTML += ` <img src="${auto.img} " class="card-img-top" id="imagen-auto" alt="..." height="200px" />
          <class="card-body">
            <h5 class="card-title p-2 text-light">${auto.nombre}</h5>
            <ul class="list-group p-2">
              <li class="list-group-item"">Año: ${auto.anio}</li>
              <li class="list-group-item">Combustible: ${auto.combustible}</li>
              <li class="list-group-item">Velocidad maxima: ${auto.velocidad_maxima}</li>
              <li class="list-group-item list-group-item-success">Precio: ${auto.precio}</li>
            </ul>

            
            <!--BOTON PARA ABRIR MODAL Y PEDIR LOS DATOS PARA EJECUTAR LA COMPRA-->
            <div class="container d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-success mt-3"
              id="boton-comprar${auto.id}"
              data-bs-toggle="modal"
              data-bs-target="#miModalCompra"
            >
              Pre-venta
            </button>
            </div>
            
          </div>
          
          `;

      resultado_busqueda.appendChild(div);
    }
  }

  if (resultado_busqueda.innerHTML === "") {
    resultado_busqueda.innerHTML = `
    <div class="card card-error" style="width: 18rem;">
      <div class="card-cuerpo-error">
        <h4 class="card-title">Lo sentimos mucho!!</h4>
        <p class="" id="texto-error">La marca o auto que buscas por el momento no esta en nuestro stock de ventas, en un futuro podriamos tenerlos.</p>
        <a href="vehiculos.html" class="card-link">Volver a autos</a>
      </div>
    </div>
    `;
  }
};

//Capturar la tecla enter y prevenir que se recargue el formulario donde esta el input de busqueda, y a su vez mostrar los autos.
formularioBusqueda.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    e.preventDefault();
    filtradoDeAutos();
  }
});

// Capturando el evento click en el boton de busqueda para filtrar
boton_buscador.addEventListener("click", filtradoDeAutos);

/*codigo para obtener los datos del formulario de preventa y enviarlo a la tabla de preventas*/

const formulario = document.getElementById("formulario-compra");

$(formulario).on("submit", (e) => {
  e.preventDefault();
  //Accedemos a los datos del formulario a traves del objeto FormData
  let preventaFormData = new FormData(formulario);
  let tablaPreventa = document.getElementById("tabla-preventas");
  let nuevaFilaTabla = tablaPreventa.insertRow(-1);
  let nuevaCeldaTabla = nuevaFilaTabla.insertCell(0);
  nuevaCeldaTabla.textContent = preventaFormData.get("nombre");
  nuevaCeldaTabla = nuevaFilaTabla.insertCell(1);
  nuevaCeldaTabla.textContent = preventaFormData.get("apellido");
  nuevaCeldaTabla = nuevaFilaTabla.insertCell(2);
  nuevaCeldaTabla.textContent = preventaFormData.get("pais");
  nuevaCeldaTabla = nuevaFilaTabla.insertCell(3);
  nuevaCeldaTabla.textContent = preventaFormData.get("autos");
  formulario.reset();
  //Usamos jQuery para crear el mensaje de exito al crear la preventa
  $(".mensaje-exitoso").fadeIn("slow").delay(2000).fadeOut("slow");
});
