// compare same data type 
// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)
// the reasion is that an equality check==and comparisons <<>=<= work differently.comparisons convert null to a Number,treating it as 0.thats why null>=0 is true and null>0 is fasle
// console.log("2"==2); 
// console.log("2"===2) this show error 
const id=Symbol("123")
const anotherid=Symbol("123")
console.log(id==anotherid)
// false value

// array object function non primitive data type

let heros=["shaktiman","nagraj","doga"]
console.log(heros);
// 2 Object
let obo={
    name:"gaurav"
    age:22
}
const myfunction=function(){}
