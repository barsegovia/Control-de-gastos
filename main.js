
let presupuesto = parseFloat(prompt("Ingrese su presupuesto mensual:"));
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
}



