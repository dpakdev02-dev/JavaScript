let h1=document.querySelector('h1');
let h2=document.querySelector('h2');
let btn=document.querySelector('button');

// console.log(btn);
// console.log(h1);
// console.log(h2);

let counter=0;
let increment=()=>{
    counter++;
    h2.innerText=counter;
    if (counter==10) {
        btn.removeEventListener("click",increment)
    }
}
btn.addEventListener("click",increment)

let reset=document.getElementById('rst');

reset.addEventListener("click",()=>{
    btn.addEventListener("click",increment)
    counter=0;
    h2.innerText='0'
})




