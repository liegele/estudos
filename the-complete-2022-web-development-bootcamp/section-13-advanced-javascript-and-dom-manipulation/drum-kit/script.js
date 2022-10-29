//Defining the number of drum buttons in UI.
numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Play audio based on key pressed.
function playSound(sound) {
  let audio = new Audio(`sounds/${sound}`);
  audio.play();
}

//Setting addEventListener to drum buttons.
for (let i = 0; i < numberOfDrumButtons; i++) {
  let drumBtn = document
    .querySelectorAll(".drum")
    [i].addEventListener("click", () => {
      drumBtn = document.querySelectorAll(".drum")[i].textContent;
      console.log(drumBtn);
      switch (drumBtn) {
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
    });
}

document.body.addEventListener("keypress", (e) => {
  switch (e.key) {
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
});

/* //Creating a Function Constructor (Factory)
function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
}

//Creating an object houseKeeper1 form function constructor
var houseKeeper1 = new HouseKeeper(12, 'Angela', ['Bathroon', 'Bedrooms', 'Lobby']);

console.log(houseKeeper1.name); */
