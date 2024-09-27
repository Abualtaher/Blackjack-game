let firstCard = 12;
let secondCard = 23;
let cards = [firstCard, secondCard];
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
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Card : " + cards[0] + " | " + cards[1];
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
}

function newCard() {
  let card = 6;
  sum += card;
  cards.push(card);
  renderGame();
}
