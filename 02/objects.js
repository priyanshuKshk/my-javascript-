//singleton
//object literals
//object.create
const mySym = Symbol("**")
const jsUser={
    name/*key*/ : "priyanshu",
    [mySym]: "mykey",
    age: 20,
    location : "chandigarh",
    branch:"cse"
}
// console.log(jsUser["name" ])
// console.log(jsUser.name)
// console.log(typeof mySym);

// console.log(jsUser[mySym])
// console.log(jsUser);
 jsUser.greeting  = function () {
    console.log("hello everyone ")
 }
 jsUser.greetingTwo = function(){
    console.log(`hello js users , ${this.name}`);
    
 }
//  console.log(jsUser.greeting());
//  console.log(jsUser.greetingTwo());
 const obj1 ={1: "a" , 2: "b"}
 const obj2 ={3: "a" , 4: "b"}
 const obj3 ={5: "a" , 6: "b"}
 const obj4 = Object.assign({}, obj1,obj2,obj3)
// console.log(obj4);
// console.log(Object.keys(obj4));
// console.log(Object.values(obj4));
// console.log(Object.entries(obj4));
// console.log(Object.hasOwnProperty('c'));
// spread the objects
//keys entries values are also used in objects
//-----------------------------------------------------------------------
 const college ={
    collegeName : "x",
    price:"100k",
    branch:"electonics and communication"

 }
 const {branch: br} = college
 //console.log(branch);
 console.log(br);
//  const navbar = ({company}) =>{

//  }
//  navbar(company = "priyanshu") destructure
//apis
{
    /*json*/
   name :"a" 
     
}