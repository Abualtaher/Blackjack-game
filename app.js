/* let player = {
  firstName: "Per",
  chips: 145,
}; */
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");
let playerEl = document.querySelector("#player-el");
function myWins(chips) {
  let player = {
    chips: 10,
  };
  return (playerEl.textContent = "You win: $" + player.chips);
}

function getRandomCard() {
  let randNum = Math.floor(Math.random() * 13) + 1;
  if (randNum === 1) {
    return 11;
  } else if (randNum >= 11) {
    return 10;
  } else {
    return randNum;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "You are in the clear";
  } else if (sum === 21) {
    message = "You win!!!";
    hasBlackJack = true;
    myWins();
  } else {
    message = "You lose!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
