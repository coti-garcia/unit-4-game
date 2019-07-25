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
    
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#random-num").text(randomNum);

    
    
});