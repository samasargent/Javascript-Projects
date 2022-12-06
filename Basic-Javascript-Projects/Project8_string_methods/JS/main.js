function connectStatement() {
  var part1 = "This was a "; //Setting part1 to a fragment of a sentence
  var part2 = "split-up "; //Setting part2 to a fragment of a sentence
  var part3 = "statement that I wrote."; //Setting part3 to a fragment of a sentence
  var wholeStatement = part1.concat(part2, part3); //Concatenating part1, part2 and part3 to make one statement
  document.getElementById("Concatenate").innerHTML = wholeStatement; //Displaying the result of the previous step
}

function sliceMethod() {
  var Lyric = "Imagine all the people, living for today" //Setting variable Lyric 
  var Section = Lyric.slice(8, 22); //Slicing the characters between position 8 and 22
  document.getElementById("Slice").innerHTML = Section; //Displaying the result of the prior step
}

function stringMethod() {
  let num = 255; //Setting variable num to the number 255
  document.getElementById("stringNum").innerHTML = num.toString(); //Changing variable num (a number) to a string
}

function precisionMethod() {
  let X = 21513.31899334; //Setting variable X to a number
  document.getElementById("numPrecise").innerHTML = X.toPrecision(7); //Setting the number at X to 7 characters
}


