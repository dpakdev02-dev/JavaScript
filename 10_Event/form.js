
let btn=document.getElementsByTagName('button')[0]

// console.log(btn);


btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let username=document.getElementById('username').value
    let password=document.getElementById('password').value

    console.log(username);
    console.log(password);
    // console.log("Submitted");
    let sum=parseInt(username)+parseInt(password)
    
    let h1=document.querySelector("h1");
    console.log(sum);
    console.log(h1);
    
    h1.innerText=`The addition of ${username} and ${password} is ${sum}`
    
    
    username="";
    password="";
})

let select= document.querySelector("select");

select.addEventListener("change",(e)=>{
    let color=e.target.value;
    console.log(color);
    
    let bg=document.querySelector(".outer");
    // console.log(bg);
    bg.style.backgroundColor=color;
    
})
