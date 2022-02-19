//ARROW Function syntax: (...,...) => ...
//for single line, no need to write 'return'stats
//for multiline, 'return' stats is essential
//Multiplication
const multiplication = (num1, num2) => num1 * num2;
const multiply = multiplication(22, 11);
console.log(multiply);

//Division
const divide = (a, d) => a / d;
console.log(divide(34, 2));

//single parameter
//option 1
// const fiveTimes = (a) => a * 5;
//option 2
const fiveTimes = a => a * 5;
const result = fiveTimes(30);
console.log(result);

//no parameter [for string value]
const getName = () => 'Warren Buffet';
const name = getName();
console.log(name);

//Multiline syntax: (...) => {....}
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum + diff;
    const finalResult = result * 5;
    return finalResult;
}
const inputNum = doMath(15,10);
console.log(inputNum);