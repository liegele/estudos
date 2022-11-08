let gamePattern = [];
let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let randomNumber, randomChosenColour;
let level = 1;
let initialLevelClickHandler = 1;
let gameStarted = false;
let step = 0;
let index = 1;

function logger(msg) {
  /* console.log(`#${index} ${msg}`);
  console.log(`level: ${level}`);
  console.log(`InitialLevelClickHandler: ${initialLevelClickHandler}`);
  console.log(`gamePattern: ${gamePattern}`);
  console.log(`userClickedPattern: ${userClickedPattern}`);
  console.log(`------------------------------------`);
  index++; */
  /* console.log(``);
  console.log(``);
  console.log(``);
  console.log(``);
  console.log(``);
  console.log(``);
  console.log(``); */
}

//Starting game when 'A' key is pressed.
$("body").on("keydown", (e) => {
  if (e.key === "a" && gameStarted === false) {
    logger("pressing A");
    gameStarted = true;
    updateUI(`Level ${level}`, "Good luck!");
    gamePattern = [];
    nextSequence();
    showGamingPattern();
    setTimeout(() => {
      updateUI(`Level ${level}`);
    });
  }
});

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
  // updateUI(`Level ${level}`);
  // initialLevelClickHandler = 1;
  // showGamingPattern();
  logger("nextSequence");
}

//Running game pattern until actual level.
function showGamingPattern() {
  console.log(
    `inside showGamingPattern: Level: ${level} / Step: ${step} / (${initialLevelClickHandler} === ${level})`
  );
  if (initialLevelClickHandler === level) {
    gameStarted = false;
    gamePattern.forEach((element, index) => {
      setTimeout(() => {
        console.log(element);
        playAndEffectButton(element);
      }, index * 1000);
    });
    logger("showGamingPattern");
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
      console.log(initialLevelClickHandler, level);

      console.log(`compareSequence: ${compareSequence()}`);
      if (compareSequence()) {
        if (initialLevelClickHandler === level) {
          logger("clickHandler");
          console.log("+++++++++++++++++++++++++++++++");
          updateUI(`Level ${level}`, "Nice job! Creating new sequence...");
          setTimeout(() => {
            nextSequence();
            showGamingPattern();
            updateUI(`Level ${level}`);
            level++;
            console.log(gamePattern);
            console.log(userClickedPattern);
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
      }
    }
  });
}

//Compares between game sequence against user sequence.

function compareSequence() {
  logger("compareSequence");
  let compareResult = true;
  for (let i = 0; i < userClickedPattern.length; i++) {
    console.log(
      `#${i}:gamePattern: ${gamePattern[i]}  / userClickedPattern: ${userClickedPattern[i]}`
    );
    if (gamePattern[i] !== userClickedPattern[i]) {
      compareResult = false;
      break;
    } else {
      compareResult = true;
    }
  }
  return compareResult;
}

/* function compareSequence(actualLevel) {
  logger("compareSequence");
  if (gamePattern[level - 1] === userClickedPattern[level - 1]) {
    return true;
  } else {
    return false;
  }
} */

//Game over handler
function gameOver() {
  updateUI("GAME OVER!", "Best luck next time!");
  playSound("wrong");
  gameStarted = false;
}

//Add animation to the user clicks.
function animatePress(currentColour) {
  $(`#${currentColour}`).addClass("pressed");
  setTimeout(() => $(`#${currentColour}`).removeClass("pressed"), 100);
}

clickHandler();
