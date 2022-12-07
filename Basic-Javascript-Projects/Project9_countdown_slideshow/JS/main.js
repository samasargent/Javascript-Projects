// SLIDESHOW 

let slideIndex = 1; 
showSlides(slideIndex); //Sets up slideshow to display img01 first

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n); //Sets up function to change what slide is displayed based on the number
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n); //Sets up function to display with dots which image is active
}

function showSlides(n) {
  let i; 
  let slides = document.getElementsByClassName("mySlides"); //Sets variable "slides" to the class of the slides in the HTML
  let dots = document.getElementsByClassName("dot"); //Sets variable "dots" to the class of the dots in the HTML
  if (n > slides.length) { slideIndex = 1 } //If "n" is greater than number of slides, go to first slide
  if (n < 1) { slideIndex = slides.length } //Sets up protocol for going back through the slides
  for (i = 0; i < slides.length; i++) { //For loop going through slides and setting them to "none" (as they are not the active slide)
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); //For loop going through dots and removing "active" (as they are not the active dot)
  }
  slides[slideIndex - 1].style.display = "block"; //Changes active slide display to "block" so it is visible
  dots[slideIndex - 1].className += " active"; //Adds "active" to the dot for the image, making it dark gray
}

//END SLIDESHOW

//COUNTDOWN

function countdown() {
  var Seconds = document.getElementById("Seconds").value; //Gets "Seconds" variable from the input on the page

  function tick() {
    Seconds = Seconds - 1;  //Sets up Seconds to count down by 1
    timer.innerHTML = Seconds;  //Outputs Seconds counting down to the timer <p> tag
    var time = setTimeout(tick, 1000); //Sets up that function "tick" is waiting 1 second to execute each time
    if (Seconds == -1) { //When Seconds reachs -1, run this alert and 
      alert("Time's up!"); //An alert window that says "Time's up!"
      clearTimeout(time); //Stops the timer from continuing to run
      timer.innerHTML = ""; //Replaces the text from Seconds with a blank
    }
  }
  tick(); //Runs the function tick
}

//END COUNTDOWN