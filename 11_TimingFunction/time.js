console.log("Timing Function");

let display=()=>{
    console.log("Hi i am Display Function");
    
}

//!Set timeout
setTimeout(display,5000);

let y=setTimeout(() => {
    console.log("Happy Birthday!🎂🍾🎉🎊");
    
}, 4000);

//!Set interval
let x=setInterval(() => {
    console.log("Sorry");    
}, 1000);

clearInterval(x);

console.log('end');

clearTimeout(y)