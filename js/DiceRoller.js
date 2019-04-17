$(document).ready(function() {
    var numberOfDice = 1; // Default number of dice.

    $(".rollDice").click(function() {
        numberOfDice = $("#exampleFormControlSelect1").val();
        $(".DiceTotal").text(rollDice(numberOfDice));
    });


});

function rollDice(numOfDice) {
    var countNum = 0;
    for (var i = 0; i < numOfDice; i++) {
        countNum += Math.floor((Math.random() * 6) + 1);
    }
    return countNum;
}