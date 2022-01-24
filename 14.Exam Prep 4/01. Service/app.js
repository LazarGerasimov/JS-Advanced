window.addEventListener("load", solve);


function solve() { 

let inputProductType = document.getElementById('type-product');  // Computer / Phone
let inputDescription = document.getElementById('description');
let inputClientName = document.getElementById('client-name');
let inputPhone = document.getElementById('client-phone');       // input fields

let sendBtn = document.querySelector("#right > form > button");   // double check later
sendBtn.addEventListener('click', onSend);

let receivedOrders = document.getElementById('received-orders');    // main parent for received
let completedOrders = document.getElementById('completed-orders');

function onSend(e) {
    e.preventDefault();

    if (inputDescription.value == '' || inputClientName.value == '' || inputPhone.value == '') {
        return;
    }

    //element creation

    let divReceived = document.createElement('div');
    divReceived.className = 'container';
    receivedOrders.appendChild(divReceived);

    let h2 = document.createElement('h2');
    h2.textContent = `Product type for repair: ${inputProductType.value}`;         // double check
    divReceived.appendChild(h2);

    let h3 = document.createElement('h3');
    h3.textContent = `Client information: ${inputClientName.value}, ${inputPhone.value}`
    divReceived.appendChild(h3);

    let h4 = document.createElement('h4');
    h4.textContent = `Description of the problem: ${inputDescription.value}`
    divReceived.appendChild(h4);

    let startBtn = document.createElement('button');   // buttons creation
    startBtn.className = 'start-btn';
    startBtn.textContent = 'Start repair';
    divReceived.appendChild(startBtn);

    let finishBtn = document.createElement('button');
    finishBtn.className = 'finish-btn';
    finishBtn.textContent = 'Finish repair';
    finishBtn.disabled = true;
    divReceived.appendChild(finishBtn);                             // disable finish button

    startBtn.addEventListener('click', onStart);
    finishBtn.addEventListener('click', onFinish);

    //create temps

    let tempProduct = inputProductType.value;
    let tempDescription = inputDescription.value;
    let tempClientName = inputClientName.value;
    let tempPhone = inputPhone.value;

    inputProductType.value = '';
    inputDescription.value = '';
    inputClientName.value = '';
    inputPhone.value = '';

    function onStart(e) {
        e.preventDefault();                           // double check

        startBtn.disabled = true;
        finishBtn.disabled = false;

    } // onStart closing bracket

    function onFinish(e) {
        e.preventDefault();
        // elements creation

        let div_finish = document.createElement('div');
        div_finish.className = 'container';
        completedOrders.appendChild(div_finish);

        let h2_finish = document.createElement('h2');
        h2_finish.textContent = `Product type for repair: ${tempProduct}`;
        div_finish.appendChild(h2_finish);

        let h3_finish = document.createElement('h3');
        h3_finish.textContent = `Client information: ${tempClientName}, ${tempPhone}`;
        div_finish.appendChild(h3_finish);

        let h4_finish = document.createElement('h4');
        h4_finish.textContent = `Description of the problem: ${tempDescription}`;
        div_finish.appendChild(h4_finish);

        e.currentTarget.parentElement.remove()           // mega important

    } // onFinish closing bracket

    let clearBtn = document.querySelector("#completed-orders > button") // or getbyclassname
    clearBtn.addEventListener('click', onClear);

} // on send closing bracket

function onClear(e) {

    e.preventDefault();

    let clearDiv = Array.from(document.querySelectorAll('#completed-orders .container')).forEach(x => x.remove());
    
    //console.log(clearDiv.textContent);
    //console.log(clearDiv);
    //console.log(clearDiv.length)
}


} //solve closing bracket


