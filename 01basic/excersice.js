// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// // course.courseInstructor

// const {courseInstructor: instructor} = course
// const{price:rupey}=course;

// // console.log(courseInstructor);
// console.log(instructor);
// console.log(rupey);
// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

//  console.log(calculateCartPrice(200, 400, 500, 2000))
// function sum(arr, n) {
//     // Only change code below this line
//     if (n <= 0) {
//       return 0;
//     } else {
//       // Recursive case: sum(arr, n) = arr[n-1] + sum(arr, n-1)
//       return arr[n - 1] + sum(arr, n - 1);
//     }
  
//     // Only change code above this line
//   }
//   const myArray = [1, 2, 3, 4, 5];
// const n = 3; // Sum the first 3 elements

// console.log(sum(myArray, n)); 



// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for(let i=0;i<contacts.length;i++){
    if(name==contacts[i].firstName && prop in contacts[i] ){
      console.log('hlww');
        }

  }
  
  

  // Only change code above this line
}

lookUpProfile("Akira", "likes");
