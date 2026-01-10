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
const movimientos = [
  {
    tipo: "deposito",
    monto: 150000,
    fecha: "01-01-2026",
    hora: "3:45 PM"
  },
  {
    tipo: "transferencia",
    monto: 45000,
    fecha: "31-12-2025",
    hora: "8:35 PM"
  },
  {
    tipo: "compra",
    monto: 20000,
    fecha: "30-12-2025",
    hora: "6:10 PM"
  }
];

if (!localStorage.getItem("movimientos")) {
  localStorage.setItem("movimientos", JSON.stringify(movimientos));
}

function registrarDeposito(monto) {
  movimientos.unshift({
    tipo: "deposito",
    monto: monto,
    fecha: new Date().toLocaleDateString(),
    hora: new Date().toLocaleTimeString()
  });

  localStorage.setItem("movimientos", JSON.stringify(movimientos));
}


function registrarTransferencia(monto) {
  movimientos.unshift({
    tipo: "transferencia",
    monto: monto,
    fecha: new Date().toLocaleDateString(),
    hora: new Date().toLocaleTimeString()
  });

  localStorage.setItem("movimientos", JSON.stringify(movimientos));
}
