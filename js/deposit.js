console.log('Hello from deposit')

//deposit

document.getElementById('deposit-btn').addEventListener('click',function(){
  const inputField = document.getElementById('deposit-field');
  const newdepositString = inputField.value;
  const newdeposit  = parseFloat(newdepositString);

  if (isNaN(newdeposit)) {
    alert('Please provide a valid number');
    return;
  }
  const totalDeposit = document.getElementById('deposit-add');
  const previousdepositAmountString = totalDeposit.innerText;
  const previousdepositAmount =parseFloat(previousdepositAmountString);
  const currentDeposit = previousdepositAmount + newdeposit;
  totalDeposit.innerText =currentDeposit;

  // total Balance
  const balanceAmount  = document.getElementById('total-balnce');
  const balanceAmountString = balanceAmount.innerText;
  const balance =parseFloat(balanceAmountString);

  const totalBalance = newdeposit + balance;
  balanceAmount.innerText =totalBalance;

  // clear 
  inputField.value ='';
})

