// FILTER FUNCTION
// FILTER FUNCTION TAKE CALLBACK FUNCTION

const mynums=[1,2,4,54,5]
// mynums.filter((num) => num>4) IN this case filter does not rerturn anything

// const newnums=mynums.filter((num) => num>4)
// console.log(newnums);
const newnums=mynums.filter((num)=>{
    return num>4
})
// in line 9 if we use curlbraces in filter function insted of () the we have write return keyword for any return
const newNums=[]
mynums.forEach((num) => {
    if (num>4){
        
    }
})
