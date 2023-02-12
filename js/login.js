document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const emailFieldValue = emailField.value;
    console.log(emailFieldValue)

    const passwordField = document.getElementById('password-field');
    const passwordFieldValue =passwordField.value;
    console.log(passwordFieldValue)

    if(emailFieldValue === 'fozlerabbi1120@gmail.com' && passwordFieldValue === 'rabbi1234'){
        window.location.href = 'bank.html'
    }
})