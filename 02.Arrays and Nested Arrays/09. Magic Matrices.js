function magicMatrices(matrix) {

    let isMagical = false; 
    let sumRows = 0;
    let sumCols = 0;

    let rowSize = matrix[0].length;
    

    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (let colIndex = 0; colIndex < rowSize; colIndex++) {
            sumRows += matrix[rowIndex][colIndex];
        }
    }

    for (let colIndex = 0; colIndex < rowSize; colIndex++) {
        for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
            sumCols += matrix[colIndex][rowIndex];
        }
    }

    console.log(sumCols);
    console.log(sumRows);

    if (sumRows == sumCols) {
        return true;
    } 

    return false;

    /*for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (let colIndex = 0; colIndex < matrix[rowIndex].length - 1; colIndex++) {
            if (matrix[rowIndex][colIndex] === matrix[rowIndex][colIndex + 1]) {
                counter++;
            }
        }
    }

    for (let colIndex = 0; colIndex < rowSize; colIndex++) {
        for (let rowIndex = 0; rowIndex < matrix.length - 1; rowIndex++) {
            if (matrix[rowIndex][colIndex] === matrix[rowIndex + 1][colIndex]) {
                counter++;
            }
        }
    } */

    

}
/* magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ) */

console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ]))