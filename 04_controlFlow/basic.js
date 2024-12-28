// Nullish coalescing operator (??):null , undefined
let val1;
val1 = null ?? 10;
val2 = undefined ?? 10;
console.log(val1);//10
console.log(val2);//10  
//terniary operator
//condition ?true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

//if else //switch case break default
const emptyObj ={}
if (Object.keys(emptyObj).length ===0) {
    console.log("object is empty");
}