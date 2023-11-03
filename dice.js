var dice = document.querySelectorAll(".dice");
var rollDiceButton = document.querySelector(".roll");


function getDotsNumber(){
    return Math.floor(Math.random() * 6) + 1;
}
function rollDice(){
    for(var i = 0; i < dice.length; i++){
        var dotNumber = getDotsNumber();
        var dotHtml = `<div class="dot ${dotNumber}">&nbsp;</div>`.repeat(dotNumber);
        dice[i].innerHTML = dotHtml;
    }
}
dice.forEach(function(dice){
    dice.addEventListener("click", function(){
        rollDice();
    });
});
rollDiceButton.addEventListener("click", function(){
    rollDice();
})