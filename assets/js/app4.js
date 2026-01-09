
//Proyecto Wallet


//Capturar los elementos del DOM (HTML)

//Botones
const btnConfirmarEnvio = document.getElementById("btnConfirmarEnvio")
const btnenvio2 = document.getElementById("btnenvio2")

//Forms
const formContacto = document.getElementById("formContacto")
const formEnvio = document.getElementById("formEnvio")
const listaContactos = document.getElementById("contactList")
//Inputs
const monto = document.getElementById("monto")
const nombre = document.getElementById("nombre")
const banco = document.getElementById("banco")
const cuenta = document.getElementById("cuenta")
const rut = document.getElementById("rut")
const alias = document.getElementById("alias")
const montoEnviar = document.getElementById("montoEnviar")

//Mensajes
const msgInfo = document.getElementById("msgInfo")
const msgInfo2 = document.getElementById("msgInfo2")
const msgEnviar = document.getElementById("msgEnviar")
const saldo = document.getElementById("saldo")

//Funciones Depositar

//Saldo Inicial
let saldoInicial = saldoActual();
saldo.textContent = `$${saldoInicial}`;

//Funciones 
function agregarContacto(nombre, rut, alias, banco, cuenta) {
  const li = document.createElement("li");
  li.className = "list-group-item contacto";
  li.dataset.nombre = nombre;
  const div = document.createElement("div");
  div.className = "contact-info";
  

  const spanNombre = document.createElement("span");
  spanNombre.className = "contact-name";
  spanNombre.textContent = nombre;

  const spanDetalles = document.createElement("span");
  spanDetalles.className = "contact-details";
  spanDetalles.textContent =
    ` RUT: ${rut}, Alias: ${alias}, Banco: ${banco}, Cuenta: ${cuenta}`;

  div.appendChild(spanNombre);
  div.appendChild(spanDetalles);
  li.appendChild(div);

  listaContactos.appendChild(li);
}

//Form Contacto
formContacto.addEventListener("submit", (e) => {
    e.preventDefault()
    if(nombre.value != '' && cuenta.value != '' && rut.value != '' && banco.value != ''){
        msgInfo.textContent = "Datos ingresados! Contacto Guardado"
        agregarContacto(nombre.value,rut.value,alias.value,banco.value,cuenta.value)
    const modalElement = document.getElementById("exampleModal");
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();

    // Limpiar formulario
    formContacto.reset();
    msgInfo.textContent = "";
        return;
    }
    else{
        msgInfo.textContent = "Revisa Los datos ingresados!"
    }

})

//Funcion Modal
let contactoActual = "";

const contactos = document.querySelectorAll(".contacto");
const modal = new bootstrap.Modal(
  document.getElementById("modalEnviar")
);

contactos.forEach(contacto => {
  contacto.addEventListener("click", () => {
    contactoActual = contacto.dataset.nombre;

    document.getElementById("contactoSeleccionado").textContent =
      contactoActual;

    document.getElementById("montoEnviar").value = "";
    document.getElementById("msgEnviar").textContent = "";

    modal.show();
  });
});

//Funcion Boto Enviar 1
btnConfirmarEnvio.addEventListener("click", ()=> {
    const monto = Number(montoEnviar.value);
    if(monto <= 0){
      msgEnviar.textContent = "Monto inválido";
      return;
    }
    if (monto > saldoActual()) {
      msgEnviar.textContent = "Saldo insuficiente";
    return;
    }
  editarSaldo(saldoActual() - monto);
  msgEnviar.textContent = "Transferencia realizada";
  ultimoEnvio(monto);
  setTimeout(()=>{window.location.reload();},2000)
  

})

//Funcion boton Enviar 2

const modal2 = new bootstrap.Modal(
  document.getElementById("modalenvios")
);
btnenvio2.addEventListener("click", ()=>{
    modal2.show();
})
formEnvio.addEventListener("submit", (e)=>{
    e.preventDefault()
         const monto2 = Number(montoEnviar2.value);
    if(nombre2.value != '' && cuenta2.value != '' && rut2.value != '' && banco2.value != '' && monto2 > 0){
        msgInfo2.textContent = "Transferencia realizada"
          ultimoEnvio(monto2);
  setTimeout(()=>{
    window.location.reload();
    modal2.hide();},2000)


    if (monto2 > saldoActual()) {
      msgInfo2.textContent = "Saldo insuficiente";
    return;
    }
  editarSaldo(saldoActual() - monto2);


    // Limpiar formulario
    formEnvio.reset();
        return;
    }
    else{
        msgInfo2.textContent = "Revisa Los datos ingresados!"
    }

})