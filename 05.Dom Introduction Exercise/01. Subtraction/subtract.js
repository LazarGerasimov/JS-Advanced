function subtract() {
    let firstElementValue = document.getElementById("firstNumber").value;
    let secondElementValue = document.getElementById("secondNumber").value;
    let resultElement = document.getElementById("result");
    resultElement.textContent = Number(firstElementValue) - Number(secondElementValue);
    
}