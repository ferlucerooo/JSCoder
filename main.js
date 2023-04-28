// Crear un algoritmo con un condicional.

/* let num1 = prompt("ingrese numero 1");
let num2 = prompt("ingrese numero 2");

if (num1 < num2){
    
    alert("El numero " + num1 + " es menor que " + num2);
}else{
    alert("El numero " + num1 + " es mayor que " + num2);
}
 */



//Crear un algoritmo utilizando un ciclo.
//comprar entradas por la web

/* for(let entrada = 1; entrada <= 10; entrada++){
    let nombre = prompt("Ingrese su nombre")
    alert(`Nombre: ${nombre}, Entrada #${entrada}`);
}
    alert("Se agotaron las entradas");

 */

//simulador interactivo

const user1 = "FerLucero";
const pw1 = "ferlu";
const intentos = 2;

function login(){

for(let i = 0; i <= intentos; i++){

    let user = prompt("Ingrese su usuario");
    let pw = prompt("Ingrese su contraseña");

    if(user === user1 && pw === pw1){
        alert("Bienvenido FerLucero");
        return;
    }else{
        alert("Usuario o contraseña incorrecta");
    } 
    
}
alert("Ha agotado los intentos de inicio de sesion");
}

login();
