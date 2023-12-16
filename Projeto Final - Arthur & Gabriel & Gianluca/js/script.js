let jan1 = document.getElementById('plano1');
let jan2 = document.getElementById('plano2');
let jan3 = document.getElementById('plano3');

jan1.addEventListener('click', () => {
  plano1.style.background = '#FFAF1F';
  plano2.style.background = '#A7A6A6';
  plano3.style.background = '#A7A6A6';
})

jan2.addEventListener('click', () => {
  plano2.style.background = '#FFAF1F';
  plano1.style.background = '#A7A6A6';
  plano3.style.background = '#A7A6A6';
})

jan3.addEventListener('click', () => {
  plano3.style.background = '#FFAF1F';
  plano2.style.background = '#A7A6A6';
  plano1.style.background = '#A7A6A6';
})