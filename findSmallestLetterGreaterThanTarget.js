
const findSmallestLetterGreaterThanTarget = (arr,target) => {
  let s = 0
  let e = arr.length - 1
  while (s <= e) {
    let mid = Math.floor((s + e)/2)
    if (target >= arr[mid]) {
      s = mid + 1
    }
    if (target < arr[mid]) {
      return mid
    }
  }
}

const result 
 = findSmallestLetterGreaterThanTarget(['c','f','k','u','w'],"d")
console.log(result)