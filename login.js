var form=document.getElementById("form");
var username=document.getElementById("username");
var password=document.getElementById("password");

form.addEventListener("submit",(e)=>{

    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    let usernameVal= username.value.trim();
    let passwordVal= password.value.trim();
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
        setError(password,"password is required")
    }
    else if(passwordVal.length<8){
        success=false;
        setError(password,"password must be atleast 8 characters")
    }
    else{
        setSuccess(password)
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

