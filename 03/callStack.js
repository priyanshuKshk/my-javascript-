//javascript exexution context
//global execution context
//function execution context
//eval execution context
/*
1..global execution => this
2..memory phase 
val1=>undefined
val2=>undefined
addNum => definition
3..execution phase
val1<=10
val2<=20
addNum =>new variable environment + execution thread
---memory phase + execution context
*/ 
let val1 = 10;
let val2 = 20;
function addNum(num1 , num2 ) {
    return num1+ num2;
}
//---------------------------------------
/*CALL STACK(LIFO)
 |three()   |
 |two()     |
 |one()     |
 |global exe| 
 */