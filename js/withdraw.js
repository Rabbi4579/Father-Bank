document.getElementById('withdraw-btn').addEventListener('click', function(){

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawValueString = withdrawField.value;
    const withdrawValue = parseFloat(withdrawValueString)
    if(isNaN(withdrawValue)){
        alert('Please provide valid number');
        return;
    }
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountValueString = withdrawAmount.innerText;
    const withdrawAmountValue = parseFloat(withdrawAmountValueString)

    


    //total balance 
    const totalBalance = document.getElementById('total-balnace')
    const totalBalanceValueString = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceValueString)
    if(withdrawValue > totalBalanceValue){
        alert('baap er bank ato taka nai')
        return;

    }
    const totalWithdraw = withdrawAmountValue + withdrawValue;
    withdrawAmount.innerText = totalWithdraw;

    
    const balanceTotal = totalBalanceValue - withdrawValue;
    totalBalance.innerText = balanceTotal;
    console.log(typeof totalBalanceValue)

    withdrawField.value = ''
})