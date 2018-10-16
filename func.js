function myFunction() {
  var x = document.getElementById("02Text").value;
  document.getElementById("result").innerHTML = x;
}

var date = new Date().getDate(); 
if (date == 16) {
    document.getElementById("result").innerHTML = "Good day 16.10";
}
