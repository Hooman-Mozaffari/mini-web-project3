const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit' , (e) => {
  e.preventDefault();

  checkInput();
})

function checkInput(){
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confrimPasswordValue = confirmPassword.value.trim();

  if(usernameValue === ''){
    setError(username , 'Fill the Username please!');
  }else{
    setSuccess(username);
  }

  if(emailValue === ''){
    setError(email , 'Fill the Email please!');
  }else if(!isEmail(emailValue)){
    setError(email , 'email entered is not valid');
  }else{
    setSuccess(email);
  }

  if(passwordValue === ''){
    setError(password , 'Fill the Password please!');
  }else{
    setSuccess(password);
  }

  if(confrimPasswordValue ===''){
    setError(confirmPassword , 'Fill the Confirm Password please!');
  }else if(confrimPasswordValue !== passwordValue){
    setError(confirmPassword , 'Passwords did Not Match')
  }else{
    setSuccess(confirmPassword)
  }
}

function setError(input , message){
  const formControl = input.parentElement;
  const span = formControl.querySelector('span');

  span.innerHTML = message;
  formControl.className = "form-control error";
}

function setSuccess(input){
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

const pattern =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isEmail(email){
  return pattern.test(email);
}