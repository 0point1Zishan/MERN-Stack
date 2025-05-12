let str = "                  Hello everyone! ";
let trimmedStr = str.trim();
console.log(`Without trimming string: ${str}`);
console.log(`Trimmed string: ${trimmedStr}`);

str = "Hello World!";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

str = "Ilovecoding";
console.log(str.indexOf("love"));
console.log(str.indexOf("coding"));
console.log(str.indexOf("hello"));

str = "Ilovecoding              ";
let newStr = str.trim().toLowerCase();
console.log(`NewString after trimming and convert in lower case: ${newStr} `);

str = "HelloEveryone!";
console.log(str.slice(5));
console.log(str.slice(5, 10));

console.log(str.slice(-2));

// Replace
str = "ILoveCoding";
console.log(str.replace("Love", "Do"));

console.log(str.replace("o", "i"));

str = "IloveloveCodingandlovecoding";
console.log(str.replace("love", "do"));

str = "Hello ";
console.log(str.repeat(3));

// Practice Question:
// Qs 1
let msg = "help!";
console.log(msg.trim().toUpperCase());

// Qs 2
let name = "ApnaCollege";
console.log(name.slice(4, 9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));

// Qs 3
console.log(name.slice(4).replace("l", "t"));
console.log(name.slice(4).replace("l", "t").replace("l", "t"));

///! Arrays:
let students = ["Md", "Zishan", "Sarkar", "Murad"];
console.log(students);
console.log(typeof students);

let num = [2, 4, 6, 8];
console.log(num);

console.log(num[0]);

for (let i = 0; i < num.length; i++) {
  console.log(`${num[i]} `);
}

let mixed = ["Hello", 5, 8, "World"];
for (let i = 0; i < mixed.length; i++) {
  console.log(`${mixed[i]} `);
}
console.log(mixed[0][1]);
console.log(mixed[0].length);

// Arrays are Mutable
let fruit = ["mango", "banana", "orange"];
console.log(fruit);
fruit[0] = "litchi";
console.log(fruit);

fruit[10] = "Papaya";
console.log(fruit);
console.log(fruit.length);

for (let i = 0; i < fruit.length; i++) {
  console.log(`${fruit[i]} `);
}

//// Arrays Methods

// push: add to end;
num = [3, 6, 9, 12];
console.log(num);
num.push(15);
console.log(num);

// pop: erase an element from end & return it;
num.pop();
console.log(num);
num.pop();
console.log(num);

// unshift: add an element to start
num.unshift(0);
console.log(num);

// Shift: erase an element from start & return it;
let ele = num.shift();
console.log(num);
console.log(ele);

// Practice Qs
let start = ["january", "july", "march", "august"];
start.shift();
