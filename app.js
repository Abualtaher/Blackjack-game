let firstCard = 12;
let secondCard = 9;

let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

if (sum < 21) {
  console.log("You aer in the clear");
} else if (sum === 21) {
  console.log("You win!!!");
  hasBlackJack = true;
} else {
  console.log("You lose!");
  isAlive = false;
}
