let firstCard = 12;
let secondCard = 23;
let therdCard = 4;
let card = [firstCard, secondCard, therdCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");

function startGame() {
  renderGame();
}
function renderGame() {
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
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Card : " + card[0] + " | " + card[1];
}

function newCard() {
  sum += card[2];
  renderGame();
  cardEl.textContent += " | " + card[2];
}
