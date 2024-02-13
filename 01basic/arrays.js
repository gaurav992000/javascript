const arr=[0,1,2,4,5]
// console.log(arr)
// console.log(arr[2])
// converting array into string
// const newarr=arr.join()
// console.log(newarr)=>0,1,2,4,5 convert into string
// slice splice    splice manupulate original array after applying this method  splice inculde range

const arr1=arr.slice(1,3)
// console.log(arr1)=>[ 1, 2 ]
// console.log(arr)=.>[ 0, 1, 2, 4, 5 ]

const arr2=arr.splice(1,3)
// console.log(arr2)=>[ 1, 2, 4 ]
// console.log(arr)=>[ 0, 5 ]