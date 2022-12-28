window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); //Gets all elements with the class "size"
    for (var i = 0; i < sizeArray.length; i++) { 
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        } //Goes through sizeArray to find the checked value and outputs it to selectedSize
    }
    //Sets prices for each size with sizeTotal
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; //Adds number from sizeTotal to runningTotal
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //These variables will get passed on to each function
    getTopping(runningTotal, text1);
}
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings"); //Gets all elements with the class "toppings"
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        } //Goes through toppingArray to find checked values and outputs them to selectedTopping
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    //If there is more than 1 topping selected, take away one from toppingTotal for the discount
    } else {
        toppingTotal = 0; //Otherwise, the toppingTotal for 1 or 0 toppings is 0 (meaning no charge)
    }
    runningTotal = (runningTotal + toppingTotal); //Adds the toppingTotal to the runningTotal
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;  //Outputs the pizza size and list of toppings to "showText"
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>"; //Outputs the final price to "totalPrice"
}