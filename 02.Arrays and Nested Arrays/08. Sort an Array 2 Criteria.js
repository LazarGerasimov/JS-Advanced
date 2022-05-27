function sorting2criteria(input) {

    let newArr = [];

    input.sort((a, b) => {
    
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });    

    console.log(input.join("\n"))
}
sorting2criteria(['alpha', 
'beta', 
'gamma']
)