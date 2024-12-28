// for of 
//["" , "",""]
//[{},{},{}]
const arr = [1,2,3,4,5]
for (const element of arr) {
    // console.log(element);
    
}
const greetings = "good morning"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
    
}
//MAP
const map = new Map()
map.set('IN' ,"india" )
map.set('usa' ,"america" )
map.set('uk' ,"london" )
//console.log(map);
for (const [key , value]  of map) {
   // console.log(key , ':-' , value);
    
}
const myObject = {
    'a': '1',
    'b' : '2'
}
// for (const key of myObject) {
//     console.log(key);
    
// }// objects are not iterables
for (const key in myObject) {
//console.log(`${key} shortcut is for ${myObject[key]}` );

}
const programming =["js" , "rb" , "py" , "java" ,"cpp"]
for (const key in programming) {
 // console.log(`${programming[key]}`);
  
}
// for each loop
programming.forEach(function(item) {
    console.log(item);
    
});
programming.forEach(element => {
    
});
function printMe(item){
    console.log(item);
    
}
programming.forEach(printMe)
