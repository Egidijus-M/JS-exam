/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const btn = document.querySelector("#btn__element");
const counter = document.querySelector("#btn__state");

const plusOne = () => {
  const result = Number(counter.textContent);
  counter.textContent = result + 1;
};

btn.addEventListener("click", plusOne);
