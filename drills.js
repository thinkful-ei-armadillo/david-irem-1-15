/* eslint-disable no-unused-vars */
'use strict';

/* What is scope?
Scope is like where variables can be accessed.
In global it could be anywhere in the file. In local scope, variable is only within the function block. 
Why is global scope important?
A global scope can mess up with the function as the function looks up to the parent. 
The function can use a global variable accidentally
Strict mode?
It forces all variables defined within a function 
block to be a local variable. It prevents the hoisting up. 
If you declare with var instead of let or const, it throws an error.
side effects?
When a function reaches out of its local scope and changes something in global scope.
In that case, a function will give us inconsistent results every time we run it. Pure functions has no side effects. */

function max(numbers){
  if(numbers.length === 0){
    return null;
  } else {
    let i = 0;
    let currentMax = numbers[0];
    while(i < numbers.length){
      if(numbers[i] > currentMax){
        currentMax = numbers[i];
      }
      i++;
    }
    return currentMax;
  }
}

let myArr = [0,2,4,1];
max(myArr);

function min(numbers){
  if(numbers.length === 0){
    return null;
  } else {
    let i = 0;
    let currentMin = numbers[0];
    while(i < numbers.length){
      if(numbers[i] < currentMin){
        currentMin = numbers[i];
      }
      i++;
    }
    return currentMin;
  }
}

function average(numbers){
  let sum = 0;
  numbers.forEach(item => {
    sum += item;
  });
  return sum / numbers.length;
}

function repeat(fn, n){
  for (let i=0; i<n; i++){
    fn();
  }
}

function hello(){
  console.log('Hello World!');
}

function goodBye(){
  console.log('GoodBye World!');
}

function filter(arr, fn) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    if(fn(arr[i]) === true){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

console.log(filter (myNames, name => name[0] === 'R'));

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter ++;
    console.log(`Danger there is a ${typeOfWarning} hazard at ${location}`);
    console.log(`${typeOfWarning} has triggered ${warningCounter} times.`);
  };
}

// const rocks = hazardWarningCreator('rocks on the road');
// const rain = hazardWarningCreator('splashin the road');
// const fire = hazardWarningCreator('burn in hell unless you run away now');

// rocks('mainstreet');
// rocks('mainstreet');
// rain('mainstreet');


const turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
const forwardMovement = turtleMovements.filter(arr => arr[0] >= 0 && arr[1] >= 0);
const mappedMovements = turtleMovements.map(arr => Math.abs(arr[0]) + Math.abs(arr[1]));
turtleMovements.forEach(arr => console.log(Math.abs(arr[0]) + Math.abs(arr[1])));
console.log(forwardMovement);
console.log(mappedMovements);