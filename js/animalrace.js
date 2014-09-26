$(document).ready(function(){


function Animal (name, speed, focus){
    this.name = name;
    this.speed = speed;
    this.focus = focus;
    this.hasWon = function(){return (this.position > 100);};
    this.isStillRacing = true;
    this.position = 0;
    this.isFocused = function () {
      return Math.floor(Math.random()*10) < this.focus;
    }
    this.advance = function() {
      if (this.isFocused()) {
        this.position += this.speed;

        $("#Bugs").animate("left", this.position)
        console.log(this.postion);

        }
      }
    }
  //$("#Bugs")
  
  var rabbit = new Animal ("Bugs", 8, 3);
  var turtle = new Animal ("Poky", 3, 7);
  var horse = new Animal ("Henry", 2, 9);
  var dog = new Animal ("Bella", 4, 5);
  var meters= 100;
  

  $("#myButton").click(function() {
    alert("button clicked");

  if (rabbit.position < meters && turtle.position < meters && horse.position < meters && dog.position < meters) {

    rabbit.advance();
    turtle.advance();
    horse.advance();
    dog.advance();

  } else {

   

      if(rabbit.hasWon() && turtle.hasWon() && horse.hasWon() && dog.hasWon()) {
        raceStatus = "It's a tie!";
        rabbit.isStillRacing = false; turtle.isStillRacing= false; horse.isStillRacing = false; dog.isStillRacing = false;

      } else if (rabbit.hasWon()) {
          raceStatus = alert("Bugs has won the race!  Congratulations!");
          rabbit.isStillRacing = false;

      } else if (turtle.hasWon()) {
          raceStatus = alert("Poky has won the race! Congratulations! ");
          turtle.isStillRacing = false;
      } else if (horse.hasWon()) {
          raceStatus = alert("Henry has won the race! Congratulations!");
          horse.isStillRacing = false;
      } else if (dog.hasWon()) {
          raceStatus = alert("Bella has won the race! Congratulations! ");
          dog.isStillRacing = false;

      
    }
    
      $("#myButton").html("")("<br>And the winner is:<p> + winner + !</p><br>")
    
    
    
  
    }
  })
});
  
    

 

