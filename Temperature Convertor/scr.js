let cvar = document.querySelector(".celcius > input");
let fvar = document.querySelector(".fahrenheit > input");
let kvar = document.querySelector(".kelvin > input");
let clvar = document.querySelector(".button button");
function roundNumber(number) {
  return Math.round(number * 100) / 100;
}
cvar.addEventListener("input", function () {
  let ctemp = parseFloat(cvar.value);
  let ftemp = ctemp * (9 / 5) + 32;
  let ktemp = ctemp + 273.15;
  fvar.value = roundNumber(ftemp);
  kvar.value = roundNumber(ktemp);
});
fvar.addEventListener("input", function () {
  let ftemp = parseFloat(fvar.value);
  let ctemp = (ftemp - 32) * (5 / 9);
  let ktemp = (ftemp - 32) * (5 / 9) + 273.15;
  cvar.value = roundNumber(ctemp);
  kvar.value = roundNumber(ktemp);
});
kvar.addEventListener("input", function () {
  let ktemp = parseFloat(kvar.value);
  let ftemp = (ktemp - 273.15) * (9 / 5) + 32;
  let ctemp = ktemp - 273.15;
  fvar.value = roundNumber(ftemp);
  cvar.value = roundNumber(ctemp);
});
clvar.addEventListener("click", function () {
  cvar.value = "";
  fvar.value = "";
  kvar.value = "";
});