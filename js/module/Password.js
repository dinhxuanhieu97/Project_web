export default function PasswordJS() {
  const signFormItemPasss = document.querySelectorAll(".form-ip-ip.pass");
 
  if (signFormItemPasss) {
  

    signFormItemPasss.forEach((signFormItemPass)=>{
        const hiddenPass = signFormItemPass.querySelector(".hidden-pass");
        const showPass = signFormItemPass.querySelector(".show-pass");
        const ipPassword = signFormItemPass.querySelector(".password");

        hiddenPass.addEventListener("click", ()=>{
            signFormItemPass.classList.toggle("actived")
            ipPassword.setAttribute("type", "text");
        });

        showPass.addEventListener("click", ()=>{
            signFormItemPass.classList.toggle("actived")
            ipPassword.setAttribute("type", "password");
        });
        
    })

    
  }
}
