//????? Object Literals:
// let stu = {
//   name: "Zishan",
//   age: 22,
//   gander: "Male",
//   lang: ["C", "C++", "Java", "Python", "Javascript"],
// };
// console.log(stu);

//?? Practice Qs:
// let thread = {
//   username: "Zishan",
//   content: "My first Job",
//   likes: 1000000000,
//   reposts: 1000000,
//   tags: ["Job", "Zishan"],
// };
// console.log(thread);

//? Get Values from object literals:
// console.log(thread["likes"]);
// console.log(thread.content);

// const obj = {
//   1: "a",
//   2: "b",
//   true: "c",
//   null: "d",
//   undefined: "e",
// };
// console.log(obj["1"]);
// console.log(obj[1]);
// console.log(obj[true]);
// console.log(obj[null]);
// console.log(obj["null"]);
// console.log(obj.null);
// console.log(obj.true);
// console.log(obj.undefined);

//???? Add values in object literals:
// let stu = {
//   name: "Zishan",
//   age: 22,
//   gander: "Male",
//   city: "Dhaka",
// };
// console.log(stu["city"]);
// stu.city = "Rangpur";
// console.log(stu.city);

// console.log(stu);
// stu["address"] = "Dhaka";
// console.log(stu);
// stu["address"] = "NewYork";
// console.log(stu);
// stu["lan"] = ["C", "C++"];
// console.log(stu);
// console.log("After learn more language.");
// stu["lan"].splice(
//   stu.length - 1,
//   0,
//   "Java",
//   "Python",
//   "JavaScript",
//   "ShellBash"
// );
// console.log(stu);

// delete stu.city;
// console.log(stu);

//?????? Nested Objects:
// const students = {
//   Zishan: {
//     id: 111,
//     grade: 4,
//   },
//   Ziyan: {
//     id: 112,
//     grade: 3.99,
//   },
//   Zidan: {
//     id: 113,
//     grade: 3.95,
//   },
// };
// console.log(students);
// console.log(students.Zishan);
// console.log(students.Zidan.grade);

// students.Zidan.grade = 3.97;
// console.log(students.Zidan);
// console.log(students.Zidan.grade);

//???????   Array of Objects:
// let stu = [
//   {
//     name: "Zishan",
//     id: 110,
//     grade: 4,
//   },
//   {
//     name: "Ziyan",
//     id: 111,
//     grade: 3.99,
//   },
//   {
//     name: "Zidan",
//     id: 112,
//     grade: 3.96,
//   },
// ];
// console.log(stu);
// console.log(stu[0]);
// console.log(stu[1].id);
// console.log(stu.slice(0, 2));

//??????? Math Object:
// console.log(Math.PI);
// console.log(Math.E);

// let num = -20;
// console.log(Math.abs(num));
// console.log(Math.pow(2, 3));
// console.log(Math.floor(2.5));
// console.log(Math.floor(-5.5));
// console.log(Math.ceil(5.1));
// console.log(Math.max(8, 15));
// console.log(Math.min(8, 15));
// console.log(Math.random());

// let num = Math.random();
// num *= 10;
// num = Math.floor(num + 1);
// console.log(num);

// console.log(Math.floor(Math.random() * 10 + 1));

//?????? Practice Question:
//! Sol-1:
// console.log(Math.floor(Math.random() * 100 + 1));

//! Sol-2:
// console.log(Math.floor(Math.random() * 5 + 1));

//! Guessing Game:
// let mx = prompt("What will be that maximum number? ");
// mx = parseInt(mx);
// let num = Math.floor(Math.random() * mx + 1);
// let guessNum = prompt(`Guess the number(1-${mx}): `);
// while (true) {
//   if (guessNum == "quit") {
//     console.log(`The number was ${num}.`);
//     break;
//   }

//   if (guessNum == num) {
//     console.log("Congratulation!! you got this.");
//     break;
//   } else if (guessNum < num) {
//     guessNum = prompt(`Sorry!, The number is bigger. Try again: `);
//   } else if (guessNum > num) {
//     guessNum = prompt(`Sorry!, The number is smaller. Try again: `);
//   }
// }

//?????????????? Assignment:
//! Sol-1:
// let d = Math.floor(Math.random() * 6 + 1);
// console.log(d);

//! Sol-2:
// let car = {
//   name: "Lamborghini",
//   model: "Temerario",
//   color: "Blue",
// };
// console.log(car.name);

//! Sol-3:
let per = {
  per1: {
    name: "Zishan",
    age: 22,
    city: "Dhaka",
  },
  per2: {
    name: "Rose",
    age: 20,
    city: "Dhaka",
  },
};
per.per1.city = "New York";
per.per1.country = "United States";
per.per2.city = "New York";
per.per2.country = "United States";
console.log(per);
