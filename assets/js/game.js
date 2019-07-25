$(document).ready(function() {
    let wins = 0;
    let losses = 0;
    let randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    let cristalOneValue = Math.floor((Math.random() * 12) + 1);
    let cristalTwoValue = Math.floor((Math.random() * 12) + 1);
    let cristalThreeValue = Math.floor((Math.random() * 12) + 1);
    let cristalFourValue = Math.floor((Math.random() * 12) + 1);
    let userGuess = 0;

    console.log(cristalOneValue);
    console.log(cristalTwoValue);
    console.log(cristalThreeValue);
    console.log(cristalFourValue);
    console.log(userGuess);
    

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#random-num").text(randomNum);

    function newGame(){
        userGuess = 0;
        randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        cristalOneValue = Math.floor((Math.random() * 12) + 1);
        cristalTwoValue = Math.floor((Math.random() * 12) + 1);
        cristalThreeValue = Math.floor((Math.random() * 12) + 1);
        cristalFourValue = Math.floor((Math.random() * 12) + 1);
        $("#random-num").text(randomNum);
        $("#score span").text(userGuess);
        console.log(cristalOneValue);
        console.log(cristalTwoValue);
        console.log(cristalThreeValue);
        console.log(cristalFourValue);
        console.log(userGuess);
    }


    function points(){
        if(userGuess === randomNum ){
            wins++;
            $("#wins").text(wins);
            $("#status-message").append(`<h6>YOU WON!</h6>`)
            $("#status-message").append(`<p>Play again, you have new number!</p>`)
            newGame();
            
        } else if(userGuess > randomNum ){
            losses++;
            $("#losses").text(losses);
            $("#status-message").append(`<h6>Ups! Sorry dude!</h6>`)
            $("#status-message").append(`<button type="button" class="btn btn-outline-danger">Click me for a new number!</button>`)
            $(".btn" ).click(function() {
                newGame();
                $("#status-message").empty();
            });
        }
    }

    $("#cristal-1" ).click(function() {
            userGuess = userGuess + cristalOneValue;
            $("#score span").text(userGuess);
            console.log("User Guess:" + userGuess);
            points();
  
    });
    $("#cristal-2" ).click(function() {
            userGuess = userGuess + cristalTwoValue;
            $("#score span").text(userGuess);
            console.log("User Guess:" + userGuess);
            points();
   
    });
    $("#cristal-3" ).click(function() {
            userGuess = userGuess + cristalThreeValue;
            $("#score span").text(userGuess);
            console.log("User Guess:" + userGuess);
            points();
  
    });
    $("#cristal-4" ).click(function() {
            userGuess = userGuess + cristalFourValue;
            $("#score span").text(userGuess);
            console.log("User Guess:" + userGuess);
            points();
    });
    

    
    
    //game();

});