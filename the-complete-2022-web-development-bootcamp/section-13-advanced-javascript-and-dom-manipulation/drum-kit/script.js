//Defining the number of drum buttons in UI.
numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Play audio based on key pressed.
function playSound(sound) {
  let audio = new Audio(`sounds/${sound}`);
  audio.play();
}

//Function to define which key or click was executed to order a sound.
function whatSoundExecute(itemPressed) {
  switch (itemPressed) {
    case "q":
      playSound("tom-1.mp3");
      break;
    case "w":
      playSound("tom-2.mp3");
      break;
    case "e":
      playSound("tom-3.mp3");
      break;
    case "r":
      playSound("kick-bass.mp3");
      break;
    case "i":
      playSound("tom-4.mp3");
      break;
    case "o":
      playSound("snare.mp3");
      break;
    case "p":
      playSound("crash.mp3");
      break;
  }
}

//Setting addEventListener to drum buttons.
for (let i = 0; i < numberOfDrumButtons; i++) {
  let drumBtn = document
    .querySelectorAll(".drum")
    [i].addEventListener("click", () => {
      drumBtn = document.querySelectorAll(".drum")[i].textContent;
      console.log(drumBtn);
      whatSoundExecute(drumBtn);
      btnAnimation(drumBtn);
      //setTimeout(btnAnimation(drumBtn), 10000);
    });
}

//Setting an eventListener to which key is pressed in order to play a sound.
document.body.addEventListener("keydown", (e) => {
  whatSoundExecute(e.key);
  btnAnimation(e.key);
});

document.body.addEventListener("keyup", (e) => {
  btnAnimation(e.key);
});

//Creating a Function Constructor (Factory)
function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function () {
    console.log("Cleaning in progress...");
  };
}

//Function to handle animations when some event is trigged.
function btnAnimation(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}-drum`);
  activeButton.classList.add("pressed");
  setTimeout(() => activeButton.classList.remove("pressed"), 150);
}

// OFF-TOPIC

//Creating an object houseKeeper1 form function constructor
var houseKeeper1 = new HouseKeeper(12, "Angela", [
  "Bathroon",
  "Bedrooms",
  "Lobby",
]);

console.log(houseKeeper1.name);
houseKeeper1.clean();
