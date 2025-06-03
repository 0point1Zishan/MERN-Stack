// let str = "                  Hello everyone! ";
// let trimmedStr = str.trim();
// console.log(`Without trimming string: ${str}`);
// console.log(`Trimmed string: ${trimmedStr}`);

// str = "Hello World!";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// str = "Ilovecoding";
// console.log(str.indexOf("love"));
// console.log(str.indexOf("coding"));
// console.log(str.indexOf("hello"));

// str = "Ilovecoding              ";
// let newStr = str.trim().toLowerCase();
// console.log(`NewString after trimming and convert in lower case: ${newStr} `);

// str = "HelloEveryone!";
// console.log(str.slice(5));
// console.log(str.slice(5, 10));

// console.log(str.slice(-2));

// // Replace
// str = "ILoveCoding";
// console.log(str.replace("Love", "Do"));

// console.log(str.replace("o", "i"));

// str = "IloveloveCodingandlovecoding";
// console.log(str.replace("love", "do"));

// str = "Hello ";
// console.log(str.repeat(3));

// // Practice Question:
// // Qs 1
// let msg = "help!";
// console.log(msg.trim().toUpperCase());

// // Qs 2
// let name = "ApnaCollege";
// console.log(name.slice(4, 9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna", "Our"));

// // Qs 3
// console.log(name.slice(4).replace("l", "t"));
// console.log(name.slice(4).replace("l", "t").replace("l", "t"));

// ///! Arrays:
// let students = ["Md", "Zishan", "Sarkar", "Murad"];
// console.log(students);
// console.log(typeof students);

// let num = [2, 4, 6, 8];
// console.log(num);

// console.log(num[0]);

// for (let i = 0; i < num.length; i++) {
//   console.log(`${num[i]} `);
// }

// let mixed = ["Hello", 5, 8, "World"];
// for (let i = 0; i < mixed.length; i++) {
//   console.log(`${mixed[i]} `);
// }
// console.log(mixed[0][1]);
// console.log(mixed[0].length);

// // Arrays are Mutable
// let fruit = ["mango", "banana", "orange"];
// console.log(fruit);
// fruit[0] = "litchi";
// console.log(fruit);

// fruit[10] = "Papaya";
// console.log(fruit);
// console.log(fruit.length);

// for (let i = 0; i < fruit.length; i++) {
//   console.log(`${fruit[i]} `);
// }

// //// Arrays Methods

// // push: add to end;
// num = [3, 6, 9, 12];
// console.log(num);
// num.push(15);
// console.log(num);

// // pop: erase an element from end & return it;
// num.pop();
// console.log(num);
// num.pop();
// console.log(num);

// // unshift: add an element to start
// num.unshift(0);
// console.log(num);

// // Shift: erase an element from start & return it;
// let ele = num.shift();
// console.log(num);
// console.log(ele);

// // Practice Qs
// let start = ["january", "july", "march", "august"];
// start.shift();

// String Method
let msg = "          Hello     World!  ";
let t_msg = msg.trim(); //? trim() function only remove start and end spaces
// console.log(msg);
// console.log(t_msg);

// let password = prompt("Set your password!");
// console.log(password.trim());

//? String Methods
//! Convert UpperCase
let str = "Hello World!";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// / / //? String Methods with Arguments
str = "I love coding";
let idx = str.indexOf("coding");
// console.log(idx);

// / / //?  Method Chain
msg = "       hello Everyone    ";
msg = msg.trim().toUpperCase();
// console.log(msg);

// / / / / //?  Slice
str = "I love coding";
// console.log(str.slice(2));
// console.log(str.slice(0, 6));

// / / / / //?  Replace
// console.log(str.replace("love", "do"));

// / / / / //?  Repeat
// console.log(str.repeat(4));

// / / / / //?  Practice Qs
//! Qs-1:
msg = "help!";
// console.log(msg.trim().toUpperCase());

//! Qs-3:
name = "OurCollege";
name = name.slice(3).replace("l", "t");
// console.log(name.replace("l", "t"));

// / / / // / / //? Array
let num = [1, 2, 3, 4, 5, 6];
// console.log(num);
// console.log(num[3]);

// / / / // / / //? Array
let info = ["Zishan", 50, 7.5, false];
// console.log(info);

let arr = [];
// console.log(arr);

let fruit = ["mango", "apple", "litchi"];
// console.log(fruit);

