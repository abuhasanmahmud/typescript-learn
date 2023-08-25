//leason 1

// function addNumbers(num1: number, num2: number) {
//   console.log(num1 + num2);
// }

// addNumbers(20, 30);

//leason 2

// let userId: number = 20;
// let firstName: string = "abu hasan ";
// let lastName: string = "mahmud";

// let fullName = firstName.concat(lastName);
// console.log(fullName.split(" "));

// let fulnameArray = firstName.split(" ");

// fulnameArray.map((name) => console.log(name));

// function multiplyTwoNumber(Number1, Number2) {
//   return Number1 * Number2;
// }

//union type

let userId: string | number;
(userId = "aldkfal"), (userId = 44);

function userInfo(userName: number | string, userId: number) {
  console.log(userId, userName);
}

userInfo("mahmud", 22);
