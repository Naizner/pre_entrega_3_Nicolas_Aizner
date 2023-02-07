// Comienzo a crear los productos a partir de una Clase constructora

class GeneradorElectrico {
  constructor(id, nombreProd, img, marca, potencia, precio, tipoUso, descrip) {
    this.id = id;
    this.nombreProd = nombreProd;
    this.img = img;
    this.marca = marca;
    this.potencia = potencia;
    this.precio = precio;
    this.tipoUso = tipoUso;
    this.descrip = descrip;
  }


}

// Array que contendrá los productos
let productosGenEle = [];

// Creo nuevos productos de la Clase GeneradorEletrico con sus propiedades
let producto1 = productosGenEle.push(new GeneradorElectrico(1, "Generador 1", "img1.jpg", "Honda", 10, 10000, "Uso Hogar", "Pequeño Electro Generador de 10 KVA para abastecer el Hogar"));
productosGenEle.push(new GeneradorElectrico(2, "Generador 2", "img2.jpg", "Toyota", 15, 15000, "Uso Hogar", "Pequeño Electro Generador de 15 KVA para abastecer el Hogar"));
productosGenEle.push(new GeneradorElectrico(3, "Generador 3", "img3.jpg", "Honda", 20, 20000, "Uso Comercial", "Pequeño Electro Generador de 20 KVA para abastecer el Comercio"));
productosGenEle.push(new GeneradorElectrico(4, "Generador 4", "img4.jpg", "BMV", 30, 25000, "Uso Comercial", "Generador Eléctrico Mediano de 30 KVA para abastecer tu Comercio"));
productosGenEle.push(new GeneradorElectrico(5, "Generador 5", "img5.jpg", "Honda", 35, 30000, "Uso Industrial", "Generador Eléctrico Grande de 35 KVA para abastecer tu Industria"));
productosGenEle.push(new GeneradorElectrico(6, "Generador 6", "img6.jpg", "BMV", 40, 32000, "Uso Industrial", "Generador Eléctrico Grande de 40 KVA para abastecer tu Industria"));
productosGenEle.push(new GeneradorElectrico(6, "Generador 7", "img7.jpg", "Honda", 13, 13000, "Uso Hogar", "Generador Eléctrico Grande de 13 KVA para abastecer tu Hogar"));
productosGenEle.push(new GeneradorElectrico(6, "Generador 8", "img8.jpg", "Ford", 25, 23000, "Uso Comercial", "Generador Eléctrico Grande de 25 KVA para abastecer tu Comercio"));
productosGenEle.push(new GeneradorElectrico(6, "Generador 9", "img9.jpg", "Tezla", 38, 38000, "Uso Industrial", "Generador Eléctrico Grande de 38 KVA para abastecer tu Industria"));




let tipoGenerador = document.getElementById("tipoCliente");
let divResultadoTipo = document.getElementById("insertarDiv");


// Defino una escucha para cuando se haga un cambio en el Select.
// A partir del cambio en el Select se inserta un Formulario bajo la función agregarDivTipoXXXX
// Luego también guardo en Local Storage el valor del select para utilizar más adelante para una promoción.
// En este evento Change, también agrego la función "Submit" mediante la función creada agregarFuncionSubmit
tipoGenerador.addEventListener("change", () => {
  
  const valorTipo = tipoGenerador.value;
    if (valorTipo === "1") {
      agregarDivTipoHogar();
      const valorTipoHogar = (clave, valor) => {localStorage.setItem(clave, valor)};
      valorTipoHogar("tipoUso", JSON.stringify(valorTipo));  
    }else if (valorTipo === "2") {
      agregarDivTipoComercio()
      const valorTipoComercial = (clave, valor) => {localStorage.setItem(clave, valor)};
      valorTipoComercial("tipoUso", JSON.stringify(valorTipo)); 
    }else if(valorTipo === "3") {
      agregarDivTipoIndustria();
      const valorTipoIndustria = (clave, valor) => {localStorage.setItem(clave, valor)};
      valorTipoIndustria("tipoUso", JSON.stringify(valorTipo)); 
    }
    agregarFuncionSubmit();
})


let divInsertarResultado = document.getElementById("insertarResultado");

// Defino la funcón agregarFuncionSubmit para que al presionar "Calcular", se produzca el cálculo y también
// se inserte un Div en el DOM mostrando el resultado.
// En esta misma función agrefarFuncionSubmit ejecuto la función pintarProductos para que se pinten solo 
// los productos de la categoría elegida en el Select mediante función de orden superior Filter.

