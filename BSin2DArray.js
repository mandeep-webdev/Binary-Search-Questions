// Given -- sorted array row wise and col wise
//   0  1  2  3
// 0|12 23 34 40
// 1|20 25 39 45
// 2|33 40 44 50
// 3|39 42 52 56

const matrix = [
  [12,23,34,40],
  [20,25,39,45],
  [33,40,44,50],
  [39,42,52,56]
]
const search = (matrix,target) => {
  let row = 0
  let col = matrix.length - 1

  while(row<matrix.length && col>=0){
    // make 3 checks = < or > target
    if(matrix[row][col] === target){
      return [row,col]
    }
    if(matrix[row][col] < target){
      row++
    }
    else{
      col--
    }
  }
  return [-1,-1]
}

const result = search(matrix,25)
console.log(result)