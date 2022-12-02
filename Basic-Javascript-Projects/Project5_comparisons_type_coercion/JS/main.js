document.write("What is negative four? ", typeof -4); 
//typeof checks what type "-4" is and displays that

function stringNumber() {
document.getElementById("stringNum").innerHTML = (20 + "10")  
} //writes 20 and "10" together (one is a number, the other is a string)

function equalFunction() {
  document.getElementById("testEqual").innerHTML = (10 == "10");
} //Checks if 10 is equal to "10"

function equalStrictFunction() {
  document.getElementById("testStrictEqual").innerHTML = (10 === "10");
} //Checks if 10 is strictly equal to "10"

function andFunction() {
  document.getElementById("testAnd").innerHTML = (12 > 4 && 5 < 3);
} //Checks if 12 is greater than 4 AND 5 is less than 3

function orFunction() {
  document.getElementById("testOr").innerHTML = (12 > 4 || 5 < 3);
} //Checks if 12 is greater than 4 OR 5 is less than 3

function notOrFunction() {
  document.getElementById("testNotOr").innerHTML = !(12 > 4 || 5 < 3);
} //Gives the opposite of the previous Or function