var myDay = new Date().getDate();
var thePuzzle = "..."; //Rätsel
var theHint = "..."; //Tipp
var theSolution = "..."; //Lösung
var thePresent = "..."; //Versteck

// Button Hint
function checkHint() {
  document.getElementById("buttonHint").style.display = 'none';
  document.getElementById("theHint").innerHTML = theHint;
}

// Button Check
function checkButton() {
  var x = document.getElementById("loesung").value;
  var present = "";
  
  if (x == theSolution) {
      present = "Bravo !! -> " + thePresent;
  } else {
      present = "Das ist leider falsch...";  
  }
  //Set hint (Versteck)
  document.getElementById("present").innerHTML = present;
}

// Set vars
function checkDate() {
  
  //vor 12, blende Hint-Sektion aus
  var h = new Date().getHours();
  if (h < 12) {
      document.getElementById("hint").style.display = 'none';
   }
  
  switch(myDay) {
    case 2:
      thePuzzle = "Rätsel 2";
      theHint = "Hint 2";
      theSolution = "a";
      thePresent = "Das Geschenk ist 2";
      break;
    case 4:
      thePuzzle = "Rätsel 4";
      theHint = "Hint 4";
      theSolution = "b";
      thePresent = "Das Geschenk ist 4";
      break;
    case 17:
      thePuzzle = "Rätsel 17"; 
      theHint = "Hint 17";
      theSolution = "c";
      thePresent = "Das Geschenk ist 17";
      break;
    default:
      thePuzzle = "Leider kein Rätseltag heute...";
      theHint = "";
      theSolution = "";
      thePresent = "";
      document.getElementById("container").style.display = 'none';
      document.getElementById("debug").innerHTML = thePuzzle;
      break;
    }
    document.getElementById("puzzle").innerHTML = thePuzzle;
}
