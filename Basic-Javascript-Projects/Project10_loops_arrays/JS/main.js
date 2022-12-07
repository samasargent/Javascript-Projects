//While Loop
function whileLoop() {
  const colors = ["coral", "crimson", "khaki", "lavender", "fuchsia", "olive"]; //Creates an array
  let i = 0; //Sets up variable "i" and sets it to 0
  let text = ""; //Sets up variable "text" for text to be output to

  while (colors[i]) {
      text += colors[i] + "<br>";
      i++
    } //Creates a loop that continues as long as there is a value in the array that corresponds

  document.getElementById("loopWhile").innerHTML = text;
}

//For Loop
const fruits = ["banana", "apple", "pear", "strawberry", "kiwi", "orange", "peach", "mango", "watermelon"]; //Creates an array
var content = ""; //Sets up variable "content", for text to be output to 

function forLoop() {
  for (let i = 0; i < fruits.length; i++) {
    content += fruits[i] + "<br>";
  } //Creates a loop that goes through the "fruits" array as long as i is less than the length of the array
  //Outputs from "fruits" to content with space between
  document.getElementById("loopFor").innerHTML = content; //Outputs from "content" to the <p> tag with the id "Loop"
}

//Pet Let Description
function describePet() {
  let myPet = {
    name: "Gabe",
    breed: "American Shorthair",
    color: "gray",
    age: "4",
    description: function () {
      return `My cat is a ${this.age}-year-old ${this.color} ${this.breed}, named ${this.name}.`;
    } //Creates an object "myPet" with 4 properties and a method
  };
  document.getElementById("petObject").innerHTML = myPet.description(); //Outputs the result of the method to the <p> tag with the id "petObject"
}


