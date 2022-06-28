
const form=document.getElementsByTagName("form")[0];
let email=document.getElementById("email");
let fname=document.getElementById("fname");
let lname=document.getElementById("lname")
let pwd=document.getElementById("pwd");
let repass=document.getElementById("repass");
let error=document.getElementById("error");
let pherror=document.getElementById("pherror");
let passerror=document.getElementById("passerror");
let repasserror=document.getElementById("repasserror");
let lnameer=document.getElementById("lnameer");
let fnameer=document.getElementById("fnameer");





function validate()
{
  let fname=document.getElementById("fname");
  let lname=document.getElementById("lname");
  let email=document.getElementById("email");
  let re=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
  let phone=document.getElementById("phone");
  let ph= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  let passreg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  let pwd=document.getElementById("pwd");
  let repass=document.getElementById("repass");
//error messages
let error=document.getElementById("error");
let pherror=document.getElementById("pherror");
let passerror=document.getElementById("passerror");
let repasserror=document.getElementById("repasserror");
let lnameer=document.getElementById("lnameer");
let fnameer=document.getElementById("fnameer");
//let  greenborder=Document.getelementById("greenborder");


  if(fname.value.trim()===""){
      fname.style.border="2px solid red";
      fnameer.innerText="Enter Firstnmae";
      fnameer.style.color="red";
      fnameer.style.left="10px";
    return false;
  }
 
  else if(lname.value.trim()===""){
    lname.style.border="2px solid red";
    lnameer.innerText="Enter Lastnmae";
    lnameer.style.color="red";
    lnameer.style.left="10px";
    return false;
  }
  else if(email.value.trim()==="")
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

       else if(phone.value.trim()==="")
        {
          phone.style.border="2px solid red";
          pherror.innerText="Enter Phone number";
          pherror.style.color="red";
           pherror.style.left="10px";
          return false;
        }
       else  if(!ph.test(phone.value)){
        phone.style.border="2px solid red";
        pherror.innerText="Enter 10 digit phone number";
        pherror.style.color="red";
        pherror.style.left="10px";
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
        else if(repass.value.trim()==="")
        {
         repass.style.border="2px solid red";
         repasserror.innerText="Enter the password";
         repasserror.style.color="red";
         repasserror.style.left="10px";
         return false;
        }
      
     else if(pwd.value!=repass.value){
       repass.style.border="2px solid red";
        repasserror.innerText="password does not match";
        repasserror.style.color="red";
        repasserror.style.left="10px";
      return false;
     }
    
       else{
           greenborder.style.color="green";
          alert("registered successfully");  
          alert.style="green";
         return true;
        }
 }
 
  function myFunction() {
    let pwd = document.getElementById("pwd");
    if (pwd.type === "password") {
      pwd.type = "text";
    } else {
      pwd.type = "password";
    }
  
 }
 form.addEventListener('submit',function(event){
  if(!validate())
  {
      event.preventDefault();
  }
});
