// forof loop
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
// }
// we can not iterate for(const [key,value] of mymap) in a object
const myobject={
    game1:'fnc',
    game2:'fifa'
}
for(const keys in myobject){
    // console.log(keys)
console.log(`${key} =>${myobject[key]}`);
}