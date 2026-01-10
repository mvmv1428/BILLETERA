// Proyecto Wallet

function getTipoTransaccion(tipo) {
  switch (tipo) {
    case "deposito":
      return "Depósito";
    case "compra":
      return "Compra";
    case "transferencia":
      return "Transferencia";
    default:
      return "Movimiento";
  }
}

function mostrarUltimosMovimientos(filtro) {
  const lista = $("#listaMovimientos");
  lista.empty();

  const movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];
  let encontrados = 0;

  movimientos.forEach(mov => {
    if (filtro === "todos" || mov.tipo === filtro) {
      lista.append(`
        <li class="list-group-item">
          ${getTipoTransaccion(mov.tipo)} - $${mov.monto}
          - fecha: ${mov.fecha} - ${mov.hora}
        </li>
      `);
      encontrados++;
    }
  });

  if (encontrados === 0) {
    lista.append(`
      <li class="list-group-item text-center text-muted">
        No hay movimientos para este filtro
      </li>
    `);
  }
}

$(document).ready(function () {

  // Mostrar todos al cargar
  mostrarUltimosMovimientos("todos");

  $("#filtroMovimientos").on("change", function () {
    mostrarUltimosMovimientos($(this).val());
  });

});
