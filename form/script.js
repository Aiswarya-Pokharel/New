const signIn = document.querySelector("#sign_in");
const signUp = document.querySelector("#sign_up");
const container = document.querySelector(".container");

signIn.addEventListener('click',()=>{
  container.classList.add('active');
})

signUp.addEventListener('click',()=>{
  container.classList.remove('active');
})
let pw = document.querySelector("#login-pw")
let eye = document.querySelector("#login-eye");
eye.addEventListener('click', function(){
  if(pw.type == "password"){
    pw.type = "text";
    eye.setAttribute("name", "eye");
  }
  else{
    pw.type = "password";
    eye.setAttribute("name", "eye-off");
  }
})
let signupPw = document.querySelector("#signUp-pw");
let signupEye = document.querySelector("#signUp-eye");
signupEye.addEventListener("click", function () {
  if (signupPw.type == "password") {
    signupPw.type = "text";
    signupEye.setAttribute("name", "eye");
  } else {
    signupPw.type = "password";
    signupEye.setAttribute("name", "eye-off");
  }
})






