var randomNumber1 = Math.ceil(Math.random()*6 );
var url1 = `./images/dice${randomNumber1}.png`;
document.querySelector(".img1").setAttribute("src",url1);

var randomNumber2 = Math.ceil(Math.random()*6 );
var url2 = `./images/dice${randomNumber2}.png`;
document.querySelector(".img2").setAttribute("src",url2);

var winner="Refresh Me";
if(randomNumber1 > randomNumber2){
    winner = "🚩Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    winner = "Player 2 Wins!🚩";
}
 else(
    winner = "Draw"
 )

 document.querySelector("h1").innerHTML = winner;