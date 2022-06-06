function sortArray(arr, type) {


    if (type === "asc") {
        arr.sort((a, b) => a - b);
    } else if (type === "desc") {
        arr.sort((a, b) => b - a); // desc
    }

    return arr; 
}    
sortArray([14, 7, 17, 6, 8], 'asc');