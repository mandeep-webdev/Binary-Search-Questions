// search element in rotated array which is sorted in ascending order and contains only distinct values

// Note --- we can make it shorten by appling recursion


const findPivot = (arr) => {
  let start = 0
  let end = arr.length - 1
  while(start <= end) {
    let mid = Math.floor((start + end)/2)
    // check 4 cases...
    if(mid < end && arr[mid] > arr[mid + 1])
    {
       // if mid is the last elment of an arr then need an extra check which is 
       // mid < end 
      return mid
      //return BS(arr,0,start,arr[mid])
    }
    if(mid > start && arr[mid] < arr[mid - 1]){
      return mid - 1
      //return BS(arr,0,start,arr[mid - 1])
    } 
    if(arr[start] > arr[mid]){
      end = mid - 1
    } else {
      start = mid + 1
    }
   
  }
  return -1
}
const search = (nums,target) => {
  const pivot = findPivot(nums)
  // if you not find the pivot it means array is not rotated then do normal BS
  if(pivot === -1)
  {
    return BS(nums,target,0,nums.length - 1)
  }
  
  // if pivot is found then you have found two ascen sorted array
  // follow 3 cases...
  if(target === nums[pivot]){
      return pivot
    }
  if(target>= nums[0]){
      return BS(nums,target,0,pivot - 1)
    } else {
      return BS(nums,target,pivot + 1, nums.length - 1)
    }
  
  return -1
}

const BS = (arr,target,start,end) => {

  while(start <= end) {
    let mid = Math.floor((start + end)/2)
    if(target === arr[mid]){
      return mid
    }
    if(target > arr[mid]) {
      start = mid + 1
    }
    else{
      end = mid - 1
    }
  }
  return -1
}

const ans = search([4,5,6,7,0,1,2],0)
console.log(ans)
