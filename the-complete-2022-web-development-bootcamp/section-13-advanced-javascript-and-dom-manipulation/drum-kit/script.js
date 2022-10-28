//Defining the number of drum buttons in UI.
numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Play audio based on key pressed.
function playSound(sound) {
  let audio = new Audio(`sounds/${sound}`);
  audio.play();
}

//Setting addEventListener to drum buttons.
for (let i = 0; i < numberOfDrumButtons; i++) {
  const drumBtn = document
    .querySelectorAll(".drum")
    [i].addEventListener("click", (e) => {
      /* switch (e.key) {
      alert(e.key);
      console.log(e.key);
        case "q":
          break;
        case "w":
          break;
        case "e":
          break;
        case "r":
          break;
        case "i":
          break;
        case "o":
          break;
        case "p":
          break;
      } */
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
