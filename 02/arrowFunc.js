const user ={
    username: "priyanshu kaushik"
    , class:"14",
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username ="priya"
user.welcomeMessage()
console.log(this)
// this is only use in object mostly
// arrow function /*()=>{}*/
const addTwo = (num1 , num2)=>{
    return num1+num2
}
const addone =(num1 ,num2 )=>(num1 +num2)
const add = (num1 ,num2)=> ({username :"priyanshu"})
