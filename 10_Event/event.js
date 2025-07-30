console.log("Hello event from js");

let login=()=>{
    console.log('login done');
    
}
let Changecolor=()=>{
    let main=document.getElementsByTagName('main')[0]
    
    main.style.backgroundColor="red";
    main.style.filter="blur(0px)"
}

let Changecolor2=()=>{
    let main=document.getElementsByTagName('main')[0]

    main.style.backgroundColor="aquamarine"
    main.style.filter="blur(2px)"
}
