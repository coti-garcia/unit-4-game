$(document).ready(function() {
    let wins = 0;
    let losses = 0;
    let randomNum = Math.floor(Math.random() * 100);
    let cristalOneValue = Math.floor(Math.random() * 10);
    let cristalTwoValue = Math.floor(Math.random() * 10);
    let cristalThreeValue = Math.floor(Math.random() * 10);
    let cristalFourValue = Math.floor(Math.random() * 10);
    let userGuess = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#random-num").text(randomNum);
    
});