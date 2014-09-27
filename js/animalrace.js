$(document).ready(function(){


function Animal (name, speed, focus, nickname){
    this.name = name;
    this.speed = speed;
    this.focus = focus;
    this.nickname = nickname;
    this.hasWon = function(){return (this.position > 100);};
    this.isStillRacing = true;
    this.position = 0;
    this.isFocused = function () {
      return Math.floor(Math.random()*10) < this.focus;
    }
    this.advance = function() {
      if (this.isFocused()) {
        this.position += this.speed;

        $(this.nickname).animate({left: this.position*10},500);
        console.log(this.nickname);
        console.log(this.position);

        }
      }
    }
  
  var output = $('#header');
  var rabbit = new Animal ("Bugs", 5, 3,"#rabbit" );
  var turtle = new Animal ("Poky", 3, 7, "#turtle");
  var horse = new Animal ("Henry", 7, 6, "#horse");
  var dog = new Animal ("Bella", 6, 5, "#dog");
  var meters= 100;
    console.log("create animals");
  

  $(".myButton").click(function() {
    output.text("The Race has Started!");

  var raceFunction = setInterval(function(){

    rabbit.advance();
    turtle.advance();
    horse.advance();
    dog.advance();

  if(rabbit.position > meters || turtle.position > meters || horse.position > meters || dog.position > meters) {
    clearInterval(raceFunction);
  }; 

  },500);

    if(rabbit.hasWon() && turtle.hasWon() && horse.hasWon() && dog.hasWon()) {
        raceStatus = "It's a tie!";
        rabbit.isStillRacing = false; turtle.isStillRacing= false; horse.isStillRacing = false; dog.isStillRacing = false;

      } else if (rabbit.hasWon()) {
          output.text("Bugs has won the race!  Congratulations!");
          rabbit.isStillRacing = false;

      } else if (turtle.hasWon()) {
          output.text("Poky has won the race! Congratulations! ");
          turtle.isStillRacing = false;
      } else if (horse.hasWon()) {
          output.text("Henry has won the race! Congratulations!");
          horse.isStillRacing = false;
      } else if (dog.hasWon()) {
          output.text("Bella has won the race! Congratulations! ");
          dog.isStillRacing = false
      }
  })
});
  
    

 

