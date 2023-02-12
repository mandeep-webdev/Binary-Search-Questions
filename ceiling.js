// Find ceiling of a number means the smallest number of an arr which is = or > the target

const findCeiling = (arr,target) => {
  debugger
  if(target > arr[arr.length - 1]) {
    return -1
  }
  let start = 0
  let end = arr.length - 1
  while(start <= end) {
    let mid = Math.floor((start + end )/2)
    if(target === arr[mid]) {
      return mid
    }
    if(target > arr[mid]){
      start = mid + 1
    }
    else {
      end = mid - 1
    }
  }
  return start
}


const result = findCeiling([2,4,8,13,21,24,33,40],122)
console.log(result)
