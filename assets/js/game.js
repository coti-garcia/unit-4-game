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

    $("#cristal-1" ).click(function() {
            userGuess = userGuess + cristalOneValue;
            $("#score span").text(userGuess);
            console.log("User Guess:" + userGuess);
    });
    $("#cristal-2" ).click(function() {
            userGuess = userGuess + cristalTwoValue;
            $("#score span").text(userGuess);
            console.log("User Guess:" + userGuess);
    });
    $("#cristal-3" ).click(function() {
            userGuess = userGuess + cristalThreeValue;
            $("#score span").text(userGuess);
            console.log("User Guess:" + userGuess);
    });
    $("#cristal-4" ).click(function() {
            userGuess = userGuess + cristalFourValue;
            $("#score span").text(userGuess);
            console.log("User Guess:" + userGuess);
    });
    
    
    //game();

});