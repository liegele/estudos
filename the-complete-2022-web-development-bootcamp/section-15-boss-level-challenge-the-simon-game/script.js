let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

//Function to generate a random number.
function nextSequence() {
  return Math.floor(Math.random() * 4);
}

//Defining the chosen colour.
let randomChosenColour = buttonColours[nextSequence()];
console.log(randomChosenColour);

//Put chosen colour in gamePattern array.
gamePattern.push(randomChosenColour);
console.log(gamePattern);

//Adding fadeOut and fadeIn effect on chosen colour.
$(`#${randomChosenColour}`).delay().fadeOut().fadeIn();

//Playing a sound for chosen colour.
function playSound(whichColour) {
  let audio = new Audio(`sounds/${whichColour}.mp3`);
  audio.play();
  console.log(randomChosenColour);
  console.log(gamePattern);
  console.log(`sounds/${whichColour}.mp3`);
}

//Detecting when a button is clicked, but with event delegation (DIV <- DIV <- BUTTON).
function clickHandler() {
  $(".container").on("click", (e) => {
    console.log(`I'm got clicked. But I feel that just like bubbles! :)`);
    if (e.target.tagName === "BUTTON") {
      console.log(e.target.id);
      let userChosenColour = e.target.id;
      $(`#${userChosenColour}`).on("click", playSound(userChosenColour));
    }
  });
}

clickHandler();
