'use strict';
let numbers = [1, 2, 3, 4];
let newNumbers = [];

function arrays(array,newArray){
array.filter( (element)=>{
return element % 2 !== 0;
}).map((element)=>{
return newArray.push(element * 2);
});
return newArray;

}
console.log(arrays(numbers,newNumbers));
let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development',
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration  : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];

let tasks = monday.concat(tuesday);
let newHours = [];
for(let i = 0 ; i < tasks.length ; i++){
let newValue = tasks[i].duration / 60 ;
newHours.push(newValue);

}
 console.log(newHours);
 let check = newHours.filter((element)=>{
return element < 2 ;

}).map((element)=>{
 return element ;  
})
console.log(check)
let totalHours  = 0 ;
let amount = 20.00 ; 
  newHours.forEach((element)=>{

totalHours += element;

})
let total = totalHours * 20 ;
console.log( '€'+ total.toFixed(2))