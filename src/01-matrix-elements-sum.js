/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = matrix[0].reduce((accum, currentValue) => accum + currentValue);

  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix[i].length - 1; j >= 0; j--) {
      if (!Array.isArray(matrix[i - 1])) {
        break;
      }

      if (matrix[i - 1][j] !== 0) {
        result += matrix[i][j];
      }
    }
  }

  return result;
}

module.exports = getMatrixElementsSum;
