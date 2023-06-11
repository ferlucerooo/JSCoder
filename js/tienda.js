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



/* const carritoLS = JSON.parse(localStorage.getItem('carrito'));

if (carritoLS){
  carrito = carritoLS;
  actualizarNumerito();
}else{
  carrito =[];
} */
// cargamos los productos al array carrito

const contenedorProductos = document.getElementById('contenedor-productos');
const numerito =document.getElementById("numerito");
let productoEnCarrito;
const productoEnCarritoLS = JSON.parse(localStorage.getItem('productos-en-carrito'));

function cargarProductos () {

  productos.forEach((producto)=>{
    let divProducto = document.createElement('div');
    divProducto.innerHTML = `
                      <div class="producto">
                        <img src="../img/${producto.id}.jpg" alt="${producto.nombre}" class="producto-img">
                        <div class="producto-detalles">
                          <h3 class="producto-nombre"> ${producto.nombre} </h3>
                          <h3 class="producto-cantidad">Cantidad: ${producto.cantidad} </h3>
                          <p class="producto-precio">Precio: ${producto.precio} </p>
                          <button id="boton${producto.id}" class="boton-agregar"> Agregar al Carrito </button>
                        </div>
                      </div>`;
    contenedorProductos.append(divProducto);
    // boton para agregar al carrito
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      agregarAlCarrito(producto.id);
    })
  });
}


cargarProductos();
// array vacio donde se agregan al apretar el boton agregar al carrito



if(productoEnCarritoLS){
  productoEnCarrito = productoEnCarritoLS;
  actualizarNumerito();
}else{
  productoEnCarrito =[];
}

const agregarAlCarrito = (id) => {
  const producto = productos.find((producto) => producto.id === id);
  const productoAgregado = productoEnCarrito.find((producto) => producto.id === id);
  
  if (productoAgregado){
    productoAgregado.cantidad ++;
    
  }else {
    productoEnCarrito.push(producto);
  }
  actualizarNumerito();

  localStorage.setItem('productos-en-carrito',JSON.stringify(productoEnCarrito));
}

//con esta funcion actualizamos el numero del carrito cada vez que se agrega 1 producto

function actualizarNumerito(){
  let nuevoNumerito = productoEnCarrito.reduce((acc, productos) => acc + productos.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}
