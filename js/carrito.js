//Creo la clase Producto, con las propiedades id, nombre, precio y cantidad:


class Producto {
    constructor(id, nombre, precio, cantidad) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }

 //Creo productos y los almaceno en un array:
const producto1 = new Producto (1, "Mario Bros", 3000, 1);
const producto2 = new Producto (2, "River vs Boca", 8000, 1);
const producto3 = new Producto (3, "La renga en Londres", 9000, 1);
const producto4 = new Producto (4, "Argentina vs Francia", 40000, 1);

const productos = [producto1, producto2, producto3, producto4];



const contenedorP = document.getElementById("containerP");
const  carrito = [];

// cargamos los productos al array carrito

 function cargarProductos () {

  productos.forEach((producto)=>{
    let divProducto = document.createElement('div');
    divProducto.innerHTML = `
                      <div class="card">
                        <img src="../img/${producto.id}.jpg" class="img-wh">
                        <div class="card-body">
                          <h3 class="card-title"> ${producto.nombre} </h3>
                          <h3 class="card-title"> ${producto.cantidad} </h3>
                          <p class="card-text"> ${producto.precio} </p>
                          <button id="boton${producto.id}" class="boton"> Agregar al Carrito </button>
                        </div>
                      </div>`;
    contenedorP.appendChild(divProducto);
    // boton para agregar al carrito
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      agregarAlCarrito(producto.id);
    })
  });
}


cargarProductos();



const agregarAlCarrito = (id) => {
  const producto = productos.find((producto) => producto.id === id);
  const productoEnCarrito = carrito.find((producto) => producto.id === id);
  
  if (productoEnCarrito){
    productoEnCarrito.cantidad ++;
  }else {
    carrito.push(producto);
  }
  mostrarCarrito();
}


//aca mostramos el carrito con el DOM

const contenedorCarrito = document.getElementById('containerCarrito');

function mostrarCarrito (){
  let mostrar = '';

  carrito.forEach((producto) => {
    mostrar += `
                <div class="card">
                  <img src="../img/${producto.id}.jpg" class="img-wh">
                  <div class="card-body">
                    <h3 class="card-title"> ${producto.nombre} </h3>
                    <h3 class="card-title"> ${producto.cantidad} </h3>
                    <p class="card-text"> ${producto.precio} </p>
                    <button onClick = "eliminar(${producto.id})" class="boton-e"> Eliminar del Carrito </button>
                  </div>
                </div>
`;
  });
  contenedorCarrito.innerHTML = mostrar;
  calTotal();
}

//calculamos el total 
const totalCompra = document.getElementById('total');

function calTotal () {
  let total = 0;
  carrito.forEach((producto) => {
    total += producto.precio * producto.cantidad;
  });
  totalCompra.innerHTML = total;
};

// eliminamos del carrito

const eliminar = (id) => {
  const producto = carrito.find((producto) => producto.id === id);
  carrito.splice(carrito.indexOf(producto), 1);
  mostrarCarrito();
};