fruit[0] = "banana";
// console.log(fruit);

fruit[0][0] = "P";
fruit[1][0] = "P";
// console.log(fruit);

// / / / / / / //? Array Methods:
//! Push: add to end
num = [5, 10, 15, 20, 30, 35, 40];
num.push(45);
// console.log(num);

//! Unshift: Add to Start
num.unshift(0);
// console.log(num);

//! Pop: Delete from end & returns it
// console.log(num.pop());
// console.log(num);

//! Pop: Delete from Start & returns it
// console.log(num.shift());
// console.log(num);

num[100] = 1005;
// console.log(num);

// / / / / //? Practice Qs
start = ["january", "july", "march", "august"];
start[0] = start[1];
start[1] = "june";
// console.log(start);

// / / / / //? Array Methods
//! 'indexOf: returns index of something
let color = ["red", "yellow", "blue", "red", "yellow", "red"];
// console.log(color.indexOf("red"));
// console.log(color.indexOf("green"));

//! Includes: Search for a value
// console.log(color.includes("red"));
// console.log(color.includes("green"));

//! Array Concat:
num1 = [1, 2, 3, 4, 5];
num2 = [6, 7, 8, 9, 10];

num = num1.concat(num2);
// console.log(num);

num = num2.concat(num1);
// console.log(num);

//! Reverse:
num1.reverse();
// console.log(num1);

//! Slice:
num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num.slice(2));
// console.log(num.slice(4, 7));
// console.log(num.slice());
// console.log(num.slice(-2));

//! Splice(removes, replaces, add elements in place):
// console.log(num.splice(6));
// console.log(num);
// console.log(num.splice(1, 3));
// console.log(num);

//! Splice add element syntax: array_name.splice(index, delete_number_of_elements, add_elements)
num.splice(1, 0, 2, 3, 4);
// console.log(num);

//! Sort: (convert elements to string then sorting the array)
color = ["red", "green", "yellow", "blue"];
color.sort();
// console.log(color);

num = [4, 5, 3, 10, 11, 15];
num.sort();
// console.log(num);

//???????????? Practice Question:
//!Qs-1:
month = ["january", "july", "march", "august"];
month.splice(0, 2, "july", "june");
// console.log(month);

//! Qs-2:
lan = ["C", "C++", "HTML", "Javascript", "Python", "Java", "C#", "SQL"];
// console.log(lan.reverse().indexOf("Javascript"));

//???????????? Array References:
arr = ["a", "b", "c"];
let temp = arr;
// console.log(temp == arr);
// console.log(temp === arr);

arr.push("d");
// console.log(arr);
// console.log(temp);

temp.pop();
// console.log(temp);
// console.log(arr);

newArray = arr.slice(0);
newArray.splice(newArray.length - 1, 0, "d", "e", "f");
// console.log(newArray);
// console.log(arr);

//???????????? Constant Array:
const a = 5;
// a = 10;      //! Error, bc. we can't assign again in constant variable
// console.log(a);

const abcd = [1, 2, 3, 4, 5];
// console.log(abcd);

//????????????? Nested Array:
let nums = [
  [1, 2, 3],
  [4, 5],
  [7, 8, 9],
  [10, 11, 12],
];
// console.log(nums);
// console.log(nums[0].length);

//??????????? Practice Question:
arr = [
  ["X", null, "O"],
  [null, "X", null],
  ["O", null, "X"],
];
arr[0][1] = "O";
// console.log(arr);

//?????? Practice Questions:

//! Qs-1:
arr = [15, 2, 32, 4, 5, 6, 7, 8];
n = 3;
// console.log(arr.slice(0, n));

//! Qs-2:
// console.log(arr.slice(-3));

//! Qs-3:
str = "";
// if (str.length === 0) {
//   console.log("The string is empty.");
// } else {
//   console.log("The string is not empty.");
// }

//! Qs-4:
// str = "HEllo";
// if (str[1] >= "a" && str[1] <= "z") {
//   console.log("Small Letter.");
// } else {
//   console.log("Capital Letter.");
// }

//! Qs-5:
// str = "        Hello World!            ";
// str = str.trim();
// console.log(str);

//! Qs-6:
arr = [15, 2, 32, 4, 5, 6, 7, 8];
if (arr.indexOf(100) != -1) {
  console.log("Present");
} else {
  console.log("Missing");
}
