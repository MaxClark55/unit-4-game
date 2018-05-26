
$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)    // random number 19-120
 
    $('#randomNumber').text(Random);

    var Gem1= Math.floor(Math.random()*11+1)
    var Gem2= Math.floor(Math.random()*11+1)    // random number 1-12
    var Gem3= Math.floor(Math.random()*11+1)
    var Gem4= Math.floor(Math.random()*11+1)
   
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  function reset(){

        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        Gem1= Math.floor(Math.random()*11+1);
        Gem2= Math.floor(Math.random()*11+1);
        Gem3= Math.floor(Math.random()*11+1);
        Gem4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 

  function win(){
  alert("You win!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
 
  function lose(){
  alert ("You lost!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }


  // Click Gems

    $('#one').on ('click', function(){
      userTotal = userTotal + Gem1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
           
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + Gem2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + Gem3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
 
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + Gem4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          }
    });   
  }); 