const agregarFuncionSubmit = () => {
const formulario = document.getElementById("resultadoTipoHogar");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let consumoTotal = calcularConsumoHogar();
  divInsertarResultado.innerHTML = `<h3>Tu consumo eléctrico estimado es de ${consumoTotal} KVA</h3><br>
  <p>A continuación verás los Grupos Electrógenos recomendados.</p>`;

pintarProductos()

});

};



// Función que afrega el formulario para calcular el consumo de un hogar / comercio / industria

let agregarDivTipoHogar = () => {
  divResultadoTipo.innerHTML = `<div class="contenedor" id="divResultadoTipo">
  <h2 class="seccion-titulo">Completa con los equipos eléctricos indispensables</h2>
  <p class="seccion texto">Calcularemos la potencia requerida para sostener tus instalaciones y te sugeriremos distintos modelos de Generadores Eléctricos.</p>
  <form class="row g-3 " id="resultadoTipoHogar">
      <div class="col-sm-12 col-md-6 col-lg-6 divInputs">
          <label>Metros cuadrados</label>
          <input type="number" placeholder="M2" id="metrosCuadrados" required>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Estufas eléctricas</label>
          <div class="divs">
              <input type="number" placeholder="Watts" id="estufasWatt" value="">
              <input type="number" placeholder="Estufas" id="estufas" value="">
          </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Cantidad de cocinas</label>
          <div>
              <input type="number" placeholder="Watts" id="cocinasWatt" value="">
              <input type="number" placeholder="Cocinas" id="cocinas" value="" >
          </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Heladeras</label>
          <input type="number" placeholder="Watts" id="heladerasWatt" value="">
          <input type="number" placeholder="Heladeras" id="heladeras" required value="">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Microondas</label>
          <input type="number" placeholder="Watts" id="microWatt" value="">
          <input type="number" placeholder="Microondas" id="microondas" value="">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Aires Acondicionados</label>
          <input type="number" placeholder="Watts" id="aireWatt" value="">
          <input type="number" placeholder="A/C" id="aireAcond" value="">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Freezer de pozo</label>
          <input type="number" placeholder="Watts" id="freezerWatt" value="">
          <input type="number" placeholder="Freezer" id="freezer" value="">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Otros / En Watt</label>
          <input type="number" placeholder="Watt" id="otrosWatt" value="">
      </div>
      <button type="submit" class="botonCalcular btn btn-primary btn-lg divInputs">
          Calcular
          <i class="bi bi-arrow-right-circle-fill"></i>
      </button>
  </form>
</div>`;
}

// Función que afrega el formulario para calcular el consumo de un hogar / comercio / industria

let agregarDivTipoComercio = () => {
  divResultadoTipo.innerHTML = `<div class="contenedor" id="divResultadoTipo">
  <h2 class="seccion-titulo">Completa con los equipos eléctricos indispensables</h2>
  <p class="seccion texto">Calcularemos la potencia requerida para sostener tus instalaciones y te sugeriremos distintos modelos de Generadores Eléctricos.</p>
  <form class="row g-3 " id="resultadoTipoHogar">
      <div class="col-sm-12 col-md-6 col-lg-6 divInputs">
          <label>Metros cuadrados</label>
          <input type="number" placeholder="M2" id="metrosCuadrados" required>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Estufas eléctricas</label>
          <div class="divs">
              <input type="number" placeholder="Watts" id="estufasWatt" value="">
              <input type="number" placeholder="Estufas" id="estufas" value="">
          </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Cantidad de cocinas</label>
          <div>
              <input type="number" placeholder="Watts" id="cocinasWatt" value="">
              <input type="number" placeholder="Cocinas" id="cocinas" value="" >
          </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Heladeras</label>
          <input type="number" placeholder="Watts" id="heladerasWatt" value="">
          <input type="number" placeholder="Heladeras" id="heladeras" required value="">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Microondas</label>
          <input type="number" placeholder="Watts" id="microWatt" value="">
          <input type="number" placeholder="Microondas" id="microondas" value="">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Aires Acondicionados</label>
          <input type="number" placeholder="Watts" id="aireWatt" value="">
          <input type="number" placeholder="A/C" id="aireAcond" value="">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Freezer de pozo</label>
          <input type="number" placeholder="Watts" id="freezerWatt" value="">
          <input type="number" placeholder="Freezer" id="freezer" value="">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Otros / En Watt</label>
          <input type="number" placeholder="Watt" id="otrosWatt" value="">
      </div>
      <button type="submit" class="botonCalcular btn btn-primary btn-lg divInputs">
          Calcular
          <i class="bi bi-arrow-right-circle-fill"></i>
      </button>
  </form>
</div>`;
}
// Función que afrega el formulario para calcular el consumo de un hogar / comercio / industria

