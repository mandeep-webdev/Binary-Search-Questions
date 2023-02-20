// find the Rotation Count in Rotated Sorted Array
// Given -- 1. array with distinct values , sorted in ascen order, has been rotated clockwise k number of times. Find the value of k

// Eg: [15,18,2,3,6,12] here k = 2

const countRotations = (arr) => {
  // no. of count means Pivot Position + 1
  const pivot = findPivot(arr)
  // if(pivot === -1){
  //   // means it is not a rotated array
  //   return 0
  // }
  // else {
  //   return pivot + 1
  // }
  return pivot + 1 // if findPivot returns -1 then ans would be 0. Hence no need of extra condition like above
}

const findPivot = (arr) => {
  
  let start = 0
  let end = arr.length - 1
  
  while(start<=end){
    let mid = Math.floor((start + end)/2)
    
    if(mid < end && arr[mid] > arr[mid + 1])
    {
      return mid 
    }
    if(mid > start && arr[mid] < arr[mid-1]){
      return mid - 1
    }
    if(arr[start] > arr[mid]){
      end = mid - 1
    }
    else{
      start = mid + 1
    }
  }
  return -1
}


const ans = countRotations([1,2,3,4,5])
console.log(`No. of counts ---> ${ans} times`)