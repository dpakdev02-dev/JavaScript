

let x=() => {
    let now=new Date();
    let h2=document.querySelector("h2");
    h2.innerText=now.toLocaleTimeString();
}

setInterval(x,1000)

