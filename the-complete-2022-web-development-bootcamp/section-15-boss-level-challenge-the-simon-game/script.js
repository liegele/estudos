let gamePattern = [];
let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

let randomNumber, randomChosenColour;

//Function to keep the sequence of sounds.
function nextSequence() {
  //Generating a random number between [0 and 3].
  randomNumber = Math.floor(Math.random() * 4);

  //Defining the chosen colour.
  randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);

  //Put chosen colour in gamePattern array.
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);

  playSound(randomChosenColour);
}

nextSequence();

//Adding fadeOut and fadeIn effect on chosen colour.
$(`#${randomChosenColour}`).delay().fadeOut().fadeIn();

//Playing a sound for chosen colour.
function playSound(whichColour) {
  let audio = new Audio(`sounds/${whichColour}.mp3`);
  audio.addEventListener("canplaythrough", (e) => {
    audio.play();
    console.log(randomChosenColour);
    console.log(gamePattern);
    console.log(`sounds/${whichColour}.mp3`);
  });
}

//Detecting when a button is clicked, but with event delegation (DIV <- DIV <- BUTTON).
function clickHandler() {
  $(".container").on("click", (e) => {
    console.log(`I'm got clicked. But I feel that just like bubbles! :)`);
    if (e.target.tagName === "BUTTON") {
      console.log(e.target.id);
      let userChosenColour = e.target.id;
      userClickedPattern.push(userChosenColour);
      console.log(userClickedPattern);
      $(`#${userChosenColour}`).on("click", playSound(userChosenColour));
    }
  });
}

//Add animation to the user clicks.
function animatePress(currentColour) {}

clickHandler();
