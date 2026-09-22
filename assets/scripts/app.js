const signInBtn = document.querySelector('#signin-btn');
const pwdBx = document.querySelector('#pwd-box');
const hardCodePwd = 'lasagna';

signInBtn.addEventListener('click', function () {
    const userPwd = pwdBx.value;

    if (userPwd === hardCodePwd) {
        sessionStorage.setItem('signedIn', 'true');
        window.location.href = 'admin.html';
    } else {
        document.querySelector('#message').textContent = 'Incorrect password. Try again.';
        pwdBx.value = '';
    }
});