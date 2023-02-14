// find the first and last position of a target in sorted array
// [1,2,4,4,4,4,5,4,8] target is 4 
// output = [2,7]


const findPosition = (nums,target) => {
  const ans = [-1,-1]
   ans[0] = search(nums, target, true);
  
   if (ans[0] != -1) {
      ans[1] = search(nums, target, false);
      }
  
  //  ans[0] = search(nums,target,true)
  //  ans[1] = search(nums,target,false)
 
  return ans
}

 // this function just returns the index value of target
const search = (nums, target, findStartIndex) => {
  let ans = -1
  let start = 0
  let end = nums.length - 1
  while(start <= end) {
    let mid = Math.floor((start+end)/2)
    if(target > nums[mid])
    {
      start = mid + 1
    } else if(target < nums[mid]){
      end = mid - 1
    } else {
      // potential ans found
      ans = mid
      
      if(findStartIndex) {
        end = mid - 1
      }
      else {
        start = mid + 1
      }
    }
  }
    return ans
}


const result = findPosition([5,7,7,8,8,10],8)
console.log(result)