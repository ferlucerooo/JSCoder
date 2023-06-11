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

//guardamos en el localstorage los usuarios
localStorage.setItem('usuarios', JSON.stringify(usuarios));

// al apretar el boton que tiene como id(login) se inicia la funcion login

let botonIngresar = document.getElementById("login");
botonIngresar.addEventListener("click", login); 

//al estar el cursor en la parte de contraseña y al apretar enter ingresa sin hacer click en el boton ingresar
let inputPw = document.getElementById("pw");
inputPw.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        login();
    }
});


//funcion para loguearse

function login () {
    
    let user = document.getElementById("user").value;
    let pw = document.getElementById("pw").value;
    
    const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.user === user && usuario.pw === pw
    );
// si el usuario es correcto entra a la pag
    usuarioEncontrado 
    ? window.location.href="./pages/tienda.html"
    : document.getElementById("mensaje").textContent = "Usuario o contraseña incorrecta";  // operador cambiado por if...else
    
}  

