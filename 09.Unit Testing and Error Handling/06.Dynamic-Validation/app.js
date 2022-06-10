function validate() {
    let emailElement = document.getElementById('email');
    let pattern = new RegExp('^[a-z]+@[a-z]+\.[a-z]+');

    emailElement.addEventListener('change', () => {
        if (pattern.test(emailElement.value)) {
            emailElement.classList.remove('error');
        } else {
            emailElement.classList.add('error');
        }
    })
}