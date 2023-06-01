
//Función de baja legibilidad y mantenibilidad:
//Mejora la legibilidad y mantenibilidad de la siguiente función para hacerla más comprensible y fácil de mantener.

function a(b, c) { if (b > 10 && c < 5) { for (let d = 0; d < b; d++) { if (d % 2 === 0) { console.log(d) } } } else { console.log("Los valores no cumplen las condiciones") } }


// Repuesta: 

//Input
// Quiero que recuerdes esto "aqui pongo el ejercicio"
// Quiero que lo refactorizes aplicando mejores practicas y que tenga mantenibilidad

//Output
/**
 * Imprimir números pares hasta un límite dado
 * @param {number} limite - El límite superior
 */
function imprimirNumerosPares(limite) {
    if (typeof limite !== "number") {
        throw new Error("limite tiene que ser de tipo number");
      }
    if (limite <= 0) {
      console.log("El límite debe ser mayor que cero");
      return;
    }
  
    for (const numero = 0; numero <= limite; numero += 2) {
      console.log(numero);
    }
  }

  


// Complejidad excesiva:
// Simplifica la siguiente función de Fibonacci, que tiene una complejidad excesiva, para mejorar su rendimiento y eficiencia.

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}



// Repuesta: 

//Input
// Quiero que recuerdes esto ["aqui pongo el ejercicio"]
// Ahora quiero que la simplifiques, que tiene una complejidad excesiva, quiero que mejores su rendimiento y eficiencia.

//Output

//En esta versión, utilizamos un objeto memo como caché para almacenar los resultados calculados previamente. Antes de realizar un cálculo, verificamos si el resultado ya está en la caché. Si es así, lo recuperamos directamente en lugar de volver a calcularlo.

// Esta técnica reduce drásticamente la cantidad de cálculos necesarios y mejora significativamente el rendimiento de la función para valores grandes de n.
function fibonacci(n, memo = {}) {
    if (n <= 1) {
      return n;
    }
  
    if (memo[n]) {
      return memo[n];
    }
  
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
  }
  



// Rendimiento deficiente:
//Optimiza la siguiente función para sumar un arreglo de números y mejorar su rendimiento.


function sumarNumeros(numeros) {
  let resultado = 0;
  for (let i = 0; i < numeros.length; i++) {
    resultado += numeros[i];
  }
  return resultado;
}


// Repuesta: 

//Input
// Quiero que recuerdes esto ["aqui pongo el ejercicio"]
// Ahora quiero que le apliques técnicas para optimizar el rendimiento de operaciones de suma en JavaScript.

//Output

const sumarNumeros = numeros => numeros.reduce((acumulador, numero) => acumulador + numero, 0);

