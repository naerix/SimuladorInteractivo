
const user=prompt("registre un nombre de usuario");
const pass = prompt("registre una contraseña"); 
alert("registro exitoso, por favor pulse -ACEPTAR- para iniciar sesion")
function login(){
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;

    if( usuario === user && contraseña === pass){
        alert("inicio de sesion exitoso");
    }

    else{
        alert("contraseña o usuario incorrectos");
    }
}

