/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((cars) => {
    renderCards(cars);
  });

const renderCards = (cars) => {
  const output = document.querySelector("#output");
  cars.forEach((car) => {
    output.append(createCard(car));
  });
};

const createCard = (car) => {
  const divCard = document.createElement("div");
  divCard.setAttribute("class", "card");

  const divBrand = document.createElement("div");
  divBrand.setAttribute("class", "brand");

  const brand = document.createElement("h3");
  brand.innerText = car.brand.toUpperCase();

  const ul = document.createElement("ul");
  car.models.forEach((model) => {
    const li = document.createElement("li");
    li.innerText = model;
    ul.append(li);
  });

  divBrand.append(brand);

  divCard.append(divBrand, ul);

  return divCard;
};
