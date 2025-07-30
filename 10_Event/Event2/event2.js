let btn1=document.getElementsByClassName('btn')[0]
let btn2=document.getElementsByClassName('btn')[1]

// console.log(btn1);

let fn1=()=>{
    alert("Button Clicked!")
}
btn2.addEventListener('click',()=>{
    alert("Event Listener Clicked!!")
})

let card1 =document.getElementsByClassName('box')[0]

// console.log(card1);
let hello=()=>{
    console.log("I am hello Function");
    
}
let hi=()=>{
    console.log("I am hi Function");
    
}


let card2 =document.getElementsByClassName('box')[1]

card2.addEventListener("click",hello);
card2.addEventListener("click",hi);
// console.log(card2);

let card3=document.getElementsByClassName('box')[2]
card3.addEventListener("click",(e)=>{
    console.log("Card 3 is clicked");
    console.log(e);
    console.log(e.type);
    console.log(e.target);

    let tar=e.target;
    tar.style.color="red";
})

let section = document.querySelector("section");

section.addEventListener("mouseover",()=>{
    section.style.backgroundColor="green"
})

section.addEventListener("mouseleave",()=>{
    section.style.backgroundColor="rgb(77, 241, 241)"
})



card2.addEventListener('click',()=>{
    card2.innerHTML=card1.innerHTML;
    card1.innerHTML=""
})

card1.addEventListener('click',()=>{
    card1.innerHTML=card2.innerHTML;
    card2.innerHTML=""
})

let input=document.querySelector("input");

let output=document.querySelector(".output")

input.addEventListener('keypress',()=>{
    console.log('key is pressed');
    
})
input.addEventListener('keydown',()=>{
    console.log('key is down');
    
})

input.addEventListener("keyup",(e)=>{
    output.innerHTML=e.target.value
})