let gamePattern = [];
let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let randomNumber, randomChosenColour;
let level = 1;
let gameStarted = false;

//Starting game when 'A' key is pressed.
$("body").on("keydown", (e) => {
  if (e.key === "a" && gameStarted === false) {
    gameStarted = true;
    updateUI(`Level ${level}`);
    gamePattern = [];
    nextSequence();
  }
});

//Update the user interface.
function updateUI(message) {
  $("#level-title").text(message);
}

//function to block execution of JS.
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//Function to keep the sequence of colours/sounds.
async function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  /*  gamePattern.forEach((element) => {
    setTimeout(() => {
      $(`#${element}`).delay().fadeOut().fadeIn();
      playSound(element);
    }, 1000);
  }); */

  /* gamePattern.forEach(() => {
    new Promise((resolve) => {
      resolve(setTimeout(() => {}, 1000));
    }).then((element) => {
      setTimeout(() => {
        $(`#${element}`).delay(100).fadeOut().fadeIn();
        playSound(element);
        console.log(element);
      }, 0);
    });
  });
 */
  for (const value of gamePattern) {
    $(`#${value}`).delay().fadeOut().fadeIn();
    playSound(value);
    sleep(2000);
  }

  /* gamePattern.forEach(() => {
    new Promise((resolve) => {
      resolve(setTimeout(() => {}, 1000));
    }).then((element) => {
      $(`#${element}`).delay(100).fadeOut().fadeIn();
      playSound(element);
    });
  }); */

  updateUI(`Level ${level}`);
  level++;
}

//Running game pattern for actual level.
function runningGamingPattern() {}

//Playing a sound for chosen colour.
function playSound(whichColour) {
  let audio = new Audio(`sounds/${whichColour}.mp3`);
  audio.addEventListener("canplaythrough", (e) => {
    audio.play();
  });
}

//Detecting when a button is clicked, but with event delegation (DIV <- DIV <- BUTTON).
function clickHandler() {
  $(".container").on("click", (e) => {
    if (e.target.tagName === "BUTTON" && gameStarted === true) {
      let userChosenColour = e.target.id;
      userClickedPattern.push(userChosenColour);
      $(`#${userChosenColour}`).on("click", playSound(userChosenColour));
      animatePress(userChosenColour);
      // setInterval(() => updateUI("I'm thinking..."), 2000);
      // setTimeout(() => {
      //   updateUI(`Level ${level}`);
      //   nextSequence();
      // }, 3000);
      updateUI(`Level ${level}`);
      nextSequence();

      console.log(gamePattern);
      console.log(userClickedPattern);
    }
  });
}

//Add animation to the user clicks.
function animatePress(currentColour) {
  $(`#${currentColour}`).addClass("pressed");
  setTimeout(() => $(`#${currentColour}`).removeClass("pressed"), 100);
}

clickHandler();

/* const myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML API.
  setTimeout(() => {
    resolve("Success!"); // Yay! Everything went well!
  }, 10000);
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log(`Yay! ${successMessage}`);
}); */
