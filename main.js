//// 1. Variables - var, let, const --------------------------------------------

// If you want a general rule: always declare variables with const.
// If you think the value of the variable can change, use let.
// var is not used anymore
/*
let age = 30;

age = 33;

console.log(age);
*/

//// 2. JavaScript Data Types - String, numbers, boolean, null, undefined, symbol

/*
const name1 = 'Henry';
const number = 10;
const rate = 4.6;
const isCool = true;
const x = null;
let z;
const y = undefined;

console.log(typeof name1);
console.log(typeof number);
console.log(typeof rate);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof z);
console.log(typeof y);
*/

//// 3. Concatenation - using template literals with backtext ` -----------------
/*
const myname = 'Gayan';
const myage = 38;

hello = `My name is ${myname} and I am ${myage} years old..`;
console.log(hello);
*/

//// 4. Arrays - Variables that hold multiple values ----------------------------
/*
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'lemmons', 10];
console.log(fruits);
console.log(fruits[2]); // to access elements inside an array

fruits.push('mangoes'); // to add elements 

console.log(fruits.indexOf('oranges'));
*/

//// 5. Object Literals (contains key / value pairs) ------------------------------
/*
// 5.1 

const person1 = {

  firstName: 'Jack', lastName: 'Brown', age: 20, hobbies: ['vedio games', 'reading', 'workout'], address: {stree: ';lsdkfjg', city: 'xkdljfb', limit: 290835}
}

const person2 = {

    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['tennis', 'cricket', 'football'],
    address:{
        street: '50 main street',
        city: 'Boston',
        limit: 20345
    }
}

console.log(person1.firstName, person1.lastName);

console.log(person1.hobbies[1]);

// Destructuring - to pull stuff out from the Object Literal

const {firstName, lastName, age, address:{city}} = person2;
console.log(firstName); // Ans: John
console.log(city);

// directly add properties

person2.email = 'john@gmail.com'
console.log(person2);


// 5.2 Array of Objects Literals

const toDos = [
  
  { id: 1, 
    text: 'take out trash',
    isCompleted: true
  },

  { id: 2, 
    text: 'Meeting with boss',
    isCompleted: true
  },

  { id: 3, 
    text: 'Dentist appointment',
    isCompleted: false
  }
];

console.log(toDos[1].text);

// 5.3 To convert Array of Object Literals into JSON format - When sending data to a SERVER, we usually send it via JSON format

const toDosJson = JSON.stringify(toDos);

console.log(toDosJson);
*/
//// 6. Loops ---------------------------------------------------------------

// 6.1 For loop

for (let i=0; i<5; i++){
  console.log(`For loop No ${i}`);
}

// 6.2 while loop





