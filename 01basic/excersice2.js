// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]
// console.log(users[0]);

// function lookUpProfile(name, prop) {
//     for (let x = 0; x < contacts.length; x++) {
//       if (contacts[x].firstName === name) {
//         if (contacts[x].hasOwnProperty(prop)) {
//           return contacts[x][prop];
//         } else {
//           return "No such property";
//         }
//       }
//     }
//     return "No such contact";
//   }
  
//   console.log(lookUpProfile("Akira", "likes"));
// const sum = (...kk) => {
 
//   let total = 0;
//   for (let i = 0; i < kk.length; i++) {
//     total +=kk[i];
//   }
//   return total;
// }
// console.log(sum(1,2,4,4))

const user = { name: 'John Doe', age: 34 };
const { name: userName, age: userAge } = user;
console.log(user.name);
