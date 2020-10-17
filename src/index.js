
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let towelSort = [];

  if (!matrix) return towelSort;
  
  for (let i = 0; i < matrix.length; i++) {
    let towelArr = matrix[i];
    
    if (matrix.indexOf(towelArr) % 2 !== 0) {
      towelArr = matrix[i].reverse();
    }

    towelSort = towelSort.concat(towelArr);
  }
  return towelSort
}
