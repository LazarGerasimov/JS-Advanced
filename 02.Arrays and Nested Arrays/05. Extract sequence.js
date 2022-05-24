function increasingSubset(input) {

    let maxNumber = 0; 
    let newArr = [];
  
    for (let i = 0; i < input.length; i++) {
          let currentNumber = Number(input[i]);
          if (currentNumber >= maxNumber) {
              maxNumber = currentNumber;
              newArr.push(maxNumber)
          }
                
    }
    return newArr;
  }