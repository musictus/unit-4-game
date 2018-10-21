$(document).ready(function() {

// --- Vars ---------------------------------------------------
var win_counter = 0;
var loss_counter = 0;

var master = 0;
var crystal_counter = 0;
var crystalArray = [];


// --- Functions ---------------------------------------------------
 
    // - generate a random master number
    // - master number should range btw 19-120
    // - show the master number in html
    function gameStart() {
        master = 0;
        crystal_counter = 0;
        crystalArray = [];

        var master_random_number = Math.floor(Math.random() * 120) + 19;
        master += master_random_number;

        $("h2.master-number").text(master_random_number);
        $("h2.sum-number").text(crystal_counter);
    };

    // - randomize 4 different numbers
    // - each number should range btw 1-12
    // - assign each number to each crystal
    function crystalFunction() {

        for (var i = 1; i < 5; i++) {
            crystalArray.push(Math.floor(Math.random() * 12) + 1);
        }
        console.log(crystalArray);

        $( ".image-crystal1" ).on ("click", function() {
            crystal_counter += crystalArray[0];
            $("h2.sum-number").text(crystal_counter);
            console.log(crystal_counter);
            gameOver()
        });
        $( ".image-crystal2" ).on ("click", function() {
            crystal_counter += crystalArray[1];
            $("h2.sum-number").text(crystal_counter);
            console.log(crystal_counter);
            gameOver()
        });
        $( ".image-crystal3" ).on ("click", function() {
            crystal_counter += crystalArray[2];
            $("h2.sum-number").text(crystal_counter);
            console.log(crystal_counter);
            gameOver()
        });
        $( ".image-crystal4" ).on ("click", function() {
            crystal_counter += crystalArray[3];
            $("h2.sum-number").text(crystal_counter);
            console.log(crystal_counter);
            gameOver()
        });
    };

    // - if the sum of numbers equals to the master number, YOU WIN
    // - if the sum of numbers exceeds the master nuber, YOU LOSE
    function gameOver() {
        if (master > 1 && master === crystal_counter) {
            win_counter++;
            $("span.wins").text(win_counter);
            alert("YOU WIN!!");
            reset()
        }
        else if (crystal_counter > master) {
            loss_counter++;
            $("span.losses").text(loss_counter);
            alert("YOU LOSE!!");
            reset()
        }
    };
    
    // - update the total `win` and `losses` 
    // - game resets, except the score board
    function reset() {
        var master = 0;
        var crystal_counter = 0;
        var crystalArray = [];
        $("h2.sum-number").text(crystal_counter);
        gameStart();
        crystalFunction();
    };
 
// --- Run ---------------------------------------------------
    gameStart();
    crystalFunction();
    console.log(master);
    console.log(crystal_counter);

});