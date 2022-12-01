function myDictionary() {
  var Animal = {
    Species: "Cat",
    Color: "Gray",
    Breed: "Shorthair",
    Sound: "Meow...",
  }; //Created variable Animal with 4 KVPs
  delete Animal.Sound; //deleting the Sound KVP from variable Animal
  document.getElementById("Dictionary").innerHTML = Animal.Sound; //Outputing Sound from Animal to id "Dictionary"
}