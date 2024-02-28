// implicite control flow
// if(balance>500){}

// if(balance>5000){}
// const month=4;
// switch (month) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// let person =prompt("enter your name","ghg")
// console.log(`my name is ${person}`)

// ++++++++truthy and false value++++++
// false values  => false, 0 , -0,BigInt , 0n,"",null,undefined,NaN
// truthy values=> which are not false value all are truthy values
// for exampel "0",'false'," ",[],{},function()
const age={ram:1,shaym:2}
console.log(Object.keys(age))
console.log(age)

// Nullish Coalescing Operator (??): null undefined
// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// terniary operator
// condition ? true:false
const iceteaprice=200
iceteaprice<=80 ? console.log("less than 80"): console.log("more than 80")



