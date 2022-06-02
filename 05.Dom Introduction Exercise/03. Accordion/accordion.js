function toggle() {
    let textElement = document.getElementById("extra");
    let buttonElement = document.getElementsByClassName("button")[0]  // to get the first element
    // or get.ElementsByTagName("span")[0] // whichever is easier // span not recommended on large content

    if (buttonElement.textContent == "More") {
        buttonElement.textContent = "Less";
        textElement.style.display = "block"; // always lowercase
    } else {
        buttonElement.textContent = "More";
        textElement.style.display = "none"; // always lowercase
    }
}