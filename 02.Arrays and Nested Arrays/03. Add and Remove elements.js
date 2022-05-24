function addAndRemove(input) {

    let newArr = [];
    let currentNumber = 1; 
  
    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        if (command === "add") {
            newArr.push(currentNumber);
            } else if (command === "remove") {
            newArr.pop();
        }
        currentNumber++;
    }
  
    if (newArr.length >= 1) {
      console.log(newArr.join("\n"));
    } else {
      console.log(`Empty`)
    }
  }