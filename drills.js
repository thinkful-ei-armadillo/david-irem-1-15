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
console.log(repeat(goodBye,3));