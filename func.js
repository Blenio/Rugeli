var myDay = new Date().getDate();
var thePuzzle = "..."; //Rätsel
var theHint = "..."; //Tipp
var theSolution = "..."; //Lösung
var thePresent = "..."; //Versteck

// Button Hint
function checkHint() {
  var result = confirm("Sicher? :-)");
  if (result) {
    document.getElementById("buttonHint").style.display = 'none';
    document.getElementById("theHint").innerHTML = theHint;
  }
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
    case 18:
      thePuzzle = "Rätsel 02:<br>.Zahlen drei suchen Wir<br>---<br>Tag 5.: Morgen wurde es & Abend wurde es...";
      theHint = "Aus einem sehr erfolgreiches Buch";
      theSolution = "123";
      thePresent = "Das Geschenk ist unter der Türmatte";
      break;
    case 4:
      thePuzzle = "Rätsel 4";
      theHint = "Hint 4";
      theSolution = "b";
      thePresent = "Das Geschenk ist 4";
      break;
    case 6:
      thePuzzle = "Rätsel 4";
      theHint = "Hint 4";
      theSolution = "b";
      thePresent = "Das Geschenk ist 4";
      break;
    case 8:
      thePuzzle = "Rätsel 4";
      theHint = "Hint 4";
      theSolution = "b";
      thePresent = "Das Geschenk ist 4";
      break;
    case 10:
      thePuzzle = "Rätsel 4";
      theHint = "Hint 4";
      theSolution = "b";
      thePresent = "Das Geschenk ist 4";
      break;
    case 12:
      thePuzzle = "Rätsel 4";
      theHint = "Hint 4";
      theSolution = "b";
      thePresent = "Das Geschenk ist 4";
      break;
    case 14:
      thePuzzle = "Rätsel 4";
      theHint = "Hint 4";
      theSolution = "b";
      thePresent = "Das Geschenk ist 4";
      break;    
    case 16:
      thePuzzle = "Rätsel 4";
      theHint = "Hint 4";
      theSolution = "b";
      thePresent = "Das Geschenk ist 4";
      break;
    case 18:
      thePuzzle = "Rätsel 4";
      theHint = "Hint 4";
      theSolution = "b";
      thePresent = "Das Geschenk ist 4";
      break;
    case 20:
      thePuzzle = "Rätsel 4";
      theHint = "Hint 4";
      theSolution = "b";
      thePresent = "Das Geschenk ist 4";
      break;      
    case 22:
      thePuzzle = "Rätsel 17"; 
      theHint = "Hint 17";
      theSolution = "c";
      thePresent = "Das Geschenk ist 17";
      break;
    case 24:
      thePuzzle = "Rätsel 17"; 
      theHint = "Hint 17";
      theSolution = "c";
      thePresent = "Das Geschenk ist 17";
      break;      
    default:
      thePuzzle = "Leider kein Rätseltag heute...<br>";
      theHint = "";
      theSolution = "";
      thePresent = "";
      document.getElementById("container").style.display = 'none';
      document.getElementById("debug").innerHTML = thePuzzle;
      break;
    }
    document.getElementById("puzzle").innerHTML = thePuzzle;
}
