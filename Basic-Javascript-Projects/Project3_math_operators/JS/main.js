function addFunction() {
  var addition = 1 + 1;
  document.getElementById("Math-add").innerHTML = "1 + 1 = " + addition;
} //Adds 1 to 1 and gives the answer

function subFunction() {
  var subtraction = 7 - 3;
  document.getElementById("Math-sub").innerHTML = "7 - 3 = " + subtraction;
} //Subtracts 3 from 7 and gives the answer

function multFunction() {
  var multiplication = 7 * 5;
  document.getElementById("Math-mult").innerHTML = "7 * 5 = " + multiplication;
} //Multiplies 7 by 5 and gives the answer

function divFunction() {
  var division = 48 / 6;
  document.getElementById("Math-div").innerHTML = "48 / 6 = " + division;
} //Divides 48 by 6 and gives the answer

function modulus() {
  var simpleMath = 25 % 6;
  document.getElementById("Math-mod").innerHTML = "When you divide 25 by 6, you have a remainder of " + simpleMath;
} //Finds the remainder of 25 divided by 6, which is 1

function makeMore() {
  var A = 10;
  A++;
  document.getElementById("Math-plus").innerHTML = A;
} //Assigns A the value 10 and then adds 1 to it

function makeLess() {
  var B = 10; 
  B--;
  document.getElementById("Math-minus").innerHTML = B;
} //Assigns B the value 10 and then subtracts 1 from it

function random() {
  document.getElementById("Math-random").innerHTML = Math.floor((Math.random() * 100));
} //Generates a random integer between 0 and 100