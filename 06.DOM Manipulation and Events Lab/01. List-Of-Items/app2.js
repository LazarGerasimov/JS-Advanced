function addItem() {

    let inputText = document.getElementById('newItemText').value;
    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputText;
    document.getElementById('items').appendChild(newLiElement);


}