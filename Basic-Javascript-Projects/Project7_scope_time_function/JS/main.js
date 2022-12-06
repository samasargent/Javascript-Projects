let x = 15; //Setting global variable x to 15

function compareFunction() {
  let y = 10; //Setting local variable y to 10
  var answer; //Creating variable 'answer' to use later
  if (x > y) { //Checking if X is greater than Y
    answer = "X is the greater number."; //If X is greater, this message displays
  } 
  else {
    answer = "Y is the greater number."; //If Y is greater, this message displays
  }
  document.getElementById("compare").innerHTML = answer; //Sends the message to display to the "compare" element
}

function addNumbers1() {
  console.log(10 + y); //In console, show 10 + y (y is not defined)
}

addNumbers1(); //Run addNumbers1 function

function timeFunction() {
  var Time = new Date().getHours(); //Setting variable Time to get current hour
  var Reply; //Creating variable Reply
  if (Time < 12 == Time > 0) { //Checking if time is less than 12 and greater than 0
    Reply = "It is morning time!"; //If so, Reply variable equals this message
  }
  else if (Time >= 12 == Time < 18) { //Checking if time is greater than 12 and less than 18
    Reply = "It is afternoon!"; //If so, Reply variable equals this message
  }
  else {
    Reply = "It is evening time."; //If time does not match the statements before, then display this message
  }
  document.getElementById("timeOfDay").innerHTML = Reply; //Sets "timeOfDay" element to show Reply message
}