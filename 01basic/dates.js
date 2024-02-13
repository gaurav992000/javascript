const date=new Date()
console.log(date)
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date)
let mytimestam=Date.now()
console.log(mytimestam)
// console.log(Date.now()/1000)    1707383912.362
let newDate =new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())
newDate.toLocaleDateString('default',{month})