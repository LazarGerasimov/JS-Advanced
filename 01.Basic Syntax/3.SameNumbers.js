function sameNumbers(num) {

    let numAsString = num.toString();
    let areSame = true;
    let sum = 0;

    for (let i = 0; i < numAsString.length - 1; i++) {
        let element = numAsString[i];
        let nextElement = numAsString[i + 1];
        if (element !== nextElement) {
            areSame = false;
        }
    }

    for (let number of numAsString) {
        let elementNumber = Number(number);
        sum += elementNumber;
    }

    if (!areSame) {
        console.log(`false`)
    } else {
        console.log(`true`)
    }

    console.log(sum)

}