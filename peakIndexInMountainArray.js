// Peak Index in Mountain Array or bitonic array
// find the largest element in an arr
// [2,4,8,9,5,3,2,1]



const findPeakIndex = (arr) => {
  debugger
  let start = 0
  let end = arr.length - 1
  while(start < end) {
    let mid = Math.floor((start + end)/2)
    if(arr[mid] > arr[mid + 1]) {
      // case1 -- if this condn is true which means you are in desc part of an array
      end = mid
      
    }
    else {
      // you are in ascen part of an array
      start = mid + 1
    }
  }
  return start
}

const result = findPeakIndex([2,4,8,9,5,3,2,1])
console.log(result)

