function Contest_Function() {
  var Age, Can_enter;
  Age = document.getElementById("Age").value;
  Can_enter = (Age >= 18) ? "You can enter!" : "You are not old enough to enter.";
  document.getElementById("Contest").innerHTML = Can_enter;
} //Checks if age is equal to or greater than 18. If so, displays first message, if not, displays second message.

function Student(FullName, Age, Grade) {
  this.Student_Name = FullName;
  this.Student_Age = Age;
  this.Student_Grade = Grade;
} //Sets up class Student with name, age and GPA
var John = new Student("John Smith", 15, "3.7");
var Sue = new Student("Sue Jones", 16, "4.0");
var Jack = new Student("Jack Johnson", 17, "3.5");
//Creates variables based on class Student
function getStudent() {
  document.getElementById("studentID").innerHTML =
    "Our top student is " + Sue.Student_Name + ", who has a " + Sue.Student_Grade + " GPA.";
}//Displays data from variable Sue

function countFunction() {
  document.getElementById("Counting").innerHTML = Count();
  function Count() {
    var numberEnter;
    numberEnter = document.getElementById("number").value;
    var intg = parseInt(numberEnter, 10); //Takes number entered and changes it to an integer
    function plusOne() {intg += 1;}//Adds one to number entered
    plusOne();
    return intg;//Returns number entered plus one
  }
}