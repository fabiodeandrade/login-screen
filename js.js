// validating the form

let email = document.querySelector('.login-input');
let password = document.querySelector('.password-input');
let submit = document.querySelector('.submit-input');
let form = document.querySelector('.form');
let error = document.querySelector('.error')

form.addEventListener('submit', (e) => {
    let msg = [];

    if (email.value === '' || email.value == null) {
        msg.push('Invalid e-mail')
    }





    if (msg.length > 0) {
        e.preventDefault();
        error.innerText = msg.join(' e ')
    }
})