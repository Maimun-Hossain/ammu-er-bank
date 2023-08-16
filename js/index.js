document.getElementById('btn-submit').addEventListener('click', function(){
    const emailInput = document.getElementById('email-input');
    const emailText = emailInput.value;
    const passwordInput = document.getElementById('pass-input');
    const passwordText = passwordInput.value;
    if(emailText === 'ammu@gmail.com' && passwordText === '1234'){
        window.location.href = "ammu.html";
    }
    else{
        alert('invalid User')
    }
})