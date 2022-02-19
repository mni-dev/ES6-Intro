//Spread Operator =...(3 dots) before Array Name. It returns all elements of an ARRAY.
const numbers = [4, 4, 98, 40, 50, 60, 7, 87];
/* console.log(numbers);
console.log(...numbers);//returns numbers (not strings) */

const maxNum = Math.max(99, 900, 500, 400);
// const maxInArray = Math.max(...numbers);
const maxInArray = Math.max(numbers);//returns Nan cos Math.max can't handle an ARRAY
// console.log(maxInArray);
// console.log(maxNum, maxInArray);
const numbers2 = numbers; //an Array within a variable
numbers.push(55);
// console.log(numbers2)
// console.log(...numbers2)
console.log(Math.max(numbers2))//returns NaN
console.log(Math.max(...numbers2))

const numbers3 = [numbers]//creates two-dimensional array
console.log(numbers3)
// const numbers4 = [...numbers] //crates a new array
const numbers4 = [...numbers, 66, 89] //crates a new array
console.log(numbers4);

