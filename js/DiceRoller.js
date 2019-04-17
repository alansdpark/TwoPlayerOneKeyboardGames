var totalNumber = 0; // Total count from all dice rolled.

$(document).ready(function() {
    var numberOfDice = 1; // Default number of dice.
    var singleDiceCounter = [$(".Dice-1"), $(".Dice-2"), $(".Dice-3"), $(".Dice-4"), $(".Dice-5")]; // Array of singular dice counters.
    var singleDiceCounterP = [$(".Dice-1p"), $(".Dice-2p"), $(".Dice-3p"), $(".Dice-4p"), $(".Dice-5p")]; // Array of p selectors inside singleDiceCounters.
    var typeOfDice = $("#exampleFormControlSelect2").val();
    var diceImages = [$(".Dice-1-img"), $(".Dice-2-img"), $(".Dice-3-img"), $(".Dice-4-img"), $(".Dice-5-img")];

    for (var i = 0; i < 5; i++) { // At start of page load, hide single dice counters and dice images.
        singleDiceCounter[i].hide();
        diceImages[i].hide();
    }

    $(".TotalValue").hide(); // Initially hides total dice number.

    $(".rollDice").click(function() { // Player clicked Roll Dice button.
        typeOfDice = $("#exampleFormControlSelect2").val();
        numberOfDice = $("#exampleFormControlSelect1").val();

        if (typeOfDice == "Numbers") {
            for (var i = 0; i < 5; i++) {
                diceImages[i].hide();
            }
            totalNumber = 0; // Resetting total number on every roll.

            for (var i = 0; i < 5; i++) {
              singleDiceCounter[i].hide(); // Hides all single dice counters initiailly.
            }

            $(".TotalValue").show();

            for (var i = 0; i < numberOfDice; i++) { // Only shows active single dice counters.
                singleDiceCounter[i].show();
                singleDiceCounterP[i].text(rollDice());
            }
        
            $(".DiceTotal").text(totalNumber);
        } else {
            // Hides all number-related dice.
            $(".TotalValue").hide();
            for (var i = 0; i < 5; i++) {
                singleDiceCounter[i].hide(); // Hides all single dice counters initiailly.
            }


            for (var i = 0; i < numberOfDice; i++) {
                diceImages[i].attr("src", rollDiceImg());
                diceImages[i].show();
            }
            if (numberOfDice < 5) {
                for (var i = numberOfDice; i < 5; i++) {
                    diceImages[i].hide();
                }
            }
        } 
    });
});

function rollDiceImg() {
    var imageToUse = Math.floor((Math.random() * 6) + 1);
    return "css/Dice/Dice-" + imageToUse + ".png";
}

function rollDice() {
    var count = Math.floor((Math.random() * 6) + 1);
    totalNumber += count; // Adding this roll to the total number.
    return count;
}