let agregarDivTipoIndustria = () => {
  divResultadoTipo.innerHTML = `<div class="contenedor" id="divResultadoTipo">
  <h2 class="seccion-titulo">Completa con los equipos eléctricos indispensables</h2>
  <p class="seccion texto">Calcularemos la potencia requerida para sostener tus instalaciones y te sugeriremos distintos modelos de Generadores Eléctricos.</p>
  <form class="row g-3 " id="resultadoTipoHogar">
      <div class="col-sm-12 col-md-6 col-lg-6 divInputs">
          <label>Metros cuadrados</label>
          <input type="number" placeholder="M2" id="metrosCuadrados" required>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Estufas eléctricas</label>
          <div class="divs">
              <input type="number" placeholder="Watts" id="estufasWatt" value="">
              <input type="number" placeholder="Estufas" id="estufas" value="">
          </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Cantidad de cocinas</label>
          <div>
              <input type="number" placeholder="Watts" id="cocinasWatt" value="">
              <input type="number" placeholder="Cocinas" id="cocinas" value="" >
          </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Heladeras</label>
          <input type="number" placeholder="Watts" id="heladerasWatt" value="">
          <input type="number" placeholder="Heladeras" id="heladeras" required value="">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Microondas</label>
          <input type="number" placeholder="Watts" id="microWatt" value="">
          <input type="number" placeholder="Microondas" id="microondas" value="">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Aires Acondicionados</label>
          <input type="number" placeholder="Watts" id="aireWatt" value="">
          <input type="number" placeholder="A/C" id="aireAcond" value="">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Freezer de pozo</label>
          <input type="number" placeholder="Watts" id="freezerWatt" value="">
          <input type="number" placeholder="Freezer" id="freezer" value="">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 hogar divInputs">
          <label>Otros / En Watt</label>
          <input type="number" placeholder="Watt" id="otrosWatt" value="">
      </div>
      <button type="submit" class="botonCalcular btn btn-primary btn-lg divInputs">
          Calcular
          <i class="bi bi-arrow-right-circle-fill"></i>
      </button>
  </form>
</div>`;
}

// Cálculo del consumo según los datos ingresados en el formulario. Retorna el resultado.
calcularConsumoHogar = () => {
  const metrosC = document.getElementById("metrosCuadrados");
  const estufas = document.getElementById("estufas");
  const estufasW = document.getElementById("estufasWatt");
  const cocinas = document.getElementById("cocinas");
  const cocinasW = document.getElementById("cocinasWatt");
  const heladeras = document.getElementById("heladeras");
  const heladerasW = document.getElementById("heladerasWatt");
  const microondas = document.getElementById("microondas");
  const microondasW = document.getElementById("microWatt");
  const aireAcond = document.getElementById("aireAcond");
  const aireW = document.getElementById("aireWatt");
  const freezer = document.getElementById("freezer");
  const freezerW = document.getElementById("freezerWatt");
  const otrosW = document.getElementById("otrosWatt");
  let consumos = ((metrosC.value * 150) + (Number(estufas.value) * Number(estufasW.value)) + (Number(cocinas.value) * Number(cocinasW.value)) + (Number(heladeras.value) * Number(heladerasW.value)) + (Number(microondas.value) * Number(microondasW.value)) + (Number(aireAcond.value) * Number(aireW.value)) + (Number(freezer.value) * Number(freezerW.value)) + Number(otrosW.value)) // aca va el resto del cálculo matemático
  return consumos;
}







// Recupero del JSON el Valor sel Select capturado para re utilizar en función pintarProductos

let destacados = document.getElementById("insertarRecomendados");
let valueTipoUso = JSON.parse(localStorage.getItem("tipoUso"))

// Creo función Pintar Productos destacados para utilizar el valor de Local Storage y mediante
// un condicional, poder insertar en el DOM un DIV que incluya los productos previamente seleccionados por el usuario en el Select.
// Para probar por favor actualizar la página luego de cambiar el select. Aparecerá arriba las Ofertas

