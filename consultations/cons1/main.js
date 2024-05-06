console.log('test');

// const name = 'Vasia';
// console.log(name);

// var nameUser = 'Tom'
// console.log(nameUser)

// let name = 'Jason'
// let age = 10;
// let space = ' '
// console.log('My name' + space + name + space+  'my age' + space+ age)
// // console.log('My name ' + name)
// console.log(`My name ${name}, my ${age}, favorite  song `)

// let name = prompt("введіть ваше ім'я");
// let nameSur = prompt('введіть ваше прізвище');
//
// console.log('');

let bigNum = Number.MAX_SAFE_INTEGER
console.log(bigNum)
console.log(bigNum + 1)
console.log(bigNum + 2)
console.log(bigNum + 3)
console.log(bigNum + 4)

let bigIntOne = 100n;
let bigIntTwo = BigInt(100)
console.log(bigIntOne, bigIntTwo)

let bigIntNum = BigInt(Number.MAX_SAFE_INTEGER)
console.log(bigIntNum)
console.log(bigIntNum + 1n)
console.log(bigIntNum + 2n)
console.log(bigIntNum + 3n)
console.log(bigIntNum + 4n)

console.log(bigIntOne === 100)
console.log(bigIntOne == 100)
console.log(bigIntOne === 100n)

let bigNew = 1_000_000_000n
