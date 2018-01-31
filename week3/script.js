'use strict';
function foo(callback) {
    callback = function () {
        return callback();
    }
}
function bar() {
    console.log('Hello, I am bar!');
}
foo(bar());

function sayThree() {
    console.log(":  say three")

}
function sayFive() {
    console.log(": say five");


}
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    let arrNum = [];

    for (let i = startIndex; i <= stopIndex; i++) {
        arrNum.push(i);
    }
    for (let j = 0; j < arrNum.length; j++) {

        let divThree = arrNum[j] / 3;
        let divFive = arrNum[j] / 5;

        if (divThree % 1 === 0) {
            sayThree();
        } if (divFive % 1 === 0) {
            sayFive();
        }


    }

}
threeFive(10, 15, sayThree, sayFive);


let x = 9;
function f1(val) {
    val = val + 1;
    return val;
}
f1(x);
console.log(x);


let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);
//because of the object  the second  variable is object and when you pass y to the function you modify the value of the x variable 
// and in the first function you pass the value of x but x must be declaring inside the function 
function createBases(Number) {
    return (x) => {
        return x += Number;
    }

}
let addSix = createBases(6);
console.log(addSix(10));
console.log(addSix(22));

let arr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
let newArray = (array) =>
    array.filter((element, index) => array.indexOf(element) === index);

console.log(newArray(arr))
//another way to do this using hashmap 
function newArray2(arr) {
    let obj = {};
    let newArray = [];
    let value = 1
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = value;
        value++;
    }
    for (let key in obj) {
        newArray.push(key);

    }
    console.log(newArray)

}
newArray2(arr)