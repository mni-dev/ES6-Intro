//Default parameter value in funcitons
function addition (num1, num2 = 32){
   /*  // option 1
    num2 = num2 || 32; */
   /*  //option 2
    if(num2 == undefined){
        num2 = 32;
    } */
    sum = num1 + num2;
    console.log(sum);
    return sum;
}
const values = addition(12,10);

function fullName(first, second){
    /* if(second==undefined){
        second = 'talukdar';
    } */
    const name = first + ' ' + second;
    console.log(name);
    return name;
}
const nameParts = fullName('akter')