// Proyecto Wallet
$(document).ready(function () {

  // Botones
  const $btnConfirmarEnvio = $("#btnConfirmarEnvio");
  const $btnenvio2 = $("#btnenvio2");

  // Forms
  const $formContacto = $("#formContacto");
  const $formEnvio = $("#formEnvio");
  const $listaContactos = $("#contactList");

  // Inputs
  const $nombre = $("#nombre");
  const $banco = $("#banco");
  const $cuenta = $("#cuenta");
  const $rut = $("#rut");
  const $alias = $("#alias");
  const $montoEnviar = $("#montoEnviar");

  // Mensajes
  const $msgInfo = $("#msgInfo");
  const $msgInfo2 = $("#msgInfo2");
  const $msgEnviar = $("#msgEnviar");
  const $saldo = $("#saldo");

  // SALDO INICIAL
  let saldoInicial = saldoActual();
  $saldo.text(`$${saldoInicial}`);

  // AGREGAR CONTACTO
  function agregarContacto(nombre, rut, alias, banco, cuenta) {
    const $li = $("<li>")
      .addClass("list-group-item contacto")
      .attr("data-nombre", nombre);

    const $div = $("<div>").addClass("contact-info");

    const $spanNombre = $("<span>")
      .addClass("contact-name")
      .text(nombre);

    const $spanDetalles = $("<span>")
      .addClass("contact-details")
      .text(` RUT: ${rut}, Alias: ${alias}, Banco: ${banco}, Cuenta: ${cuenta}`);

    const $botonEnvia = $("<button>")
      .addClass("btn btn-sm btn-primary btn-enviar ms-3 d-none")
      .text("Enviar");


    $div.append($spanNombre, $spanDetalles);
    $li.append($div);
    $div.append($botonEnvia);
    $listaContactos.append($li);
  }

  // FORM CONTACTO
  $formContacto.submit(function (e) {
    e.preventDefault();

    if (
      $nombre.val() &&
      $cuenta.val() &&
      $rut.val() &&
      $banco.val()
    ) {
      $msgInfo.text("Datos ingresados! Contacto guardado");

      agregarContacto(
        $nombre.val(),
        $rut.val(),
        $alias.val(),
        $banco.val(),
        $cuenta.val()
      );

      const modal = bootstrap.Modal.getInstance($("#exampleModal")[0]);
      modal.hide();

      this.reset();
      $msgInfo.text("");
    } else {
      $msgInfo.text("Revisa los datos ingresados!");
    }
  });

  // =========================
  // MODAL ENVIAR (CONTACTOS)
  // =========================
  let contactoActual = "";
  const modalEnviar = new bootstrap.Modal($("#modalEnviar")[0]);

  
  $listaContactos.on("click", ".contacto", function () {
    contactoActual = $(this).data("nombre");

    $("#contactoSeleccionado").text(contactoActual);
    $montoEnviar.val("");
    $msgEnviar.text("");

    modalEnviar.show();
  });

  // =========================
  // CONFIRMAR ENVÍO (MODAL 1)
  // =========================
  $btnConfirmarEnvio.click(function () {
    const monto = Number($montoEnviar.val());

    if (monto <= 0) {
      $msgEnviar.text("Monto inválido");
      return;
    }

    if (monto > saldoActual()) {
      $msgEnviar.text("Saldo insuficiente");
      return;
    }

    editarSaldo(saldoActual() - monto);
    registrarTransferencia(monto);

    $msgEnviar.text("Transferencia realizada");

    setTimeout(() => location.reload(), 2000);
  });

  // =========================
  // MODAL ENVÍO MANUAL (2)
  // =========================
  const modalEnvios = new bootstrap.Modal($("#modalenvios")[0]);

  $btnenvio2.click(function () {
    modalEnvios.show();
  });

  $formEnvio.submit(function (e) {
    e.preventDefault();

    const monto2 = Number($("#montoEnviar2").val());

    if (
      $("#nombre2").val() &&
      $("#cuenta2").val() &&
      $("#rut2").val() &&
      $("#banco2").val() &&
      monto2 > 0
    ) {
      if (monto2 > saldoActual()) {
        $msgInfo2.text("Saldo insuficiente");
        return;
      }

      editarSaldo(saldoActual() - monto2);
      registrarTransferencia(monto2);

      $msgInfo2.text("Transferencia realizada");

      setTimeout(() => {
        modalEnvios.hide();
        location.reload();
      }, 2000);

      this.reset();
    } else {
      $msgInfo2.text("Revisa los datos ingresados!");
    }
  });

  $("#buscar").on("keyup", function () {
    let texto = $(this).val().toLowerCase();
    let encontrados = 0;

    $("#contactList .contacto").each(function () {
      let nombre = $(this).text().toLowerCase();

      if (nombre.includes(texto)) {
        $(this).show();
        encontrados++;
      } else {
        $(this).hide();
      }
    });

    // Mostrar / ocultar mensaje "no encontrado"
    if (encontrados === 0 && texto !== "") {
      $("#noEncontrado").removeClass("d-none");
    } else {
      $("#noEncontrado").addClass("d-none");
    }
  });

});
