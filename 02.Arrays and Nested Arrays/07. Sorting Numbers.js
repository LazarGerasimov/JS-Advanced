function sortingNumbers(input) {

    let newArr = [];
    let sorted = input.sort((a, b) => a - b);
    const originalLength = input.length;

    for (let i = 0; i < originalLength; i++) {

        let takenNumber;

        if (i % 2 === 0) {
            takenNumber = sorted.shift();
            newArr.push(takenNumber);
            
        } else {
            takenNumber = sorted.pop();
            newArr.push(takenNumber);
            
        }
    }

   return newArr;

}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);