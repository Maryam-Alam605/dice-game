var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var image1 = "assets/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", image1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image2 = "assets/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", image2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
