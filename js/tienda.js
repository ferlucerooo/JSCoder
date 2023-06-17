
/* let productos = [];
fetch("../json/productos.json")
.then(response => response.json())
.then(data =>{
  productos = data;
  cargarProductos(productos);
})
.catch(error => {
  console.error('Error al obtener los productos:', error);
}); */

// traemos los productos de un json

let productos = [];
const traerProductos = async () => {
  try{
    const response = await fetch("../json/productos.json");
    productos = await response.json();
    cargarProductos ();
  }
  catch(error) {
    console.log('Error al obtener los productos:', error);
  };
}

traerProductos();


const contenedorProductos = document.getElementById('contenedor-productos');
const numerito =document.getElementById("numerito");
let productoEnCarrito;
const productoEnCarritoLS = JSON.parse(localStorage.getItem('productos-en-carrito'));


// funcion para cargar los productos al html mediante js
function cargarProductos () {

  productos.forEach((producto)=>{
    let divProducto = document.createElement('div');
    divProducto.innerHTML = `
                      <div class="producto">
                        <img src="../img/${producto.id}.jpg" alt="${producto.nombre}" class="producto-img">
                        <div class="producto-detalles">
                          <h3 class="producto-nombre"> ${producto.nombre} </h3>
                          <h3 class="producto-cantidad"> ${producto.cantidad} </h3>
                          <p class="producto-precio">Precio: ${producto.precio} </p>
                          <button id="boton${producto.id}" class="boton-agregar"> <i class="bi bi-cart-plus"></i> </button>
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




// si los productos en carrito estan en el storage, producto en carrito = productoEnCarritoLS y se actualiza el numero del carrito

if(productoEnCarritoLS){
  productoEnCarrito = productoEnCarritoLS;
  actualizarNumerito();
}else{
  productoEnCarrito =[];
}

//  se agregan al apretar el boton agregar al carrito
const agregarAlCarrito = (id) => {

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Se agregó al carrito',
    showConfirmButton: false,
    timer: 1500
  })

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


