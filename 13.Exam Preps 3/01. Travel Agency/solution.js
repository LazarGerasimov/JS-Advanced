window.addEventListener('load', solution);

function solution() {
  
let inputFullName = document.getElementById('fname');          // input fields
let inputEmail = document.getElementById('email');  
let inputPhoneNumber = document.getElementById('phone');  
let inputAddress = document.getElementById('address');  
let inputPostalCode = document.getElementById('code');  

let submitBtn = document.getElementById('submitBTN');       // create buttons
let editBtn = document.getElementById('editBTN');
let continueBtn = document.getElementById('continueBTN');

let leftForm = document.getElementById('form');                  // get forms
let rightForm = document.getElementById('information');
let uLparentPreview = document.getElementById('infoPreview') // main UL element!

let blockDiv = document.getElementById('block');



submitBtn.addEventListener('click', onSubmit);       // event listeners


function onSubmit(e) {
    //e.preventDefault();

    if (inputFullName.value == '' || inputEmail.value == '') {
      return;
    }

    //create elements in preview tab

    let liFullName = document.createElement('li');   // append to ULparent
    liFullName.textContent = `Full Name: ${inputFullName.value}`;
    uLparentPreview.appendChild(liFullName);

    let liEmail = document.createElement('li');
    liEmail.textContent = `Email: ${inputEmail.value}`;
    uLparentPreview.appendChild(liEmail);

    let liPhone = document.createElement('li');
    liPhone.textContent = `Phone Number: ${inputPhoneNumber.value}`;
    uLparentPreview.appendChild(liPhone);

    let liAddress = document.createElement('li');
    liAddress.textContent = `Address: ${inputAddress.value}`;
    uLparentPreview.appendChild(liAddress);

    let liPostalCode = document.createElement('li');
    liPostalCode.textContent = `Postal Code: ${inputPostalCode.value}`;
    uLparentPreview.appendChild(liPostalCode);
    // UL created


    submitBtn.disabled = true;                // buttons functionality
    editBtn.disabled = false;
    continueBtn.disabled = false;

    // save references to avoid slice operation

    let tempFullName = inputFullName.value;
    let tempEmail = inputEmail.value;
    let tempPhone = inputPhoneNumber.value;
    let tempAddress = inputAddress.value;
    let tempPostalCode = inputPostalCode.value;

    inputFullName.value = '';            // clear input fields
    inputEmail.value = '';
    inputPhoneNumber.value = '';
    inputAddress.value = '';
    inputPostalCode.value = '';


    editBtn.addEventListener('click', onEdit);              // might have to be a sep function

    function onEdit(e) {

      inputFullName.value = tempFullName;
      inputEmail.value = tempEmail;
      inputPhoneNumber.value = tempPhone;
      inputAddress.value = tempAddress;
      inputPostalCode.value = tempPostalCode;

      submitBtn.disabled = false;                // buttons functionality
      editBtn.disabled = true;
      continueBtn.disabled = true;

      uLparentPreview.textContent = '';

    } //onEdit closing bracket
    continueBtn.addEventListener('click', onContinue);  // might have to be a sep function
    
    function onContinue(e) {

      blockDiv.textContent = ''
      let message = document.createElement('h3');
      message.textContent = 'Thank you for your reservation!';
      blockDiv.appendChild(message);

    } //onContinue closing bracket
    
} // onSubmit closing bracket


} // solution closing bracket
