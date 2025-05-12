// Qs 1:
// let num = 1000;
// if (num % 10 == 0) {
//   console.log("good");
// } else {
//   console.log("bad");
// }

// Qs 2
// let name = prompt("Enter your name: ");
// let age = prompt("Enter your age: ");
// let sub = `${name} is ${age} years old.`;
// alert(sub);

// Qs 3
// let quarter = 2;
// switch (quarter) {
//   case 1:
//     console.log("January, February, March");
//     break;
//   case 2:
//     console.log("April, May, June");
//     break;
//   case 3:
//     console.log("July, August, September");
//     break;
//   case 4:
//     console.log("October, November, December");
//     break;
//   default:
//     console.log("Wrong quarter, Enter valid quarter...");
// }

// Qs 4
// let str = prompt("Enter a string: ");
// if (str.length > 5 && (str[0] === "A" || str[0] === "a")) {
//   console.log("Golden String");
// } else {
//   console.log("Not");
// }

// Qs 5
// let a = Number(prompt("Enter a number"));
// let b = Number(prompt("Enter a number"));
// let c = Number(prompt("Enter a number"));
// 20;

// if (a > b && a > c) {
//   console.log(`${a} is the largest number.`);
// } else if (b > c) {
//   console.log(`${b} is the largest number.`);
// } else {
//   console.log(`${c} is the largest number.`);
// }

// Qs 6
let a = Number(prompt("Enter a number: "));
let b = Number(prompt("Enter a number: "));

if (a % 10 === b % 10) {
  console.log(`${a} and ${b} numbers the last digit is same.`);
} else {
  console.log(`${a} and ${b} numbers the last digit is different.`);
}
