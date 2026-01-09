// saldo inicial
if (!localStorage.getItem("saldo")) {
  localStorage.setItem("saldo", "100000");
}

if (!localStorage.getItem("ultimoDeposito")) {
  localStorage.setItem("ultimoDeposito", "0");
}

if (!localStorage.getItem("ultimoEnvio")) {
  localStorage.setItem("ultimoEnvio", "0");
}

// Saldo
function saldoActual() {
  return Number(localStorage.getItem("saldo"));
}

function editarSaldo(valor) {
  localStorage.setItem("saldo", valor);
}

// Movimientos simples
function ultimoDeposito(monto) {
  localStorage.setItem("ultimoDeposito", monto);
}

function ultimoEnvio(monto) {
  localStorage.setItem("ultimoEnvio", monto);
}
