// single ton object
const tinderuser=new Object()
// non single ton object decraltion
const tinder={}
tinder.id="123abc"
tinder.username="rahul"
// console.log(tinder)=>{ id: '123abc', username: 'rahul' }
const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"gaurav",
            lastname:"negi"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);
// combining object   
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
console.log({},obj1,obj2);
// { '1': 'a', '2': 'b' } { '3': 'c', '4': 'd' }
const obj3={...obj1,...obj2}
console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// imp scope in node enviroment is deffrent from scope in chrome console 