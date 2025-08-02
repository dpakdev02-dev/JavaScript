let form=document.querySelector("form")


form.addEventListener("submit",()=>{
    let user=document.getElementById("user").value
    let pass=document.getElementById("pass").value

    let usr=localStorage.getItem("userName")
    let pwd=localStorage.getItem("userPass")

    
    if (user==usr&&pwd==pass) {
        alert("Login Done")
        open("./WelcomePage.html")
    }
    else{
        alert("Invalid Credentials")
    }
})