/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

*/

const displayBtn = document.getElementById('convert-btn');
const inputEl = document.getElementById('convert-val');
const lengthRes = document.getElementById('lengthResult');
const volumeRes = document.getElementById('volumeResult');
const massRes = document.getElementById('massResult');

displayBtn.addEventListener('click', () => {
  let value = inputEl.value;
  let feet = (value * 3.281).toFixed(3);
  let meter = (value / 3.281).toFixed(3);

  let gallons = (value * 0.264).toFixed(3);
  let liter = (value / 0.264).toFixed(3);

  let pounds = (value * 2.204).toFixed(3);
  let kilo = (value / 2.204).toFixed(3);

  lengthRes.textContent = `${value} meters = ${feet} feet | ${value} feet = ${meter} meters `;

  volumeRes.textContent = `${value} liters = ${gallons} gallons | ${value} gallons = ${liter} liters `;

  massRes.textContent = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilo} kilos `;
});
