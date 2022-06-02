function generateReport() {
    let cbs = document.querySelectorAll("thead tr th input");
    let colPos = [];
    for (let i = 0; i < cbs.length; i ++) {
        if (cbs[i].checked) {
            colPos.push(i);
        }
    }
 
    let finalResult = [];
 
    let data = document.querySelectorAll("tbody tr");
    for (let j = 0; j < data.length; j ++) {
        let currRow = data[j].children;
        let currItems = {};
        for (let k = 0; k < currRow.length; k ++) {
            if (colPos.includes(k)) {
                let label = cbs[k].name;
                currItems[label] = currRow[k].textContent;
            }
        }
        finalResult.push(currItems);
    }
 
    let jsonFinal = JSON.stringify(finalResult);
    let target = document.getElementById('output');
    target.value = jsonFinal;
}