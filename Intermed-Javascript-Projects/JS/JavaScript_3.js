function displayType(font) {
    var fontType = font.getAttribute("data-font-type");
    alert(font.innerHTML + " is a " + fontType + "!");
}

function changeColor() {
    document.getElementById("head").style.color = "red";
}