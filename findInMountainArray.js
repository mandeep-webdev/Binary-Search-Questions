const search = (arr,target) => {
  debugger
  const peak = findPeakIndex(arr)
  const firstTry = orderAgnosticBS(arr,target,0,peak)
  if(firstTry !== -1){
    return firstTry
  }
  else {
   return orderAgnosticBS(arr,target,peak + 1, arr.length - 1)
  
  }
}

const findPeakIndex = (arr) => {
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

const orderAgnosticBS = (arr,target,start,end) => {

  let isAsc = arr[start] < arr[end]
  while(start <= end) {
    let mid = Math.floor((start + end) / 2)
    if(target === arr[mid]) {
      return mid
    }
    if(isAsc) {
      if(target < arr[mid]){
        end = mid - 1
      
    } else {
        start = mid + 1
    } 
      
    }
    if(!isAsc) {
      if(target < arr[mid]) {
        start = mid + 1
      }
      else {
        end = mid - 1
      }
     
    }
    
  }
  return -1
}

const result = search([3,4,7,8,9,5,3,1],9)
console.log(result)