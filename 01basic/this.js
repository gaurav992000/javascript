// this works only on object not in function and this indicate current context
// function chai(){
//         let username = "hitesh"
//          console.log(this.username);
//      }
//      chai()

    //  const chai=function(){
    //     let username="gaurav"
    //     console.log(this.username)
    //  }
    //  chai()

    // in above both cases this.username is print undefined


    // ARROW
    // const chai=(num1,num2) => {
    //     return num1+num2;

    // }
    // console.log(chai(3,5));

    
    // implicit
    // const fun=(one,two) => (one+two)
    // if we want to return object
    // const cat=(three,four) => ({username:'abhinav'})
    // console.log(cat());

    // iife function its use when we want to excute function immediately
    (function(){
        console.log("dkjfkj");
    })();
    // in the last this parenthis is act as a obj which takes value and pass it to the function and after the pernthis semicolen is importent it tells that function is end
    // ANOTHER METHOD TO WRITE THIS IIFE FUNCTION AS A ARROY METHOD
    (()=>{
        
    })
    