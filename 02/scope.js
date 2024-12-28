{ /**/ }//scope andar ki kahani bahar nhi jani chahiye
const a =230
if(true){
    let a = 10;
    let b = 283
console.log("inner " , a);

}
console.log("outer " , a)

for (let i = 0; i < a.length; i++) {
    const element = a[i];
    console.log(element);
    
}
if (true) {
    const username ="priyanshu kaushik"
    if (username==="priyanshu kaushik") {
        const website = "github"
        console.log(username+website);  
    }
}
//+++++++++++++++++interesting+++++++++++++++++++
function addOne(num) {
    return num+1;
}
const addTwo = function (num) {
    return num +2
}
// arrow functions
