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
    }
    if (compGuess > guess){
      }
    if (compGuess < guess){
    }
      //what happens if the guess is correct?
      
    //if the user guessed too high...
    
      //update the 'feedback' paragraph to tell them to guess lower
      
    //otherwise, the user guessed too low...
    
      //update the 'feedback' paragraph to tell them to guess higher
  });
});
