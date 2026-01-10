
//Proyecto Wallet
$(document).ready(function () {
const toast = new bootstrap.Toast(
  document.getElementById('toastLeyenda'),
  { delay: 4000 }
);
$("#btnDepositar").click( function ()  {
    $("#toastMsg").text("Redirigiendo a Depositar");
    toast.show();
    setTimeout(()=>{window.location.href = "deposit.html"},3000)
});
$("#btnEnviar").click( function ()  {
    $("#toastMsg").text("Redirigiendo a Enviar Dinero");
    toast.show();
    setTimeout(()=>{window.location.href = "sendmoney.html"},3000)
})
$("#btnMovimiento").click( function ()  {
    $("#toastMsg").text("Redirigiendo a últimos movimientos");
    toast.show();
    setTimeout(()=>{window.location.href = "transactions.html"},3000)
});
});

//Capturar los elementos del DOM (HTML)
//Inputs
const saldoCuenta = document.getElementById("saldocuenta")

//Funciones Menu

//Saldo 
let saldoInicial = saldoActual();
saldoCuenta.textContent = `$${saldoInicial}`;
