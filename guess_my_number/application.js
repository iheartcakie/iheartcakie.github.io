$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var compGuess= Math.floor(Math.random()*100);
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    //save their guess as a variable
    var guess= $('input').val();
     //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    if (compGuess === guess){
      alert("You have won!");
    }
    if (compGuess > guess){
      alert("Guess lower")
      }
    if (compGuess < guess){
      alert("Guess higher")
    }
  });
});
