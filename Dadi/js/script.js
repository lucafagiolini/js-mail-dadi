/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


document.querySelector("#play-button").addEventListener("click", runGame);

function runGame() {
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

    else {
        winner.innerHTML = "Draw!";
        console.log("Draw!");
    }

    // clean dice
    document.querySelector("#player-dice i").classList.remove("fa-dice-one", "fa-dice-two", "fa-dice-three", "fa-dice-four", "fa-dice-five", "fa-dice-six");
    document.querySelector("#computer-dice i").classList.remove("fa-dice-one", "fa-dice-two", "fa-dice-three", "fa-dice-four", "fa-dice-five", "fa-dice-six");


    // PLAYER DICE 
    if (playerDice && computerDice === 1) {
        document.querySelector("#player-dice i").classList.add("fas", "fa-dice-one");
    }
    else if (playerDice === 2) {
        document.querySelector("#player-dice i").classList.add("fas", "fa-dice-two");
    }
    else if (playerDice === 3) {
        document.querySelector("#player-dice i").classList.add("fas", "fa-dice-three");
    }
    else if (playerDice === 4) {
        document.querySelector("#player-dice i").classList.add("fas", "fa-dice-four")
    }
    else if (playerDice === 5) {
        document.querySelector("#player-dice i").classList.add("fas", "fa-dice-five")
    }
    else if (playerDice === 6) {
        document.querySelector("#player-dice i ").classList.add("fas", "fa-dice-six")
    }
    // PLAYER DICE 

    // COMPUTER DICE
    if (computerDice === 1) {
        document.querySelector("#computer-dice i").classList.add("fas", "fa-dice-one");
    }
    else if (computerDice === 2) {
        document.querySelector("#computer-dice i").classList.add("fas", "fa-dice-two");
    }
    else if (computerDice === 3) {
        document.querySelector("#computer-dice i").classList.add("fas", "fa-dice-three");
    }
    else if (computerDice === 4) {
        document.querySelector("#computer-dice i").classList.add("fas", "fa-dice-four")
    }
    else if (computerDice === 5) {
        document.querySelector("#computer-dice i").classList.add("fas", "fa-dice-five")
    }
    else if (computerDice === 6) {
        document.querySelector("#computer-dice i").classList.add("fas", "fa-dice-six")
    }




}





