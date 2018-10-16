function checkButton() {
  var x = document.getElementById("02Text").value;
  document.getElementById("result").innerHTML = x;
}

function checkDate() {
  var dateToday = new Date().getDate(); 
  if (dateToday == 16) {
      document.getElementById("result").innerHTML = "Good day 16.10";
  }
}

