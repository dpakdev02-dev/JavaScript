let form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let user=document.getElementById('USERNAME').value
    let pass=document.getElementById('USERPASSWORD').value

    localStorage.setItem("userName",user)
    localStorage.setItem("userPass",pass)

    alert("SignUP Done")
    open("./Login.html")
})
