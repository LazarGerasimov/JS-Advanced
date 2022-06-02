function addItem() {
    let inputElement = document.getElementById('newItemText');
    let button = document.querySelector("body > main > input[type=button]:nth-child(3)")
    let itemsElement = document.getElementById('items');

    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    
    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';

    liElement.appendChild(deleteElement);
    itemsElement.appendChild(liElement);

    deleteElement.addEventListener('click', onDelete)
    
    function onDelete(e) {
        e.currentTarget.parentElement.remove(); // or parentNode
    };

    

}  