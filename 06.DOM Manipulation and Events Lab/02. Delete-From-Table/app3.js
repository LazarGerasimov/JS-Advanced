function deleteByEmail() {

    let inputElement = document.querySelector('body > label > input[name = "email"]')

    let tableElements = Array.from(document.querySelectorAll('tbody tr'));

    let resultID = document.querySelector("#result");

    for (let row of tableElements) {
        if (row.children[1].textContent == inputElement.value) {
            row.remove();
            resultID.textContent = 'Deleted.'
        } else {
            resultID.textContent = 'Not found.'
        }
    }

    

}