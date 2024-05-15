var form=document.getElementById("form");
var username=document.getElementById("username");
var password=document.getElementById("password");
var email=document.getElementById("email");


form.addEventListener("submit",(e)=>{


    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    let usernameVal= username.value.trim();
    let passwordVal= password.value.trim();
    let emailVal= email.value.trim();
    let success=true;
    if(usernameVal===""){
        success=false;
        setError(username,"Username is required")
    }
    else{
        setSuccess(username)
    }
    if(passwordVal===""){
        success=false;
        setError(password,"Password is required")
    }
    else if(passwordVal.length<8){
        success=false;
        setError(password,"Password must be atleast 8 characters")
    }
    else{
        setSuccess(password)
    }
    if(emailVal===""){
        success=false;
        setError(email,"Email is required");
    }
    else if(!validateEmail(emailVal)){
        success=false;
        setError(email,"Email is invalid")
    }
    else{
        setSuccess(email)
    }
    return success;


}
function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector(".error")
    errorElement.innerHTML=message;
    inputGroup.classList.add("error")
    inputGroup.classList.remove("success")
}
function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector(".error")
    errorElement.innerHTML="";
    inputGroup.classList.add("success")
    inputGroup.classList.remove("error")
}
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


