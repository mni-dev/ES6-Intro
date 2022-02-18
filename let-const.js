const balance = 1240;
// balance = 1320; // shows TypeError. const variable is unchangeable.

const userName = 'ami tumi shey';
const weTogether = 'amra' + ' ' + userName;
console.log(weTogether);
// userName = 'Oh amar jango' // gives TypeError.

const numbers = [4, 5, 9, 40];
// numbers = [90, 44, 89] // re-assign not allowed
numbers.push(222);
numbers[1] = '888';

const student = {name:'hemayat', age: 25, job: 'intern', roll: 5};
student.name = 'hekmatiyar'
// student = {name: 'mofazzal'} //not allowed

let sum =0;
// const sum = 0 //not allowed
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
    sum = sum = number;
}