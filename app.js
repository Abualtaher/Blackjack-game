let firstCard = 12;
let secondCard = 23;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");

function startGame() {
  if (sum < 21) {
    message = "You aer in the clear";
  } else if (sum === 21) {
    message = "You win!!!";
    hasBlackJack = true;
  } else {
    message = "You lose!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent += sum;
  cardEl.textContent = "Card : " + firstCard + " | " + secondCard;
}
