function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
    .forEach(b => b.addEventListener('click', toggle));

    function toggle(event) {
        const profile = event.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if(isActive) {
            let div = profile.querySelector('div');
            
            if (event.target.textContent == 'Show more') {
                div.style.display = 'block';
                event.target.textContent = 'Hide it';
            } else {
                div.style.display = '';
                event.target.textContent = 'Show more';
            }
        }
    }
}