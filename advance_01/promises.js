const promiseOne = new Promise(function (resolve , reject) {
    //do an async tsk
    // db calls , cryptography , network
    setTimeout(function () {
        console.log('async task is complete');
        resolve()
    },1000)
})
//have to c
promiseOne.then(function () {
  //  console.log("promise consumed");
    
})
new Promise(function (resolve , reject) {
    setTimeout(function () {
    //    console.log("async task 2")
    },1000)

}).then(function () {
  //  console.log("async 2 resolved");
    
})
const promiseThree= new Promise(function (resolve , reject) {
    setTimeout(function () {
        //console.log("assync task 3")
        resolve({username:"priya", email:" example@example.com"})
    })
}).then(function () {
    console.log("assync 2 resolved");
    
})
const promiseFour =new Promise(function (resolve , reject) {
    setTimeout( function () { 
    })
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function (error) {
    console.log(error);
    
}).finally(()=>{console.log("the promise id=s either resolved or rejected");
})
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error=true;
        if (!error) {
            resolve({username:"javascript", password:"123"})
        }
        else{
            reject('error: Js WENT WRONG')
        }
    },1000)
}) ;
async function consumePromiseFine() {
  try{ const response =await promiseFive
   console.log(response);}
   catch(error){
    console.log(error);
    
   }
   
}
consumePromiseFine()
async function allTheUers() {
    // const response = await fetch('https://www.youtube.com/')
    // const data = response.json()
    // console.log(data);
    try {
        const response = await fetch('https://www.youtube.com/')
     const data = await response.json()
     console.log(data);
    } catch (error) {
        console.log("E:", error);
        
    }
    
}
allTheUers()
fetch('https://www.youtube.com/').then((response)=>{
    return response.json()
})
then((data)=>
{console.log(data);
}).catch()
