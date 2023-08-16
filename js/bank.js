document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositText = depositInput.value;
    const depositnum = parseFloat(depositText);
    
    depositInput.value = '';

    if(isNaN(depositnum)){
        alert('Invalid input. Please enter a valid number')
        return;
    }
    // output section
    const DepositOldValue = document.getElementById('deposit-old-value');
    const depositOldText = DepositOldValue.innerText;
    const OldValueNum = parseFloat(depositOldText);
    const totalDepositValue = OldValueNum + depositnum;
    DepositOldValue.innerText = totalDepositValue;
    

    
    // balance section
    const BalanceOldValue = document.getElementById('Balance-old-value');
    const BalanceOldText = BalanceOldValue.innerText;
    const oldBalanceNum = parseFloat(BalanceOldText);
    const NewBalance = oldBalanceNum + depositnum;
    BalanceOldValue.innerText=NewBalance;
})
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const WithdrawInput = document.getElementById('withdraw-input');
    const withdrawText = WithdrawInput.value;
    const withdrawnum = parseFloat(withdrawText);

    WithdrawInput.value = '';
    
    if(isNaN(withdrawnum)){
        alert('Invalid input. Please enter a valid number')
        return;
    }
     // balance section
     const BalanceOldValue1 = document.getElementById('Balance-old-value');
     const BalanceOldText1 = BalanceOldValue1.innerText;
     const oldBalanceNum1 = parseFloat(BalanceOldText1);
     const NewBalance1 = oldBalanceNum1 - withdrawnum;

    if(withdrawnum > oldBalanceNum1){
        alert("You can't withdraw more than you have!");
        return;
    }
    // output section
    const WithdrawOldValue = document.getElementById('withdraw-old-value');
    const WithdrawOldText = WithdrawOldValue.innerText;
    const OldValueNum1 = parseFloat(WithdrawOldText);
    const totalwithdrawValue = OldValueNum1 + withdrawnum;
    WithdrawOldValue.innerText = totalwithdrawValue;

    BalanceOldValue1.innerText=NewBalance1;
})