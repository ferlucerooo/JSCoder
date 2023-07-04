const productoEnCarrito = JSON.parse(localStorage.getItem('productos-en-carrito'));

const contenedorCarritoProductos = document.getElementById('carrito-productos');
const totalCompra = document.getElementById('total');


/* const contenedorCarritoVacio = document.getElementById('carrito-vacio');
const contenedorCarritoAcciones = document.getElementById('carrito-acciones');
const contenedorCarritoComprado = document.getElementById('carrito-comprado'); */

// cargamos los productos al carrito con esta funcion

function cargarProductosCarrito(){

  if(productoEnCarrito){

  contenedorCarritoProductos.innerHTML = "";
  productoEnCarrito.forEach(producto => {
    const div = document.createElement('div');
    /* div.classList.add('carrito-producto'); */
    div.innerHTML = `
                      <div class="producto">
                        <img src="../img/${producto.id}.jpg" alt="${producto.nombre}" class="producto-img">
                        <div class="producto-detalles">
                          <h3 class="producto-nombre"> ${producto.nombre} </h3>
                          <h3 class="producto-cantidad">Cantidad: ${producto.cantidad} </h3>
                          <p class="producto-precio">Precio: ${producto.precio} </p>
                          <button onClick = "eliminar(${producto.id})" class="boton-eliminar"> <i class="bi bi-trash"></i> </button>
                        </div>
                      </div>`;
contenedorCarritoProductos.append(div);
})
  }

calTotal();
}

cargarProductosCarrito();


// eliminamos del carrito

const eliminar = (id) => {
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Se eliminó del carrito',
    showConfirmButton: false,
    timer: 1500
  })
  const producto = productoEnCarrito.find((producto) => producto.id === id);
  productoEnCarrito.splice(productoEnCarrito.indexOf(producto), 1);
  cargarProductosCarrito();
  //lo eliminamos tambien del localstorage
  localStorage.setItem('productos-en-carrito',JSON.stringify(productoEnCarrito));
}; 

///Función para vaciar todo el carrito por completo:

const vaciarCarrito = document.getElementById('vaciar-carrito');
vaciarCarrito.addEventListener('click', () => {

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Carrito vaciado con éxito!',
    showConfirmButton: false,
    timer: 1500
  })

  productoEnCarrito.splice(0, productoEnCarrito.length);
  localStorage.setItem('productos-en-carrito',JSON.stringify(productoEnCarrito));
  cargarProductosCarrito();
});


//calculamos el total 
function calTotal () {
  const totalCalculado = productoEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
  totalCompra.innerHTML = `$${totalCalculado}`;
}

// compra realizada 

  const compra = document.getElementById('comprar');
  compra.addEventListener('click', () =>{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Compra realizada con éxito!',
      showConfirmButton: false,
      timer: 1500
    })
  
    productoEnCarrito.splice(0, productoEnCarrito.length);
    localStorage.setItem('productos-en-carrito',JSON.stringify(productoEnCarrito));
    cargarProductosCarrito();
  });
