// Find floor of a number means the greater number of an arr which is = or < the target

const findFloor = (arr,target) => {
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
  return end
}


const result = findFloor([2,4,8,13,21,24,33,40],35)
console.log(result)
