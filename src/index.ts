// declaracion de variables
let inputValorIngresado = <HTMLInputElement>(
  document.getElementById("inputValorIngresado")
);
let btnValorIngresado = <HTMLButtonElement>(
  document.getElementById("btnValorIngresado")
);
let divMostrarArreglo = <HTMLDivElement>(
  document.getElementById("divMostrarArreglo")
);
let tamanioArreglo: number;
let arregloIterado: number[] = new Array();

//declaracion de funciones
function determinarLargoDelArreglo(arreglo: Array<number>, tamanio: number) {
  arreglo.length = tamanio;
}

function generarArreglo(arreglo: Array<number>) {
  for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i + 1;
  }
}

//resto del codigo
btnValorIngresado.addEventListener("click", () => {
  tamanioArreglo = Number(inputValorIngresado.value);
  determinarLargoDelArreglo(arregloIterado, tamanioArreglo);
  generarArreglo(arregloIterado);
  divMostrarArreglo.innerHTML = String(arregloIterado.reverse());
});
