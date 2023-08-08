var buttonColours = ["red", "blue", "green", "yellow"];
var gamepattern = [];
var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamepattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}
nextSequence();

$(".btn").click(function (event) {
  var userChosenColour = event.currentTarget.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
});

function playSound(name) {
  switch (name) {
    case "blue":
      var blue = new Audio("./sounds/blue.mp3");
      blue.play();
      break;
    case "green":
      var green = new Audio("./sounds/green.mp3");
      green.play();
      break;
    case "red":
      var red = new Audio("./sounds/red.mp3");
      red.play();
      break;
    case "yellow":
      var yellow = new Audio("./sounds/yellow.mp3");
      yellow.play();
      break;

    default:
      var wrong = new Audio("./sounds/wrong.mp3");
      wrong.play();
      break;
  }
}
