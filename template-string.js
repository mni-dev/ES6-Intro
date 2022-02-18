//use backtick(` `) to write multiline easily and use variables 
const friend = 'my friend Mamum';
const money = function (taka){
    const Taka = 35 * taka;
    // console.log(Taka);
    return Taka;
}
const get_money = money(25);
const friend_money = `${friend} has ${get_money}`;
console.log(friend_money);

//multiline
const myFriend = `my friend mamun has a lot of 
friends. they are very helpfult to him.
if i face any prolem, then he extends much help.`
console.log(myFriend);
