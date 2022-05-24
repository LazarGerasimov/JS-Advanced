function elementN(arr, num) {

    let newArr = []
  
    for (let i = 0; i < arr.length; i = i + num) {
        newArr.push(arr[i]);
    } 
    
    return newArr;
  }