console.log('hello');
//step-1 click event
document.getElementById('submit-btn').addEventListener('click',function(){
  //step-2 get the e-mail 
  //always remember to use .value to get text from an input field
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  
  //step-3 get password

  const passField =document.getElementById('user-password');
  const pass = passField.value;

  //step - 4 validation but we don't use for client site
  if (email == 'dhoni@gorib.com' && pass == 'takade'){
    //window.location.href ='bank.html';
    window.open('bank.html','_blank').focus();
  }
  else{
    alert('Invalid email or paasword')
  }
  
})


