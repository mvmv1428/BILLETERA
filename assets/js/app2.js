
//Proyecto Wallet


//Capturar los elementos del DOM (HTML)
//Inputs
const saldoCuenta = document.getElementById("saldocuenta")
//Botones
const btnDepositar = document.getElementById("btnDepositar")
const btnEnviar = document.getElementById("btnEnviar")
const btnMovimiento = document.getElementById("btnMovimiento")
//Mensajes
const msgInfo = document.getElementById("msgInfo")


//Funciones Menu

//Saldo 
let saldoInicial = saldoActual();
saldoCuenta.textContent = `$${saldoInicial}`;

btnDepositar.addEventListener("click", () => {
    msgInfo.textContent = "Redirigiendo a Depositar"
    setTimeout(()=>{window.location.href = "deposit.html"},3000)
})

btnEnviar.addEventListener("click", () => {
    msgInfo.textContent = "Redirigiendo a Enviar Dinero"
    setTimeout(()=>{window.location.href = "sendmoney.html"},3000)
})

btnMovimiento.addEventListener("click", () => {
    msgInfo.textContent = "Redirigiendo a últimos movimientos"
    setTimeout(()=>{window.location.href = "transactions.html"},3000)
})