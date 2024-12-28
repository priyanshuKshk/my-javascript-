//Immediately Invoked Functions Expressions
   //global scope ke pollution se bachne ke liye 
   (function coffe() {//named iife
    console.log(`coffee is ready`)
   })();//semicolon is important here
   (()=>{
    console.log(`coffee is again ready`);
    
   })()