// Proyecto Wallet
$(document).ready(function () {

  const toast = new bootstrap.Toast(
  document.getElementById('toastLeyenda'),
  { delay: 4000 }
);

  // Capturar elementos del DOM
  const $btnDepositar = $("#btnDepositar");
  const $monto = $("#monto");
  const $msgInfo = $("#msgInfo");
  const $saldo = $("#saldo");

  // Saldo inicial
  let saldoInicial = saldoActual();
  $saldo.text(`$${saldoInicial}`);

  // Evento Depositar
  $btnDepositar.click(function () {

    const montoValor = $monto.val().trim();
    const montoNum = Number(montoValor);

    if (montoNum > 0) {
      const saldoTotal = saldoInicial + montoNum;

      $saldo.text(`$${saldoTotal}`);
      editarSaldo(saldoTotal);
      registrarDeposito(montoValor);

      saldoInicial = saldoTotal; 
      $monto.val(0);

      $msgInfo
        .text(`Depósito exitoso. Monto depositado $${montoValor}`)
        .removeClass("text-danger")
        .addClass("text-success");
      $("#toastMsg").text("Redirigiendo a Menu");
      toast.show();
      setTimeout(()=>{window.location.href = "menu.html"},3000)
    } else {
      $msgInfo
        .text("No puedes depositar, ingresa un monto válido!")
        .removeClass("text-success")
        .addClass("text-danger");
    }

  });

});
