let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  return Math.floor(Math.random() * 4);
}
let randomChosenColour = buttonColours[nextSequence()];
console.log(randomChosenColour);

gamePattern.push(randomChosenColour);
console.log(gamePattern);
$(`#${randomChosenColour}`).delay().fadeOut().fadeIn();
/* for (let i = 0; i < 50; i++) {
}
 */
