/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const convertToLb = (weight) => weight * 2.2046;
const convertToGrams = (weight) => weight / 0.001;
const convertToOz = (weight) => weight * 35.274;

const btnSubmit = document.querySelector("form");
btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.querySelector("#search");
  weight = input.value;

  const lb = convertToLb(weight);
  const grams = convertToGrams(weight);
  const oz = convertToOz(weight);

  const output = document.querySelector("#output");
  output.textContent = `Lb: ${lb} | Grams: ${grams} | Oz: ${oz}`;
});
