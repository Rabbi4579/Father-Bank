document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositValueString = depositField.value;
    const depositValue = parseInt(depositValueString);
    
    if(isNaN(depositValue)){
        alert('Please provide valid number');
        return;
    }
    const depsoitAmount = document.getElementById('deposit-amount');
    const depsoitAmountValueString = depsoitAmount.innerText;
    const depsoitAmountValue = parseFloat(depsoitAmountValueString);

    const totalDeposit = depsoitAmountValue + depositValue;
    depsoitAmount.innerText = totalDeposit;

    const totalBalnace = document.getElementById('total-balnace');
    const totalBalnaceValueString = totalBalnace.innerText;
    const totalBalnaceValue = parseFloat(totalBalnaceValueString);

    const balanceTotal = totalBalnaceValue + depositValue;
    totalBalnace.innerText = balanceTotal;


    depositField.value = ''

})