/* let usuarios = [];
fetch("../json/user.json")
.then(response => response.json())
.then(data =>{
  usuarios = data;
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
})
.catch(error => {
    console.log('Error al obtener los usuarios:', error);
  });
 */


// traemos los user desde un json y los guardamos en usuarios

  let usuarios = [];
  const traerUsuarios = async () => {
    try{
      const response = await fetch("../json/user.json");
      usuarios = await response.json();
     localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
    catch(error) {
      console.log('Error al obtener los productos:', error);
    };
  }
  
  traerUsuarios();


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


// si el checkbox esta chequeado se guarda la info en el sessionStorage

 let botonRecuerdame = document.getElementById('recordarme');
 botonRecuerdame.addEventListener('change', function(){
 if(this.checked) {
  sessionStorage.setItem('usuarioEncontrado', JSON.stringify(usuarios));
 }
 })

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

