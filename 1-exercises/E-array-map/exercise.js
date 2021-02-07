// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let newNumbers1 = numbers.map(num => num*100);
let newNumbers2 = numbers.map(num => 
    {return num*100});
let newNumbers3 = numbers.map(function (num) 
    {return num*100});
let newNumbers4 = numbers.map(function muli100 (num) 
    {return num*100});

console.log(newNumbers4);