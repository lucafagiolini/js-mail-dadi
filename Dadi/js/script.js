/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// 1. Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
let playerDice = Math.floor(Math.random() * 6) + 1;
console.log(playerDice + " playerDice");

let computerDice = Math.floor(Math.random() * 6) + 1;
console.log(computerDice + " computerDice");

// 2. Stabilire il vincitore, in base a chi fa il punteggio più alto.
let winner = document.getElementById("winner");

if (playerDice > computerDice) {
    winner.innerHTML = "Player Wins!";
    console.log("Player Wins!");
}
else if (playerDice < computerDice) {
    winner.innerHTML = "Computer Wins!";
    console.log("Computer Wins!");
}