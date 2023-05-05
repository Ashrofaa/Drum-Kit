// Adding an event listener to each of the drum buttons
// The event is a function that wil determine which drum box was clicked
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        handleAction(this.textContent);
        addAnimation(this.textContent);
    });
}

// Adding an event listener to keyboard presses
// The event is a function that wil return the keyboard button that was pressed
document.addEventListener("keydown", function(event) {
    handleAction(event["key"]);
    addAnimation(event["key"]); 
});


// The main function that will act upon the output of the press/click
function handleAction(buttonText) {

    switch (buttonText) {
        case "w":
            var drumSound = new Audio("sounds/tom-1.mp3");
            console.log(drumSound.duration);
            drumSound.play();
        break;

        case "a":
            var drumSound = new Audio("sounds/tom-2.mp3");
            drumSound.play();
        break;

        case "s":
            var drumSound = new Audio("sounds/tom-3.mp3");
            drumSound.play();
        break;

        case "d":
            var drumSound = new Audio("sounds/tom-4.mp3");
            drumSound.play();
        break;

        case "l":
            var drumSound = new Audio("sounds/crash.mp3");
            drumSound.play();
        break;

        case "j":
            var drumSound = new Audio("sounds/snare.mp3");
            drumSound.play();
        break;

        case "k":
            var drumSound = new Audio("sounds/kick-bass.mp3");
            drumSound.play();
        break;
    }
}



// This function adds a bit of animation to the active button
function addAnimation(buttonText) {
    var activeButton = document.querySelector("." + buttonText);

    activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed");}, 100);
}