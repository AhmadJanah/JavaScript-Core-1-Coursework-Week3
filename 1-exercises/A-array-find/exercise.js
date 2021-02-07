/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

function isLongNameStartsWithA(namee){
   return (namee.length > 7 && namee[0] === 'A')
}

console.log(isLongNameStartsWithA("Ahmadsdf"));

function findLongNameThatStartsWithA(arr){
  const find = arr.find(isLongNameStartsWithA);
  return find;
}


var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
