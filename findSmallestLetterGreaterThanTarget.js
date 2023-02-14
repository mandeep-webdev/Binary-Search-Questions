// find smallest letter greater than the target -- same problem as ceiling method 
// Note - letters are wrap around

const findSmallestLetterGreaterThanTarget = (arr,target) => {
  debugger
  
  let start = 0
  let end = arr.length - 1
  // if(target > arr[arr.length - 1]) {
  //   return start % arr.length
  // }
  // if(start === arr.length) {
  //   return 0
  // }
  while(start <= end) {
    let mid = Math.floor((start + end )/2)
    if(target > arr[mid]){
      start = mid + 1
    }
    else {
      end = mid - 1
    }
  }
  return arr[start % arr.length]
}

const result 
 = findSmallestLetterGreaterThanTarget(['c','f','j'],'m')
console.log(result)