
//Proyecto Wallet


//Capturar los elementos del DOM (HTML)

const listaMovimientos = document.getElementById("listaMovimientos")


//Cargar ultimo deposito
const ultimoDeposito2 = Number(localStorage.getItem("ultimoDeposito"));

if (ultimoDeposito2 > 0) {

    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const fecha = new Date().toLocaleDateString();
    const hora = new Date().toLocaleTimeString();
    li.textContent = `Depósito - $${ultimoDeposito2} - fecha: ${fecha} - ${hora}`;
    listaMovimientos.prepend(li);

}

//Cargar ultimo envio
const ultimoEnvio2 = Number(localStorage.getItem("ultimoEnvio"));
if(ultimoEnvio2 > 0){
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const fecha = new Date().toLocaleDateString();
    const hora = new Date().toLocaleTimeString();
    li.textContent = `Transferencia - $${ultimoEnvio2} - fecha: ${fecha} - ${hora}`;
    listaMovimientos.prepend(li);

}
