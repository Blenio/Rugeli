function checkButton() {
  var x = document.getElementById("loesung").value;
  document.getElementById("hint").innerHTML = x;
}

function checkDate() {
  var myDay = new Date().getDate(); 
  
  document.getElementById("debug").innerHTML = "myDay: " + myDay;
  
  switch(myDay) {
    case 02:
        document.getElementById("puzzle").innerHTML = "Text Puzzle 02";
        break;
    case 04:
        document.getElementById("puzzle").innerHTML = "Text Puzzle 04";
        break;
    case 16:
        document.getElementById("puzzle").innerHTML = "Text Puzzle 16";
        break;
    default:
        text = "Kein Rätseltag..." + myDay;
    }
}

