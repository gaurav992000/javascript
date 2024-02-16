const mysem=Symbol("key1")
const bkl={
    name:"raju",
    location:"delhi",
    email:"raju@gamil.com",
    "fullname":"rajubju",
    [mysem]:"mykey"
}
console.log(bkl.email)
// another method for accesing 
console.log(bkl["email"])
// fulllname cannot access by . method its access my only this method
// console.log(bkl["fullname"])
// console.log(bkl[mysem])
// change the obeject
// bkl.name="shyam"
// console.log(bkl)
// but if we freeze obejt and then chage value then it doesnot change
// Object.freeze(bkl)
// bkl.name="raja"
// console.log(bkl)

bkl.greeting=function(){
    console.log("hello bkl")
}
bkl.greeting1=function(){
    console.log(`hello bkl,${this.location}`)
}
// this.   is indicate that use this bkl object if there are another object then we use another method


console.log(bkl.greeting())
// hello bkl
console.log(bkl.greeting1())
// hello bkl,delhi
console.log(bkl.greeting)
// [Function (anonymous)]