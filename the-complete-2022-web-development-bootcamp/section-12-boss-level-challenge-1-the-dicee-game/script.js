//Generate a random number from 1 to 6.
function randomGenerator(diceImagePlayer) {
  let randomNumber = Math.floor(Math.random() * 6 + 1);
  document
    .querySelector(`.${diceImagePlayer}`)
    .setAttribute("src", `image/dice${randomNumber}.png`);
  return randomNumber;
}

//Shows image based on numberGenerator function returned number for player 1 and player 2.
let numberPlayer1 = randomGenerator("img1");
let numberPlayer2 = randomGenerator("img2");

//Update UI based on final result.
const textResult = document.querySelector("h1");
function updateUI(winner) {
  winner === "Draw"
    ? (textResult.textContent = `Draw! 🧻`)
    : (textResult.textContent = `${winner} wins! 🔥`);
}

//Show the final result for the match on top header.
if (numberPlayer1 > numberPlayer2) {
  updateUI("Player 1");
} else if (numberPlayer1 < numberPlayer2) {
  updateUI("Player 2");
} else {
  updateUI("Draw");
}
