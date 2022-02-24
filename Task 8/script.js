/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = (firstNr, secondNr) => firstNr + secondNr;
  this.substraction = (firstNr, secondNr) => firstNr - secondNr;
  this.multiplication = (firstNr, secondNr) => firstNr * secondNr;
  this.division = (firstNr, secondNr) => firstNr / secondNr;
}

const calc = new Calculator();

const a = 4;
const b = 2;

console.log("Suma: " + calc.sum(a, b));
console.log("Skirtumas: " + calc.substraction(a, b));
console.log("Daugyba: " + calc.multiplication(a, b));
console.log("Dalyba " + calc.division(a, b));
