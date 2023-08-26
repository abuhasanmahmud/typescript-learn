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

// let userId: string | number;
// (userId = "aldkfal"), (userId = 44);

// function userInfo(userName: number | string, userId: number) {
//   console.log(userId, userName);
// }

// userInfo("mahmud", 22);

// let allUser: Array<string>;
// allUser = ["m", "n", "ralkdj"];
// console.log(allUser);

// enum requestype {
//   readData = "read data",
//   saveData = "saveData",
// }

// console.log(requestype["readData"]);

//object data

// let users: Object[];
// users = [];
// let user1: { userName: String; userId: Number | string };
// user1 = { userName: "mahmud", userId: "33" };

// users.push(user1);

// // console.log(users);

// let user2: {};
// user2 = { name: "hasa", id: 33 };
// users.push(user2);
// console.log(users);

type user = { userName: String; userId: Number };

let users: user[];
users = [];
let user1: user;
let user2: user;

user1 = { userName: "mahmud", userId: 33 };
user2 = { userName: "hasan", userId: 55 };

users.push(user1, user2);
