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
    case 2:
      thePuzzle = "<b>Rätsel vom 2. Dezember:<b><br>.Zahlen drei suchen Wir<br>---<br>Tag 5.: Morgen wurde es & Abend wurde es...";
      theHint = "Aus einem sehr, sehr erfolgreichen Buch";
      theSolution = "123";
      thePresent = "Das Geschenk ist unter der Türmatte";
      break;
    case 18:
      thePuzzle = "<b>Rätsel vom 4. Dezember:<b><br>x x _ x x x _ _ _ ist die weibliche Hauptrolle in welchem (dir bekannten) Film?<br>---<br>(28 657,  46 368,  75 025, 121 393) ";
      theHint = "Berühmter mathematischer Satz";
      theSolution = "shrek";
      thePresent = "Das Geschenk ist oben auf unserem Schlafzimmerschrank";
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
