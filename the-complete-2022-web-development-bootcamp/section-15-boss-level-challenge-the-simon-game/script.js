let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

//Function to generate a random number
function nextSequence() {
  return Math.floor(Math.random() * 4);
}

//Defining the chosen colour
let randomChosenColour = buttonColours[nextSequence()];
console.log(randomChosenColour);

//Put chosen colour in gamePattern array
gamePattern.push(randomChosenColour);
console.log(gamePattern);

//Adding fadeOut and fadeIn effect on chosen colour.
$(`#${randomChosenColour}`).delay().fadeOut().fadeIn();

//Playing a sound for chosen colour
function playSound() {
  let audio = new Audio(`sounds/${randomChosenColour}.mp3`);
  audio.play();
  console.log(`sounds/${randomChosenColour}.mp3`);
}

$(`#${randomChosenColour}`).on("click", playSound);
playSound();
