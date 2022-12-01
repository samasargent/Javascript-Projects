function myFunction() {
  var A = "This is what you get";    //Assigning text to variable A
  A += " when you connect two lines.";  //Adding more text to variable A
  document.getElementById("demo").style.color = "red";  //Text will change to color red
  document.getElementById("demo").innerHTML = A;    //The text from variable A will be shown
}

function myFunction2() {
  var B = "This is a continuation."; //Assigning text to variable B
  document.getElementById("demo2").style.color = "blue";  //Text will change to color blue
  document.getElementById("demo2").innerHTML = B;    //The text from variable B will be shown
  }