let gamePattern = [];
let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let randomNumber, randomChosenColour;
let gameStarted = false;

//Starting game when Start button is clicked.

$("#level-title").on("click", (e) => {
  if (gameStarted === false) {
    startingGame();
    updateUI(`Level ${level}`, "Good luck!");
    setTimeout(() => {
      nextSequence();
      showGamingPattern();
      updateUI(`Level ${level}`);
      gameStarted = true;
    }, 2000);
  }
});

function startingGame() {
  gameStarted = true;
  gamePattern = [];
  userClickedPattern = [];
  level = 1;
  initialLevelClickHandler = 1;
  step = 0;
  index = 1;
}

//Update the user interface.
function updateUI(message, supportText) {
  $("#level-title").text(message);
  supportText === undefined
    ? $("#step").text(`${step} of ${level} steps`)
    : $("#step").text(supportText);
}

//function to block execution of JS.
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//Function to keep the sequence of colours/sounds.
function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
}

//Running game pattern until actual level.
function showGamingPattern() {
  if (initialLevelClickHandler === level) {
    gameStarted = false;
    gamePattern.forEach((element, index) => {
      setTimeout(() => {
        playAndEffectButton(element);
      }, index * 1000);
    });
  }
  gameStarted = true;
}

//Playing a sound for chosen colour.
function playSound(whichColour) {
  let audio = new Audio(`sounds/${whichColour}.mp3`);
  audio.addEventListener("canplaythrough", (e) => {
    audio.play();
  });
}

//Play sound and start button effect.
function playAndEffectButton(button) {
  $(`#${button}`).delay().fadeOut().fadeIn();
  playSound(button);
}

//Detecting when a button is clicked, but with event delegation (DIV <- DIV <- BUTTON).
function clickHandler() {
  $(".container").on("click", (e) => {
    if (e.target.tagName === "BUTTON" && gameStarted === true) {
      let userChosenColour = e.target.id;
      userClickedPattern.push(userChosenColour);
      $(`#${userChosenColour}`).on("click", playSound(userChosenColour));
      animatePress(userChosenColour);

      if (compareSequence()) {
        if (initialLevelClickHandler === level) {
          updateUI(`Level ${level}`, "Nice job! Next level is coming...");
          setTimeout(() => {
            nextSequence();
            showGamingPattern();
            updateUI(`Level ${level}`);
            level++;
            userClickedPattern = [];
            initialLevelClickHandler = 1;
            step = 0;
            updateUI(`Level ${level}`);
          }, 3000);
        } else {
          initialLevelClickHandler++;
          step++;
          updateUI(`Level ${level}`);
        }
      } else {
        gameOver();
        startingGame();
        gameStarted = false;
      }
    }
  });
}

//Compares between game sequence against user sequence.

function compareSequence() {
  let compareResult = true;
  for (let i = 0; i < userClickedPattern.length; i++) {
    /* console.log(
      `#${i}:gamePattern: ${gamePattern[i]}  / userClickedPattern: ${userClickedPattern[i]}`
    ); */
    if (gamePattern[i] !== userClickedPattern[i]) {
      compareResult = false;
      break;
    } else {
      compareResult = true;
    }
  }
  return compareResult;
}

//Game over handler
function gameOver() {
  updateUI("Restart", "GAME OVER!");
  playSound("wrong");
  gameStarted = false;
}

//Add animation to the user clicks.
function animatePress(currentColour) {
  $(`#${currentColour}`).addClass("pressed");
  setTimeout(() => $(`#${currentColour}`).removeClass("pressed"), 100);
}

clickHandler();
