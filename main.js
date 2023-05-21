//simulador interactivo de login y venta de entradas



//En esta class tenemos los usuarios que se agregran al array vacio mediante el push

class Usuarios {
    constructor(user, pw){
        this.user = user;
        this.pw = pw;
    }
}
const usuarios = [];
const usuario1 = new Usuarios ("FerLucero", "ferlu");
const usuario2 = new Usuarios ("Andresgon", "andres1234");
const usuario3 = new Usuarios ("victoria", "vicky1234");
usuarios.push(usuario1);
usuarios.push(usuario2);
usuarios.push(usuario3);


const intentos = 2;

//Creamos funcion para login con 3 intentos
function login(){

for(let i = 0; i <= intentos; i++){

    let user = prompt("Ingrese su usuario");
    let pw = prompt("Ingrese su contraseña");

//Buscamos en los objetos si existe ese usuario ingresado
    const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.user === user && usuario.pw === pw
        );

    if(usuarioEncontrado){
        alert(`Bienvenido/a ${usuarioEncontrado.user}`);
        ventaEntradas(user);                                   //iniciamos la funcion de las entradas si el usuario es correcto
        return;
    }else{
        alert("Usuario o contraseña incorrecta");
    } 
    
}
alert("Ha agotado los intentos de inicio de sesion");
}


//funcion para la venta de entradas

function ventaEntradas(user){
    const maxEntradas = 4;
    let cantidadEntradas = parseInt(prompt("Ingrese la contidad de entradas que desea adquirir:"));
    
    if (cantidadEntradas > maxEntradas){
        alert(`Solo puede adquirir un máximo de ${maxEntradas} entradas por persona`);
        return;
    }

    for (let entrada = 1; entrada <= cantidadEntradas; entrada++){
        let nombre = prompt("Ingrese el nombre de la persona que usara la entrada");
        alert(`Nombre: ${nombre}, Entrada #${entrada}`);
    }

    if(cantidadEntradas === maxEntradas){
        alert("Has alcanzado el máximo posible de entradas adquiridas.");
        alert("Completaste con éxito la compra de tus entradas.");
    }else{
        alert("Completaste con éxito la compra de tus entradas.");
    }
}


login();