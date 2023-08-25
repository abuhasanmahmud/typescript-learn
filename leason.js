//leason 1
// function addNumbers(num1: number, num2: number) {
//   console.log(num1 + num2);
// }
// addNumbers(20, 30);
//leason 2
var userId = 20;
var firstName = "abu hasan ";
var lastName = "mahmud";
var fullName = firstName.concat(lastName);
// console.log(fullName.split(" "));
var fulnameArray = firstName.split(" ");
fulnameArray.map(function (name) { return console.log(name); });
