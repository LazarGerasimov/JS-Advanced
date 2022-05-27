function magicMatrices(matrix) {
 
    let row = matrix[0].reduce((a, b) => a += b);
 
    for (let i = 0; i < matrix[0].length; i++) {
 
        let column = 0;
 
        for (let j = 0; j < matrix.length; j++) {
 
            let arr = matrix[j];
 
            column += arr[i];
        }

        //console.log(row);
        //console.log(column);
 
        if (row != column) {
 
            return false;
           
        }
    }

    
 
    return true;
}

console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ]))