function validate() {
    document.getElementById('submit')
        .addEventListener('click', validate);
    const checkbox = document
        .querySelector('.pairContainer input[type="checkbox"]');
    checkbox.addEventListener('change', showOrHideFieldset);
    const companyInfoElement = document.getElementById('companyInfo');
 
    function validate(ev) {
        ev.preventDefault();
        const submitForm = ev.target.parentElement;
        const usernameField = submitForm.querySelector('#username');
        const isUsernameValid = checkIfUsernameIsValid(usernameField.value);
        let areAllInputsValid = true;
        isUsernameValid
            ? changeBorderToNone(usernameField)
            : changeBorderColorToRed(usernameField);
 
        const emailField = submitForm.querySelector('#email');
        const isEmailValid = checkIfEmailIsValid(emailField.value);
        isEmailValid
            ? changeBorderToNone(emailField)
            : changeBorderColorToRed(emailField);
 
        const passwordField = submitForm.querySelector('#password');
        const confirmPasswordField = submitForm
            .querySelector('#confirm-password');
        const password = passwordField.value;
        const confirmPassword = confirmPasswordField.value;
        const doesPasswordsMatch = checkIfPasswordAndConfirmPasswordAreValid
        (password, confirmPassword);
        doesPasswordsMatch
            ? changeBorderToNone(passwordField, confirmPasswordField)
            : changeBorderColorToRed(passwordField, confirmPasswordField);
 
        if (checkbox.checked) {
            const companyNumberField = document.getElementById('companyNumber');
            const isCompanyNumberValid =
                checkIfCompanyNumberIsValid(companyNumberField.value);
            isCompanyNumberValid
                ? changeBorderToNone(companyNumberField)
                : changeBorderColorToRed(companyNumberField);
        }
 
        const validDiv = document.getElementById('valid');
        if (areAllInputsValid) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
 
        function changeBorderColorToRed(...elements) {
            elements.forEach(e => e.style.borderColor = 'red');
            areAllInputsValid = false;
        }
    }
 
    function changeBorderToNone(...elements) {
        elements.forEach(e => e.style.border = 'none');
    }
 
    function showOrHideFieldset({target}) {
        target.checked
            ? companyInfoElement.style.display = 'block'
            : companyInfoElement.style.display = 'none';
    }
 
    function checkIfUsernameIsValid(inputUsername) {
        const regex = new RegExp(/^[A-Za-z0-9]{3,20}$/);
 
        return regex.test(inputUsername);
    }
 
    function checkIfEmailIsValid(inputEmail) {
        const regex = new RegExp(/^[^@.]+@[^@]*\.[^@]*$/);
 
        return regex.test(inputEmail);
    }
 
    function checkIfPasswordAndConfirmPasswordAreValid
    (inputPassword, inputConfirmPassword) {
        const regex = new RegExp(/^[\w]{5,15}$/);
 
        if (inputPassword !== inputConfirmPassword) {
            return false;
        } else if (!regex.test(inputPassword)) {
            return false;
        }
 
        return true;
    }
 
    function checkIfCompanyNumberIsValid(inputCompanyNumber) {
        return inputCompanyNumber >= 1000 && inputCompanyNumber <= 9999;
    }
}