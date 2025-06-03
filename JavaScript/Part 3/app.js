//???????? Loop:
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

//??? Practice Qs:

// for (let i = 1; i <= 15; i += 2) {
//   console.log(i);
// }

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }
// for (let i = 10; i >= 2; i -= 2) {
//   console.log(i);
// }

// let n = prompt("Enter a number: ");
// n = parseInt(n);
// for (let i = 1; i <= 10; i++) {
//   console.log(n, "*", i, "=", n * i);
// }

//????? Nested for loops:
// for (let i = 1; i <= 3; i++) {
//   console.log(`Outer loop: ${i}:`);
//   for (let j = 1; j <= 3; j++) {
//     console.log(j);
//   }
//   console.log("");
// }

//?????? While Loop:
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i += 1;
// }

//????? Practice Qs:
// let fav = "Avatar";
// let guess = prompt("Guess the movie's name: ");
// while (fav != guess) {
//   if (guess === "quit") {
//     console.log(`The movie was ${fav}.`);
//     break;
//   }
//   guess = prompt("Wrong! Try again: ");
// }
// console.log("Congrats! You got this!");

//???????? Break:
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   if (i == 5) {
//     break;
//   }
//   i += 1;
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

//?????? Nested Loop with Nested Array:
// let h = [
//   ["Iron Man", "Thor"],
//   ["Spider Man", "SuperMan"],
// ];
// for (let i = 0; i < h.length; i++) {
//   for (let j = 0; j < h[i].length; j++) {
//     console.log(h[i][j]);
//   }
//   console.log("");
// }

//????????? For of Loop:
// let str = "Hello Everyone!";
// for (ch of str) {
//   console.log(ch);
// }

// let heroes = [
//   ["Iron Man", "Spider Man", "Thor"],
//   ["Wonder Woman", "SuperMan", "Flash"],
// ];
// for (group of heroes) {
//   for (hero of group) {
//     console.log(hero);
//   }
//   console.log("");
// }

//???? Practice:
// let tasks = [];
// while (true) {
//   let command = prompt("What do you want?");
//   if (command === "list") {
//     console.log("-------------------------");
//     let t_no = 1;
//     for (task of tasks) {
//       console.log(`${t_no++}. ${task}.`);
//     }
//     console.log("-------------------------");
//   } else if (command === "add") {
//     let new_task = prompt("Enter the task: ");
//     tasks.push(new_task);
//     console.log("The task successfully added.");
//   } else if (command === "complete") {
//     console.log(`Good Job! You successfully completed ${tasks.shift()}`);
//   } else if (command === "delete") {
//     tasks.shift();
//   } else if (command == "quit") {
//     console.log("Task Manager quit!");
//     break;
//   } else {
//     console.log("Wrong command! Try again.");
//   }
// }

//???????????? Practice Question:
//! Qs-1:
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = prompt("which number do you want to remove?");
// num = parseInt(num);
// while (arr.indexOf(num) != -1) {
//   arr.splice(arr.indexOf(num), 1);
// }
// for (n of arr) {
//   console.log(n);
// }

//! Qs-2:
// let number = prompt("Enter a number: ");
// let count = 0;
// while (parseInt(number)) {
//   count++;
//   number = number / 10;
// }
// console.log(count);

//! Qs-3:
// let num = prompt("Enter a number: ");
// let sum = 0;
// while (parseInt(num)) {
//   sum += parseInt(num % 10);
//   num = num / 10;
// }
// console.log(`The sum of digits = ${sum}`);

//! Qs -4:
// let num = prompt("Enter a number: ");
// let factorial = 1;
// while (num) {
//   factorial *= num;
//   num--;
// }
// console.log(`Factorial = ${factorial}`);

//! Qs-5:
let arr = [100, 20, 50, 405, 11, 90, 30];
let mx = 0;
for (num of arr) {
  if (num > mx) {
    mx = num;
  }
}
console.log(`Max number = ${mx}`);
