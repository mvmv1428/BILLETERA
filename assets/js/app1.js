$(document).ready(function () {

const toast = new bootstrap.Toast(
  document.getElementById('toastLoginError'),
  { delay: 4000 }
);
  $('#formLogin').submit(function (event) {
    event.preventDefault();

    const correo = $("#correo").val();
    const clave = $("#clave").val();

    if (correo === '' || clave === '') {
      $("#msgLogin")
        .text("Debes ingresar tus credenciales!")
        .addClass("bg-danger");

      $("#btnLogin").prop("disabled", true);
      return;
    }

    if (correo === 'matias@gmail.cl' && clave === '123456') {
        $("#toastLoginError").removeClass("text-bg-danger").addClass("text-bg-success");
        $("#toastMsg").text("Credenciales correctas");
        toast.show();

      setTimeout(() => {
        window.location.href = "menu.html";
      }, 2000);
    } else {    
        $("#toastMsg").text("Credenciales incorrectas");
        toast.show();
        }
  });

  $("#correo, #clave").keyup(function () {
    const correo = $("#correo").val();
    const clave = $("#clave").val();

    $("#btnLogin").prop("disabled", correo === '' || clave === '');
  });

});
