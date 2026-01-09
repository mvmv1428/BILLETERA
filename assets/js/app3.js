
//Proyecto Wallet


//Capturar los elementos del DOM (HTML)

//Botones
const btnDepositar = document.getElementById("btnDepositar")
//Inputs
const monto = document.getElementById("monto")
//Mensajes
const msgInfo = document.getElementById("msgInfo")
const saldo = document.getElementById("saldo")

//Funciones Depositar

//Saldo Inicial
let saldoInicial = saldoActual();
saldo.textContent = `$${saldoInicial}`;

btnDepositar.addEventListener("click", () => {
    montoValor = monto.value.trim();
    montoNum = Number(montoValor);
    if (montoNum > 0){
        const saldoTotal = saldoInicial + montoNum;
        saldo.textContent = `$${saldoTotal}`;
        editarSaldo(saldoTotal);
        ultimoDeposito(montoValor);
        monto.value = 0
        msgInfo.textContent = `Deposito Exitoso monto depositado $${montoValor}`
    }
    else{
        msgInfo.textContent = "No puedes depositar ingresa un monto!"
    }

})

