// Variables globales
let numero1;
let numero2;
let operacion;

// Obtener referencias a los elementos
const inputs = document.querySelectorAll('.input-field');
const buttons = document.querySelectorAll('.btn');

// Añadir un único event listener para todos los botones
document.querySelector('.buttons-container').addEventListener('click', e => {
  // Verificar si lo que se clickeó es un botón
  if (e.target.classList.contains('btn')) {
    // Guardar los valores en las variables globales
    numero1 = parseFloat(inputs[0].value);
    numero2 = parseFloat(inputs[1].value);
    operacion = e.target.id;

    // Para verificar que funciona
    console.log('Número 1:', numero1);
    console.log('Número 2:', numero2);
    console.log('Operación:', operacion);

    calcular(numero1, numero2, operacion);
  }
});

const calcular = (numero1, numero2, operacion) => {
  let resultado;

  switch (operacion) {
    case 'sumar':
      resultado = numero1 + numero2;
      console.log(
        `El resultado de ${operacion} ${numero1} + ${numero2} = ${resultado}`
      );
      break;
    case 'restar':
      resultado = numero1 - numero2;
      console.log(
        `El resultado de ${operacion} ${numero1} - ${numero2} = ${resultado}`
      );
      break;
    case 'multiplicar':
      resultado = numero1 * numero2;
      console.log(
        `El resultado de ${operacion} ${numero1} * ${numero2} = ${resultado}`
      );
      break;
    case 'dividir':
      if (numero2 !== 0) {
        resultado = numero1 / numero2;
        console.log(
          `El resultado de ${operacion} ${numero1} / ${numero2} = ${resultado}`
        );
      } else {
        console.log('Error: No se puede dividir por 0');
      }
      break;
    default:
      console.log('Operación no válida');
  }
};

// A PARTIR DE ESTA LINEA DE CÓDIGO CADA VARIABLE TIENE SU VALOR:
// - numero1: contiene el primer número introducido en el formulario
// - numero2: contiene el segundo número introducido en el formulario
// - operacion: contiene el tipo de operación ('sumar', 'restar', 'multiplicar' o 'dividir')
//
// EJERCICIO: Crear una calculadora que:
// 1. Use estas variables para obtener los números y la operación
// 2. Realice el cálculo correspondiente según el botón pulsado
// 3. Muestre el resultado por consola usando console.log()
//
// Por ejemplo, si numero1 = 5, numero2 = 3 y operacion = 'sumar'
// deberá mostrar por consola: "El resultado de 5 + 3 = 8"
