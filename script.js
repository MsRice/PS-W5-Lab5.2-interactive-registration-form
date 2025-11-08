window.onload = function(){
    if(localStorage.getItem("username") !== null){
        const username = document.getElementById("username")
        username.dataset.value = this.localStorage.getItem("username")
        username.placeholder = this.localStorage.getItem("username")
        username.removeAttribute("required")

        
    }
}


const submitted_form = document.getElementById("registrationForm")
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
const password_conf = document.getElementById('confirmPassword')

submitted_form.addEventListener('submit' , function(event){
    event.preventDefault()
    username = username_validation()
    email = email_validation()
    password = password_validation(password.value)

    // If this was real , This is wher i would push to db
    console.log( username , email , password)
   
    

    
})

// Username Validation

function username_validation(){
    const username_validity  = username.checkValidity()
    const error_msg = document.getElementById('usernameError')

    if(!username_validity){

        error_msg.innerText = "Username must be more than 3 charaters"
        
    }else{

        error_msg.innerText = ""

        return username

    }

}
username.addEventListener('focusout' ,  username_validation)
// Email Validity 
function email_validation(){
    const email_validity  = email.checkValidity()
    const email_validityState  = email.validity
    const error_msg = document.getElementById('emailError')
    
    
    if(!email_validity){
        if (email_validityState.valueMissing) {
            error_msg.innerText = "Please fill out this field."
        } else if (email_validityState.typeMismatch) {
            error_msg.innerText = "Please enter a valid email."
        }
    }else{
        error_msg.innerText = ""
        return email
    }
}

email.addEventListener('focusout', email_validation)


// Password Validation && Confimation Matching  

function password_validation(password){
    const error_msg = document.getElementById('passwordError')
    // This is the regex string to check password
    const regex_pass_check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    if (!regex_pass_check.test(password)) {
        error_msg.innerText = "Please enter a valid password."
    }else{
        
        error_msg.innerText = ""
        return password; // Password is valid
    }
}

password.addEventListener('focusout', (event) =>{password_validation(event.target.value)})


function password_confirmation(password_conf , password){
    const error_msg = document.getElementById('confirmPasswordError')
    if(password_conf !== password){
        error_msg.innerText = "Password do not match."
        
    }else{
        error_msg.innerText = ""
    }
}

password_conf.addEventListener('focusout', (event) =>{password_confirmation(event.target.value , password.value)})