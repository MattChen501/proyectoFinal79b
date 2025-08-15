// 1) CAMBIAR TEMA (claro <-> oscuro)
const btnTema = document.getElementById('btnTema');

btnTema.addEventListener('click', function () {
  // .classList.toggle() agrega la clase si no está; la quita si sí está
  document.body.classList.toggle('oscuro');
});

// 2) MOSTRAR DATO CURIOSO
const btnDato = document.getElementById('btnDato');
const salida = document.getElementById('salidaDato');

// Arreglo de datos simples (strings)
const datosCuriosos = [
  'Su apodo era "Black Beauty" por el color negro y dorado.',
  'El efecto suelo aumentaba el agarre sin usar alerones enormes.',
  'El motor Cosworth DFV fue muy popular en los 70.',
  'Con el Lotus 79, Lotus ganó el título de 1978.',
  'Usaba túneles venturi para crear baja presión debajo del auto.'
];

btnDato.addEventListener('click', function () {
  // Elegimos un índice aleatorio entre 0 y (longitud - 1)
  const i = Math.floor(Math.random() * datosCuriosos.length);
  // Mostramos el texto elegido en el párrafo
  salida.textContent = datosCuriosos[i];
});
