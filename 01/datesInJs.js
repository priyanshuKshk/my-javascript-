let myDate = new Date();
//console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
//console.log(typeof myDate)
let myCreatedDate = new Date(2024 , 11 ,24)//"2023-12-24"
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toJSON());
let myTimeStamp =Date.now()
console.log(myTimeStamp    );
console.log(typeof myTimeStamp);
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
//`${date.getDay()} ANd the time `;
newDate.toLocaleDateString('default' ,{
    weekday:"long"
})

