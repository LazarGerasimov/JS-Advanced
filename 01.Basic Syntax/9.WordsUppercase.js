function wordsUpperCase(string) {

    let regex = /[A-Za-z0-9]+/g;
    let match = string.match(regex);
    let newArr = [];

    for (let word of match) {
        word = word.toUpperCase();
        newArr.push(word);
    }

    console.log(newArr.join(", "))

}