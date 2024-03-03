// for of loop
// [{},{},{}]

// for(const iterator of object)
// const arr=[2,4,5,3]
// for (const num of arr) {
//     console.log(num);

    
// }
// let greeting='hello world!'
// for(let greet of greeting){
//     console.log(greet);
// }

// +++++++++++++++MAP+++++++++++ MAP IS OBJECT
//  The Map object in JavaScript is a collection of key-value pairs where each key and value can be of any data type.
// let mymap=new Map();
// mymap.set('name','john');
// mymap.set('age',25);
// mymap.set(24,'jack');
// console.log(mymap);
// for(const [key,value] of mymap){
//     console.log(key,'-',value);
// }   FOR IN LOOP DOES NOT WORK IN  MAP FUNCTION BECAUSE IT IS NOT ITRETOR



// we can not iterate for(const [key,value] of mymap) in a object
const myobject={
    game1:'fnc',
    game2:'fifa'
}
for(const keys in myobject){
    console.log(keys)
// console.log(`${keys} =>${myobject[keys]}`);
}


// const programming=['js','python','java','cpp']
// for(const key in programming){
//     console.log(programming[key])
// }

//++++++++++ FOR EACH LOOP ++++++++++++++
// array.forEach(function(currentValue, index, arr), thisValue)
// const coding=['js','cs','php']
// coding.forEach(function (val){
//     console.log(val);
// }
// )

// BY ARROW FUNCTION
// coding.forEach( (item) =>{
//     console.log(item)
// })
// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)
// coding.forEach((val,index,arr) =>{
//     console.log(val,index,arr);
// })
// output   js 0 [ 'js', 'cs', 'php' ]
// cs 1 [ 'js', 'cs', 'php' ]
// php 2 [ 'js', 'cs', 'php' ]

// +++++object in array++++
// const mycoding=[
//     {
//         lname:'java',
//         lfilename:'js'
//     },
//     {
//         lname:'javascript',
//         lfilename:'java'
//     },
//     {
//         lname:'python',
//         lfilename:'py'
//     },
// ]
// mycoding.forEach(function(item){
//     console.log(item);
//     // 
// })
// mycoding.forEach((item)=>{
//     console.log(item.lfilename)
//     console.log(item)
// })