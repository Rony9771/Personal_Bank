// //withdraw
// document.getElementById('withdraw-btn').addEventListener('click',function(){
//   //console.log("clicked");
//   const TextField = document.getElementById('withdraw-field');
//   const withdrawString = TextField.value;
//   const newwithdraw =parseFloat(withdrawString)


// //   if (isNaN(newWithdrawAmount)) {
// //     alert('Please provide a valid number');
// //     return;
// // }


//   const totalWithdraw = document.getElementById('withdraw-add');
//  //console.log(totalWithdraw);
//   const withdrawAmountString = totalWithdraw.innerText;
//   const previouswithdrawAmount =parseFloat(withdrawAmountString);

//   // if (newwithdraw > balancefloat ){
//   //   alert ("Insufficient Balance");
//   //   return;
//   // }
  

//   //clear
//   TextField.value ='';

 
//   currentWithdrawTotal = previouswithdrawAmount + newwithdraw;
//   //console.log(withdrawAmount);
//   totalWithdraw.innerText= currentWithdrawTotal;

  
  

  

//   //Minus from total amount
//   const balanceGet = document.getElementById('total-balnce');
//   const balanceString =balanceGet.innerText;
//   const balancefloat =parseFloat(balanceString);

//   const currentBalanceTotal = balancefloat - newwithdraw;
//   balanceGet.innerText =currentBalanceTotal;

  
// })

// step-1
document.getElementById('withdraw-btn').addEventListener('click', function () {
  // step-2:
  const withdrawField = document.getElementById('withdraw-field');
  const newWithDrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithDrawAmountString);

  // step-7
  withdrawField.value = '';

  if (isNaN(newWithdrawAmount)) {
      alert('Please provide a valid number');
      return;
  }

  // step-3
  const withdrawTotalElement = document.getElementById('withdraw-add');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


  // step-5
  const balanceTotalElement = document.getElementById('total-balnce');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);


  if (newWithdrawAmount > previousBalanceTotal) {
      alert('Insufficient Balance');
      return;
  }

  // step-4
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;


  // step-6
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;


})