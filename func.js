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
      thePuzzle = ".Zahlen drei suchen wir<br>---<br>Tag 5.: Morgen wurde es & Abend wurde es...";
      theHint = "Aus einem sehr, sehr erfolgreichen Buch";
      theSolution = "123";
      thePresent = "Das Geschenk ist unter einer Türmatte";
      break;
    case 4:
      thePuzzle = "x x _ x x x _ _ _ ist die weibliche Hauptrolle in welchem (dir bekannten) Film?<br>---<br>(28 657,  46 368,  75 025, 121 393) ";
      theHint = "Berühmter mathematischer Satz";
      theSolution = "shrek";
      thePresent = "Das Geschenk ist eine MASSAGE!!! :-)";
      break;
    case 6:
      thePuzzle = "chay' ngo' ali?";
      theHint = "Sprache aus StarTrek";
      theSolution = "74";
      thePresent = "Das Geschenk ist oben auf dem Kühlschrank";
      break;
    case 8:
      thePuzzle = "2 & 4. Buchstabe des Vornames des jüngeren Bruders des Ex von der Schwester von Mary Jo White-McCurdy";
      theHint = "Jamie White";
      theSolution = "ak";
      thePresent = "Das Geschenk ist in meiner Sockenschublade";
      break;
    case 10:
      thePuzzle = "Wer liebt: 48, 3C und 32?";
      theHint = "Hex-Code";
      theSolution = "marianne";
      thePresent = "Das Geschenk ist in einem Regenstiefel";
      break;
    case 12:
      thePuzzle = "GTX de Luxe GS<br>Frage: (5.) (-) (1. & 9.)";
      theHint = "Hägrid";
      theSolution = "evh";
      thePresent = "Das Geschenk ist im Altpapier";
      break;
    case 14:
      thePuzzle = "Wir suchen die Einwohnerzahl (Stand 2017) eines Landes, welches abstrakte Herzen liebt";
      theHint = "3 grüne Rauten";
      theSolution = "109897";
      thePresent = "Das Geschenk ist bei meinem Roller";
      break;    
    case 16:
      thePuzzle = "Translator sind wertvoll für Tipps";
      theHint = "Bekannte Übersetzerinnen noch mehr";
      theSolution = "tine";
      thePresent = "Du weisst nun also wen fragen :-)";
      break;
    case 18:
      thePuzzle = "Weisse Reklame-Tafel in NYC";
      theHint = "Poster";
      theSolution = "westsidestory";
      thePresent = "Das Geschenk ist im Schrimständer";
      break;
    case 20:
      thePuzzle = "Wir suchen eine 4-stellige Zahl. Was wäre, wenn uns jemand eine Postkarte vor 134.092.800 Sekunden schreiben wollte?";
      theHint = "(A)";
      theSolution = "6532";
      thePresent = "Das Geschenk ist unter Deiner Schreibtischmatte";
      break;      
    case 22:
      thePuzzle = "Was:Calciumcarbonat<br>Wo: Carpenters / Bitte Wuschu"; 
      theHint = "Wikipedia, 1. Modifikation der Natur / Song";
      theSolution = "8a7";
      thePresent = "Bringe ich nach Hause, wenn Du mir *Der Adler ist gelandet* per SMS schreibst";
      break;
    case 24:
      thePuzzle = "Double luck exists also between short months"; 
      theHint = "13";
      theSolution = "lilian";
      thePresent = "Das Geschenk ist unter einem Kopfkissen";
      break;      
    default:
      thePuzzle = "Leider kein Rätseltag heute...<br><br>";
      theHint = "";
      theSolution = "";
      thePresent = "";
      document.getElementById("container").style.display = 'none';
      document.getElementById("debug").innerHTML = thePuzzle;
      break;
    }
    document.getElementById("puzzle").innerHTML = thePuzzle;
}
