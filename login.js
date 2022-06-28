const form=document.getElementsByTagName("form")[0];
let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
let error=document.getElementById("error");
let passerror=document.getElementById("passerror");
function validate()
{
    let email=document.getElementById("email");
    let pwd=document.getElementById("pwd");
    let error=document.getElementById("error");
    let passerror=document.getElementById("passerror");
    let re=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    let passreg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

      if(email.value.trim()==="")
    {
      email.style.border="2px solid red";
      error.innerText="Enter Email id";
      error.style.color="red";
      error.style.left="10px";
      return false;
    }

     else if(!re.test(email.value))
      {
        email.style.border="2px solid red";
        error.innerText="valid email id";
        error.style.color="red";
        error.style.left="10px";
        return false;
      }
      else if(pwd.value.trim()==="")
       {
        pwd.style.border="2px solid red";
        passerror.innerText="Enter the password";
        passerror.style.color="red";
        passerror.style.left="10px";
        return false;
       }
       else if(pwd.value.trim().length<8)
        {
          pwd.style.border="2px solid red";
          passerror.innerText="need minimam 9 characters";
          passerror.style.color="red";
          passerror.style.left="10px";
          return false;
        }
        else if(!passreg.test(pwd.value))
        
        {
          pwd.style.border="2px solid red";
          passerror.innerText="Enter the password properly";
          passerror.style.color="red";
          passerror.style.left="10px";
          return false;
        }
        else{
            alert("login successfully");  
            alert.style="green";
           return true;
          }

}




form.addEventListener('submit',function(event){
    if(!validate())
    {
        event.preventDefault();
    }
  });