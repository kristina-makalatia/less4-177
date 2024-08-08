"use strict";

function testFunction(number) {
  if (number === 2) {
    return "hello1";
  } else if (number === 10) {
    return "hello2";
  }
  return "hello3";
}

let fncResult = testFunction(5);
console.log(fncResult);

//
function getAge(birthYear, yearNow) {
  // let age = yearNow - birthYear;
  // return age;
  return yearNow - birthYear;
}

let resultAge = getAge(2002, 2024);
console.log(resultAge);

//
let getAge2 = function (birthYear, yearNow) {
  return yearNow - birthYear;
};

let resultAge2 = getAge2(1990, 2024);
console.log(resultAge2);

//
let getAge3 = (birthYear, yearNow) => {
  let age = yearNow - birthYear;

  // if (age > 18) {
  //     return 'adult'
  // } else {
  //     return 'not adult';
  // }
  let ageResult = age > 18 ? "adult" : "not adult";
  return ageResult;
};

let resultAge3 = getAge3(1993, 2024);
let resultAge4 = getAge3(2012, 2024);

console.log(resultAge3);
console.log(resultAge4);

//
function sum(...numbers) {
  let sumnumber = 0;
  for (let item of numbers) {
    sumnumber = sumnumber + item;
  }
  return sumnumber;
}

let sumResult = sum(15, 20, 36, 100);
let sumResult2 = sum(12, 15);

console.log(sumResult);
console.log(sumResult2);

//
let array = [1, 2, 3, 4, 5];

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

//  scope

// 1. global scope
let userName = "anna";

// 2. function = local scope
function getAgeFnc(birthYear) {
  let yearNow = 2024;
  let age = yearNow - birthYear;
  return age;
}

let resultAgeFnc = getAgeFnc(2012);
console.log(resultAgeFnc);
// console.log(age); //error

// 3.block scope
let birthAge = 24;

if (birthAge > 18) {
  let isAdult = true;
}
// console.log(isAdult);//error

//
// var  -> hoisted; function scope
// let, const -> not hoisted; function & block scope

//
// let fName = "mariami";

function getAge(birthYear) {
  let age = 2024 - birthYear;

  function printInfo() {
    let info = `You are ${age}, born in ${birthYear}`;
    console.log(info);

    if (age > 18) {
      let adult = "You are adult";
      console.log(adult);
    }
  }

  printInfo();
  return age;
}

let resultNew = getAge(1990);
console.log(resultNew);
// console.log(age); //error

//
let count = 0;

function hello() {
  if (count === 0) {
    let count = 1;
    console.log(count); // 1
  }
  console.log(count); // 0
}

hello();

// closure

function outside(x) {
  function inside() {
    let y = 100;
    return x + x + y;
  }

  return inside;
}

let outsideResult = outside(10);
let outsideResult2 = outside(5);

let insideResult = outsideResult();
let insideResult2 = outsideResult2();
console.log(insideResult);
console.log(insideResult2);



//  array methods
// let namesFruits = ['apple', 'mango', 'banana'];

// namesFruits.unshift('strawberry');
// namesFruits.push('kiwi');
// namesFruits.shift();
// namesFruits.pop();
// console.log(namesFruits);

// splice
// let arrayLang = ['js', 'c#', 'nodeJs', 'python'];

// arrayLang.splice(2,0,'java');
// arrayLang.splice(1,2);

// let deletedElements = arrayLang.splice(1,2);
// console.log(deletedElements);

// arrayLang.splice(-1, 1, 'Java');
// console.log(arrayLang);

// slice
let fruits = ['apple', 'kiwi', 'mango', 'orange']

// let newFruits = fruits.slice(1,3);
// console.log(newFruits);


// 
// let reversedArray = fruits.reverse();
// console.log(reversedArray);

let elementIndex = fruits.indexOf('avocado');
console.log(elementIndex);






