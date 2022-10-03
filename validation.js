let email = document.forms['form']['email'];
let password = document.forms['form']['password'];

let email_error = document.getElementById('email_error');
let pass_error = document.getElementById('pass_error');


function valid(){
    if(email.value.length == 0){
        email.style.border = "1px solid red"
        email_error.style.display = "block";
        email.focus();
        return false ;
    }
}