// Proyecto de una concesionaria de autos

const autos = [
  {
    id: 1,
    img: "img/bmw-128ti.jpg",
    nombre: "BMW 128ti",
    modelo: "Serie 1",
    descripcion:
      "BMW 128ti en Chile, este modelo llega con un motor 2.0 turbo con 265 HP que le permiten acelerar de 0 a 100 km/hr en 6.1 segundos, a diferencia del 135i que tiene tracción integral, el 128 tiene tracción delantera con diferencial Torsen.",
    anio: "2020",
    combustible: "Gasolina",
    velocidad_maxima: "250 km/h",
    autonomia: "724 Km",
    precio: 31990000,
  },
  {
    id: 2,
    img: "img/bmw-convertible-2.jpg",
    nombre: "BMW 230i Convertible",
    modelo: "Series 2",
    descripcion:
      "La primera impresión: libertad e impulso hacia adelante. El lenguaje de diseño único del BMW Serie 2 Convertible demuestra ligereza y elegancia.",
    anio: "2017",
    combustible: "Gasolina",
    velocidad_maxima: "250 km/h",
    autonomia: "800 Km",
    precio: 32990000,
  },
  {
    id: 3,
    img: "img/bmw-coupe2p.jpg",
    nombre: "BMW 220dA Coupe 2P",
    modelo: "Series 2",
    descripcion:
      "BMW Serie 2 Deportivo o coupé y 2 puertas. Se trata de la variante que cuenta con un motor diésel de 190 CV de potencia máxima. Con cambio Automático, esta versión del Serie 2 es del año 2018.",
    anio: "2021",
    combustible: "Diesel",
    velocidad_maxima: "237 km/h",
    autonomia: "750 km",
    precio: 29990000,
  },
  {
    id: 4,
    img: "img/bmw-camioneta.jpg",
    nombre: "BMW X5 xDrive 40iA 5P",
    descripcion:
      "el BMW X5 5 puertas del año 2018, para concretar más, se trata de la variante de 340 CV de potencia máxima que monta cambio Automático, lo que da como resultado un coche muy agradable de conducir.",
    anio: "2020",
    combustible: "Gasolina",
    velocidad_maxima: "243 km/h",
    autonomia: "",
    precio: 53900000,
  },
  {
    id: 5,
    img: "img/tesla-model-s.jpg",
    nombre: "Tesla Model S",
    anio: "2020",
    descripcion:
      "El Tesla Model S es un liftback eléctrico fabricado por Tesla Motors, que comenzó sus entregas en julio de 2012.",
    combustible: "Corriente electrica",
    velocidad_maxima: "322 km/h",
    autonomia: "637 km",
    precio: 122990,
  },
  {
    id: 6,
    img: "img/tesla-model-3.jpg",
    nombre: "Tesla Model 3",
    anio: "2020",
    descripcion:
      "El cuarto modelo que Tesla comercializa es el Tesla Model 3, tiene una autonomía superior a los 354 km según el ciclo EPA.",
    combustible: "Corriente electrica",
    velocidad_maxima: "261 km/h",
    autonomia: "568 km",
    precio: 49990,
  },
  {
    id: 7,
    img: "img/tesla-model-x.jpg",
    nombre: "Tesla Model X",
    anio: "2020",
    descripcion:
      "El Tesla Model X es un todoterreno eléctrico fabricado por Tesla Motors basado en la plataforma del Model S.",
    combustible: "Corriente electrica",
    velocidad_maxima: "262 km/h",
    autonomia: "547 Km",
    precio: 118000,
  },
  {
    id: 8,
    img: "img/tesla-model-y.jpg",
    nombre: "Tesla Model Y",
    anio: "2020",
    descripcion:
      "El Tesla Model Y es un crossover eléctrico compacto desarrollado por Tesla Inc. El lanzamiento al mercado fue programado para el otoño de 2020.",
    combustible: "Corriente electrica",
    velocidad_maxima: "250 km/h",
    autonomia: "525 km",
    precio: 52990,
  },
  {
    id: 9,
    img: "img/mercedes-benz-gla-180.jpeg",
    nombre: "Mercedes benz gla 180",
    anio: "2020",
    modelo: "Clase CLA 180",
    descripcion: "",
    combustible: "hibrido",
    velocidad_maxima: "210 km/h",
    precio: 23990000,
  },
  {
    id: 10,
    img: "img/mercedes-benz-clase-e.jpg",
    nombre: "Mercedes benz clase e",
    anio: "2020",
    modelo: "Clase E",
    descripcion: "",
    combustible: "gasolina",
    velocidad_maxima: "320 km/h",
    autonomia: "650 km",
    precio: 39015000,
  },
  {
    id: 11,
    img: "img/mercedes-benz-clase-gla.jpg",
    nombre: "Mercedes benz clase gla",
    anio: "2020",
    descripcion: "",
    anio: "2020",
    combustible: "hibrido",
    velocidad_maxima: "265 km/h",
    autonomia: "550 km",
    precio: 25490000,
  },
  {
    id: 12,
    img: "img/mercedes-benz-clase-x.jpg",
    nombre: "Mercedes benz clase x",
    anio: "2020",
    descripcion: "",
    anio: "2021",
    combustible: "hibrido",
    velocidad_maxima: "265 km/h",
    autonomia: "550 km",
    precio: 28490000,
  },
];

//Crear filtrado de busqueda

const input = document.getElementById("input-buscador");
const boton_buscador = document.getElementById("boton-buscador");
const resultado_busqueda = document.getElementById("fila_de_card");

// funcion expresada para filtrar las busquedas del usuario
const filtrado = () => {
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
          <div class="d-flex justify-content-center text-primary">
             <h5>No vendemos ese vehiculo y/o marca :(</h5>
          </div>
    `;
  }
};

// Capturando el evento click en el boton de busqueda para filtrar
boton_buscador.addEventListener("click", filtrado);
// Evento que captura cada letra ingresada al input y la va filtrando en el stock
input.addEventListener("input", filtrado);
// funcion filtrado la cual muestra todo el stock de autos
filtrado();

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
