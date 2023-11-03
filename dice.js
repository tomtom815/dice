var diceContainer = document.querySelector(".dice-container");
var rollDiceButton = document.querySelector(".roll");
var numberOfDice = document.querySelector(".number-of-dice");
var minus = document.querySelector(".minus");
var plus = document.querySelector(".plus");


function getDotsNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    var diceHtml = "";
    var numDice = parseInt(numberOfDice.innerHTML);
    for (var i = 0; i < numDice; i++) {
        var dotNumber = getDotsNumber();
        var dotHtml = `<div class="dot ${dotNumber}">&nbsp;</div>`.repeat(dotNumber);
        diceHtml += `<div class="dice">${dotHtml}</div>`;
    }
    diceContainer.innerHTML = diceHtml;
}

function decreaseDice() {
    var currentNumber = parseInt(numberOfDice.innerHTML);
    if (currentNumber > 1) {
        currentNumber--;
        numberOfDice.innerHTML = currentNumber;
    }
    rollDice();
}

function increaseDice() {
    var currentNumber = parseInt(numberOfDice.innerHTML);
    if (currentNumber < 6) {
        currentNumber++;
        numberOfDice.innerHTML = currentNumber;
    }
    rollDice();
}

rollDiceButton.addEventListener("click", function () {
    rollDice();
});

minus.addEventListener("click", function () {
    decreaseDice();
});

plus.addEventListener("click", function () {
    increaseDice();
});

diceContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("dice")) {
        rollDice();
    }
});
window.addEventListener("shake", function(){
    rollDice();
});
