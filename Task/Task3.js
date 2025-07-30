let form=document.querySelector('form')
let btn =document.querySelector('button');



form.addEventListener("submit",(EventObject)=>{
    EventObject.preventDefault();
    // console.log("clicked..!");
    console.log(EventObject);// EventObject represent the event triggered
    // console.log();
    
    let inputs=document.getElementsByTagName('input');
    let label=document.getElementsByTagName('label');

    for (let i = 0; i < inputs.length; i++) {
        console.log(label[i].innerText+":"+inputs[i].value);
    }

    for (let i = 0; i < inputs.length; i++) {
       inputs[i].value='';
    }
})
