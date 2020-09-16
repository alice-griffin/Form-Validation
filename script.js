const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('password-check');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    //get values from inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    if (usernameValue === '') {
        //show error and error class
        setErrorFor(username, 'Username cannot be blank.');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank.');
    } else if (!validateEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid!')
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        //show error and error class
        setErrorFor(password, 'Password cannot be blank.');
    } else {
        setSuccessFor(password);
    }

    if (passwordCheckValue === '') {
        setErrorFor(passwordCheck, 'Password cannot be blank.')
    } else if (passwordValue !== passwordCheckValue) {
        setErrorFor(passwordCheck, 'Password does not match.')
    } else {
        setSuccessFor(passwordCheck);
    }
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = "form-control error";
}

function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
}