const pintarDestacados = () => {
    if(valueTipoUso == "1") {
        let productosHogar = productosGenEle.filter((element) => element.tipoUso.includes("Uso Hogar"));
        productosHogar.forEach((producto) => {
          const div = document.createElement('div')
          div.classList.add('card')
          div.innerHTML += `
              <div class="card-image">
                  <img src="${producto.img}">
                  <span class="card-title">Oferta ${producto.nombreProd}</span>
              </div>
              <div class="card-content">
                  <p>${producto.tipoUso}</p>
                  <p>Kva: ${producto.potencia}</p>
                  <p>$${producto.precio}</p>
              </div> `
          destacados.appendChild(div);
        
        });
        }else if(valueTipoUso == "2") {
            let productosComercio = productosGenEle.filter((element) => element.tipoUso.includes("Uso Comercial"));
            productosComercio.forEach((producto) => {
              const div = document.createElement('div')
              div.classList.add('card')
              div.innerHTML += `
                  <div class="card-image">
                      <img src="${producto.img}">
                      <span class="card-title">Oferta ${producto.nombreProd}</span>
                  </div>
                  <div class="card-content">
                      <p>${producto.tipoUso}</p>
                      <p>Kva: ${producto.potencia}</p>
                      <p>$${producto.precio}</p>
                  </div> `
              destacados.appendChild(div);
            });
        }else if(valueTipoUso == "3") {
            let productosIndustria = productosGenEle.filter((element) => element.tipoUso.includes("Uso Industrial"));
            productosIndustria.forEach((producto) => {
            const div = document.createElement('div')
            div.classList.add('card')
            div.innerHTML += `
                <div class="card-image">
                    <img src="${producto.img}">
                    <span class="card-title">Oferta ${producto.nombreProd}</span>
                </div>
                <div class="card-content">
                    <p>${producto.tipoUso}</p>
                    <p>Kva: ${producto.potencia}</p>
                    <p>$${producto.precio}</p>
                </div> `
            destacados.appendChild(div);
            });
        }
}

// Defino la función que hará que se muestren los productos en Pantalla. De acuerdo al valor del Select Pinta todos, o le suma los seleccionados primero

const pintarProductos = () => {
  const contenedor = document.getElementById('producto-contenedor');
  const contenedorTotal = document.getElementById('producto-totales')
    if(tipoGenerador.value == "1") {
      let productosHogar = productosGenEle.filter((element) => element.tipoUso.includes("Uso Hogar"));
      productosHogar.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML += `
            <div class="card-image">
                <img src="${producto.img}">
                <span class="card-title">${producto.nombreProd}</span>
                <a class="btn-floating halfway-fab wabes-effect waves-light red"><i id="${producto.id}" class="material-icons">add_shopping_cart</i></a>
            </div>
            <div class="card-content">
                <p>${producto.marca}</p>
                <p>${producto.tipoUso}</p>
                <p>Kva: ${producto.potencia}</p>
                <p>$${producto.precio}</p>
            </div> `
        contenedor.appendChild(div);
      
      });
      }else if(tipoGenerador.value == "2") {
        let productosComercio = productosGenEle.filter((element) => element.tipoUso.includes("Uso Comercial"));
        productosComercio.forEach((producto) => {
          const div = document.createElement('div')
          div.classList.add('card')
          div.innerHTML += `
            <div class="card-image">
                <img src="${producto.img}">
                <span class="card-title">${producto.nombreProd}</span>
                <a class="btn-floating halfway-fab wabes-effect waves-light red"><i id="${producto.id}" class="material-icons">add_shopping_cart</i></a>
            </div>
            <div class="card-content">
                <p>${producto.marca}</p>
                <p>${producto.tipoUso}</p>
                <p>Kva: ${producto.potencia}</p>
                <p>$${producto.precio}</p>
            </div> `
          contenedor.appendChild(div);
          console.log("2");
        });


      }else if(tipoGenerador.value == "3") {
        let productosIndustria = productosGenEle.filter((element) => element.tipoUso.includes("Uso Industrial"));
        productosIndustria.forEach((producto) => {
          const div = document.createElement('div')
          div.classList.add('card')
          div.innerHTML += `
            <div class="card-image">
                <img src="${producto.img}">
                <span class="card-title">${producto.nombreProd}</span>
                <a class="btn-floating halfway-fab wabes-effect waves-light red"><i id="${producto.id}" class="material-icons">add_shopping_cart</i></a>
            </div>
            <div class="card-content">
                <p>${producto.marca}</p>
                <p>${producto.tipoUso}</p>
                <p>Kva: ${producto.potencia}</p>
                <p>$${producto.precio}</p>
            </div> `
        contenedor.appendChild(div);
        });

      }else if(tipoGenerador.value == "0") {
        productosGenEle.forEach((producto) => {
          const div = document.createElement('div')
          div.classList.add('card')
          div.innerHTML += `
            <div class="card-image">
                <img src="${producto.img}">
                <span class="card-title">${producto.nombreProd}</span>
                <a class="btn-floating halfway-fab wabes-effect waves-light red"><i id="${producto.id}" class="material-icons">add_shopping_cart</i></a>
            </div>
            <div class="card-content">
                <p>${producto.marca}</p>
                <p>${producto.tipoUso}</p>
                <p>Kva: ${producto.potencia}</p>
                <p>$${producto.precio}</p>
            </div> `
        contenedorTotal.appendChild(div);
        });
    }
}

pintarProductos()

pintarDestacados()

