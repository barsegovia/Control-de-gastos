
/*let presupuesto = parseFloat(prompt("Ingrese su presupuesto mensual:"));
let listaGastos = [];
let totalGastos = 0;
function agregarGasto() {
  let nuevoGasto = parseFloat(prompt("Ingrese el monto del gasto:"));
  listaGastos.push(nuevoGasto);
  totalGastos = listaGastos.reduce((total, gasto) => total + gasto, 0);
  
  if (totalGastos > presupuesto) {
    alert("¡Se ha excedido de su presupuesto mensual!");
  }
}
//Sigue ingresando gastos hasta que supere el presupuesto mensual //
while(presupuesto>totalGastos){
    agregarGasto();
}*/



let presupuesto;
let listaGastos = [];
let totalGastos = 0;

document.getElementById("presupuestoInput").disabled = false;

function iniciarControlGastos() {
  presupuesto = parseFloat(document.getElementById("presupuestoInput").value);
  document.getElementById("presupuestoInput").disabled = true;
  document.getElementById("gastoInput").disabled = false;
  document.getElementById("mensajeExcesoPresupuesto").textContent = "";
}

function agregarGasto() {
  let nuevoGasto = parseFloat(document.getElementById("gastoInput").value);
  listaGastos.push(nuevoGasto);
  totalGastos += nuevoGasto;
  
  actualizarListaGastos();
  actualizarTotalGastos();
  
  if (totalGastos > presupuesto) {
    document.getElementById("mensajeExcesoPresupuesto").textContent = "¡Se ha excedido de su presupuesto mensual!";
    document.getElementById("gastoInput").disabled = true;
  }

  actualizarListaGastos();
  actualizarTotalGastos();
  document.getElementById("gastoInput").value = "";
}
  
function borrarRegistro(index) {
  let gastoEliminado = listaGastos.splice(index, 1)[0];
  totalGastos -= gastoEliminado;

  actualizarListaGastos();
  actualizarTotalGastos();
}

function actualizarListaGastos() {
  let listaGastosElement = document.getElementById("listaGastos");
  listaGastosElement.innerHTML = "";

  listaGastos.forEach(function (gasto, index) {
    let listItem = document.createElement("li");
    listItem.textContent = gasto;
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", function () {
      borrarRegistro(index);
    });
    listItem.appendChild(deleteButton);
    listaGastosElement.appendChild(listItem);
  });
}

function borrarPresupuesto() {
  //presupuesto = null;
  input = document.getElementById("presupuestoInput")
  input.disabled = false;
  input.value = 0;
}


guardarDatosEnStorage();



function actualizarTotalGastos() {
  let totalGastos = listaGastos.reduce((total, gasto) => total + gasto, 0);
  document.getElementById("totalGastos").textContent = "Total de gastos: " + totalGastos;
}

function guardarDatosEnStorage() {
  let datos = {
    presupuesto: presupuesto,
    listaGastos: listaGastos
  };
  localStorage.setItem("datosGastos", JSON.stringify(datos));
}

function cargarDatosDesdeStorage() {
  let datos = JSON.parse(localStorage.getItem("datosGastos"));
  if (datos) {
    presupuesto = datos.presupuesto;
    listaGastos = datos.listaGastos;
    
    document.getElementById("presupuestoInput").value = presupuesto;
    document.getElementById("presupuestoInput").disabled = true;
    document.getElementById("gastoInput").disabled = false;
    
    actualizarListaGastos();
    actualizarTotalGastos();
  }
}
function actualizarTotalGastos() {
  document.getElementById("totalGastos").textContent = "Total de gastos: $" + totalGastos.toFixed(2);
}
window.addEventListener("DOMContentLoaded", cargarDatosDesdeStorage);
