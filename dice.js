var diceContainer = document.querySelector(".dice-container");
var rollDiceButton = document.querySelector(".roll");
var numberOfDice = document.querySelector(".number-of-dice");
var minus = document.querySelector(".minus");
var plus = document.querySelector(".plus");


function getDotsNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    var numDice = parseInt(numberOfDice.innerHTML);
    var rolls = 7; // Number of rolls before landing on the final number
    var currentRoll = 0;

    var interval = setInterval(function() {
        if (currentRoll >= rolls) {
            clearInterval(interval);
            updateDiceWithFinalNumber(numDice);
        } else {
            updateDiceWithRandomNumbers(numDice);
            currentRoll++;
        }
    }, 150); // Adjust the interval duration as needed
}

function updateDiceWithRandomNumbers(numDice) {
    var diceHtml = "";
    for (var i = 0; i < numDice; i++) {
        var dotNumber = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
        var dotHtml = `<div class="dot ${dotNumber}">&nbsp;</div>`.repeat(dotNumber);
        diceHtml += `<div class="dice">${dotHtml}</div>`;
    }
    diceContainer.innerHTML = diceHtml;
}

function updateDiceWithFinalNumber(numDice) {
    var diceHtml = "";
    for (var i = 0; i < numDice; i++) {
        var dotNumber = getDotsNumber(); // Your original logic for getting the final number
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

