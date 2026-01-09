//Proyecto Wallet


//Capturar los elementos del DOM (HTML)

//Inputs
const correo = document.getElementById("correo")
const clave = document.getElementById("clave")
//Forms
const formLogin = document.getElementById("formLogin")
//Botones
const btnLogin = document.getElementById("btnLogin")
//Mensajes
const msgLogin = document.getElementById("msgLogin")


//Variables de Usuarios
const usuarios = [
    {
        correo: "matias@gmail.cl",
        clave: "123456",
        saldo: 600000
    },
    {
        correo: "guillermo@gmail.cl",
        clave: "1234",
        saldo: 70000
    }
];

//Teclas

clave.addEventListener("keyup", () => {
    if(correo.value !== '' && clave.value !== ''){
        btnLogin.disabled = false;
    }
    else{
        btnLogin.disabled = true;
    }
})

// Evento Submit del formulario

formLogin.addEventListener("submit", (e) => {
    e.preventDefault()

    //Verificar Inputs
    if (correo.value == ''|| clave.value == ''){
        msgLogin.textContent = "Debes ingresar tus credenciales!";
        msgLogin.classList.add("bg-danger");
        btnLogin.disabled = true;
        return;
    }

    //Buscamos el usuario en la lista usuarios
    const buscarUsuario = usuarios.find(usuario => usuario.correo === correo.value && usuario.clave === clave.value );

    //Login correcto
    if (buscarUsuario){
        msgLogin.classList.remove("bg-danger");
        msgLogin.classList.add("bg-info");
        msgLogin.textContent = "Login Exitoso... Estamos redirigiendote a tu cuenta.";
        setTimeout(() => {
            window.location.href = "menu.html";
        }, 2000)
    }
    //Login incorrecto
    else{
        msgLogin.classList.add("bg-danger");
        msgLogin.textContent = "Error Login Credenciales Incorrectas.";
    }

});

