function sortArray(arr, type) {

    const methods = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    };

    arr.sort(methods[type]);

    return arr;


}
console.log(sortArray([14, 7, 17, 6, 8], "asc"));