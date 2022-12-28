//Class Name Color Change
function changeColor() {
    const collection = document.getElementsByClassName("fruit");
    for (let i = 0; i < collection.length; i++) {
    collection[i].style.color = "#C133FF";
}
}

//Fruit Switch Pick
function fruitFunction() {
    var fruitOutput;
    var Fruits = document.getElementById("fruitInput").value;
    var fruitString = " is a great fruit!";
    switch (Fruits) {
        case "Banana":
            fruitOutput = "Banana" + fruitString;
            break;
        case "Apple":
            fruitOutput = "Apple" + fruitString;
            break;
        case "Orange":
            fruitOutput = "Orange" + fruitString;
            break; 
        case "Peach":
            fruitOutput = "Peach" + fruitString;
            break;
        case "Watermelon":
            fruitOutput = "Watermelon" + fruitString;
            break;
        case "Strawberry":
            fruitOutput = "Strawberry" + fruitString;
            break;
        default:
            fruitOutput = "Please enter a fruit exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = fruitOutput;
}

//Canvas
var c = document.getElementById("firstCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "cornflowerblue");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 300);

ctx.beginPath();
ctx.arc(250, 100, 75, 0, 2 * Math.PI);
ctx.stroke();

ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.font = "30px Arial";
ctx.strokeText("Hello World", 300, 250);
