const myArr = [0 ,1,2,3,4]
// copy as shallow copy => share the same reference when coopied
// (deep copy =>do not share the same reference)
myArr.push(6);
myArr.push(5);
myArr.pop();
myArr.unshift(6);
myArr.shift();
console.log(myArr.includes(9))
console.log(myArr.indexOf(9))
const newArr = myArr.join()
//change type of arr also
console.log(myArr);
//slice and splice
console.log("a" , myArr);
const myn1 =myArr.slice(1,3)
//last range included
console.log("b" , myArr);
const myn2 =myArr.splice(1,3)
console.log("c" , myArr);
console.log(myn1);
console.log(myn2);
const myArr1 = [6,7,8,9,10]
// const myn3 = myArr.concat(myArr1)
// console.log(myn3);
const myn3  = [...myArr , ...myArr1]
console.log(myn3);


const another_array =[1,2,[3,4,5,6]  ,[7,8,[10,11]]]
console.log(another_array);

const real_another_array =another_array.flat(Infinity)
console.log(real_another_array);
Array.isArray("priyanshu")
console.log(Array.isArray("priyanshu"));
console.log(Array.from("priyanshu"));
console.log(Array.from({name: "priyanshu"}));// interesting case
// multiple variables into arrays
let a= 112
let b = 334
let c = 300
console.log(Array.of(a,b,c));
