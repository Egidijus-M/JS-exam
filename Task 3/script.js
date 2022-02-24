/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const showUsersBtn = document.querySelector("#btn");

showUsersBtn.addEventListener("click", () => {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((users) => {
      renderUserCards(users);
      removeMsg();
    });
});

const removeMsg = () => {
  const message = document.querySelector("#message");
  message.remove();
};

const renderUserCards = (users) => {
  const output = document.querySelector("#output");
  users.forEach((user) => {
    output.append(createCard(user));
  });
};

const createCard = (user) => {
  const divCard = document.createElement("div");
  divCard.setAttribute("class", "card");

  const login = document.createElement("h3");
  login.innerText = user.login;

  const avatar = document.createElement("img");
  const avatarUrl = user.avatar_url;
  avatar.setAttribute("src", avatarUrl);
  avatar.setAttribute("alt", "user-avatar");

  divCard.append(login, avatar);

  return divCard;
};
