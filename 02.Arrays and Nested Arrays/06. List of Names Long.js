function listOfNames(input) {

    let sorted = input.sort((a, b) => a.localeCompare(b));
    
    for (let i = 0; i < input.length; i++) {
        let number = i + 1;
        console.log(`${number}.${input[i]}`);
    }
  }