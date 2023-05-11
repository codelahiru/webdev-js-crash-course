//// Variables - var, let, const --------------------------------------------

// If you want a general rule: always declare variables with const.
// If you think the value of the variable can change, use let.
// var is not used anymore
/*
let age = 30;

age = 33;

console.log(age);
*/

//// JavaScript Data Types - String, numbers, boolean, null, undefined, symbol

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

//// Concatenation - using template literals with backtext ` -----------------
/*
const myname = 'Gayan';
const myage = 38;

hello = `My name is ${myname} and I am ${myage} years old..`;
console.log(hello);
*/

//// Arrays - Variables that hold multiple values ----------------------------
/*
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'lemmons', 10];
console.log(fruits);
console.log(fruits[2]); // to access elements inside an array

fruits.push('mangoes'); // to add elements 

console.log(fruits.indexOf('oranges'));
*/

//// Object Literals (contains key value pairs) ------------------------------
/*
const person = {

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

console.log(person.address, person.firstName);

console.log(person.hobbies[1]);

// Destructuring - to pull stuff out from the Object Literal

const {firstName, lastName, age, address:{city}} = person;
console.log(firstName, lastName, age, city);
*/

//// Array of Objects ----------------------------------------------------

const toDos = [{
    id:1,
    text: 'take out trash',
    isCompleted: true
},
{
    id:2,
    text: 'meeting 02',
    isCompleted: true
},
{
    id:3,
    text: 'call a friend',
    isCompleted: false
}];

console.log(toDos);

// to convert toDos into JSON format

const toDosJson = JSON.stringify(toDos);
console.log(toDosJson);

//// Loops ---------------------------------------------------------------

// 1. For loop

<<<<<<< HEAD
for(let i=0; i<7; i++){
=======
<<<<<<< HEAD
for(let i=0; i<7; i++){
=======
for(let i=0; i<6; i++){
>>>>>>> ab1fd98be3269663be75d82f010796bff4a976a5
>>>>>>> c2ab2257b34c09b5c503b292874cbb6104611107

    console.log(`iteration of 111022_1942  ${i}`);
};

// --------------------------------------------------

function findPrimes(n) {
    var primes = [];
    for (var i = 2; i <= n; i++) {
      var isPrime = true;
      for (var j = 2; j < i; j++) {
        if (i % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
    return primes;
  }
  
  console.log(findPrimes(1000000000000));
  





