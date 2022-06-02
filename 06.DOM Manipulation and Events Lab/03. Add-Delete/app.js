function addItem() {
    
    const input = document.getElementById("newItemText");

    const liElement = document.createElement("li");

    liElement.textContent = input.value;

    // create [delete] anchor

    const deleteBtn = document.createElement("a");
    deleteBtn.textContent = "[Delete]";
    deleteBtn.href = "#";
    liElement.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onDelete);

    document.getElementById("items").appendChild(liElement);

    input.value = "";

    function onDelete(event) {
        event.target.parentElement.remove();
}

}



