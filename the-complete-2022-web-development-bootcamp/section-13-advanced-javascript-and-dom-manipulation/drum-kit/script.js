//Defining the number of drum buttons in UI.
numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Setting addEventListener to ours drum buttons.
for (let i = 0; i < numberOfDrumButtons; i++) {
  const drumBtn = document
    .querySelectorAll(".drum")
    [i].addEventListener("click", () => alert("I got clicked!"));
}
