let a=new Date()
console.log(a)
console.log(a.getFullYear())
console.log(a.getMonth())
console.log(a.getDate())
console.log(a.getDay())
console.log(a.getHours())
console.log(a.getMinutes())
console.log(a.getMinutes())
console.log(a.getSeconds())
console.log(a.getMilliseconds())

// string date information

let b=new Date()
console.log(b.setFullYear(2025))
console.log(b.setMonth(0))
console.log(b.setDate(1))

// additional date methods
c=new Date()
console.log(c.toDateString())
console.log(c.toTimeString())
console.log(c.toLocaleDateString())
console.log(c.toLocaleTimeString())

// // alarm
function alarmRing(){
    let presentTime=new Date()
let alarmTime=new Date()

alarmTime.setHours(24);
alarmTime.setMinutes(0);
alarmTime.setSeconds(0);
let TimeDifference=alarmTime-presentTime
console.log(TimeDifference)
setTimeout(()=>{
    alert("Happy new year")


},TimeDifference)
console.log("your alarm will ring at 24:00")
}
alarmRing()

//math functions
let d=12.58
//math.round
console.log(Math.round(d))
//math.ceil
console.log(Math.ceil(d))
//math.floor
console.log(Math.floor(d))
//math.trunc
console.log(Math.trunc(d))
//math.sqrt
console.log(Math.sqrt(d))
//math.pow
console.log(Math.pow(2,3))
//math.abs
console.log(Math.abs(-5))
//math.min and math.max
console.log(Math.min(3,8,7,5,0,-1))
console.log(Math.max(3,8,7,4,3))
//math.random
console.log(Math.random()*5)

// Es6 features
// 1)let and const
let e=5;
e=6;
console.log(e)
const f=24;
console.log(f)

//Arrow functions
const g=()=>
    console.log("meghana")
g()
//default parameters

function k(x,y,z=300){
    console.log(x+y+z)
}
k(20,30)

//template literals
let m="meg"
function  n() {
    console.log(`hi ${m} how are you`)
    
}
n()