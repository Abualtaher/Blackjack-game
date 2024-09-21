let firstCard = 12;
let secondCard = 8;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

if (sum < 21) {
  message = "You aer in the clear";
} else if (sum === 21) {
  message = "You win!!!";
  hasBlackJack = true;
} else {
  message = "You lose!";
  isAlive = false;
}

console.log(message);
