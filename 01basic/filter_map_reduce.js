// FILTER FUNCTION
// FILTER FUNCTION TAKE CALLBACK FUNCTION

const mynums=[1,2,4,54,5]
// mynums.filter((num) => num>4) IN this case filter does not rerturn anything

// const newnums=mynums.filter((num) => num>4)
// console.log(newnums);
// const newnums=mynums.filter((num)=>{
//     return num>4
// })
// in line 9 if we use curlbraces in filter function insted of () the we have write return keyword for any return
// const newNums=[]
// mynums.forEach((num) => {
//     if (num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
//   const bookss=books.filter((item) =>item.genre==='History')
//   console.log(bookss)
//   const bookis=books.filter((item1)=> item1.publish>=2000)
// console.log(bookis)

// +++++++++Map function++++++++++
// map function return all values whereas filter return true values 
// const arr=[1,2,4,43,5]
// const newarr=arr.map((item)=> item>4)
// console.log(newarr)
// o/p  [ false, false, false, true, true ]
// const newarr=arr.map((item)=> item*4)
// console.log(newarr)
// o/p  [ 4, 8, 16, 172, 20 ]

// chain method  
// const arr=[1,2,4,43,5]
// const newnums=arr
//             .map((num)=> num*10)
//             .map((num)=>num+1)
//             .filter((num)=> num>=40)
// console.log(newnums)
