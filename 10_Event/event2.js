/**Inline
 * Dom properties
 * addEventlistener(Event,function);
 * removeEventListener(Event,Function);
 */

let btn = document.querySelector('button')
console.dir(btn)

let handleClick = () => {
    console.log("Clicked!");
}

//! Using Dom practice
btn.onclick = handleClick;

//?mouse event example
let div = document.querySelector('div');

div.onmousedown = () => {
    console.log("The mouse entered in div");
}
div.onmouseleave = () => {
    console.log("The mouse leaved in div");
    div.style.borderRadius = '20px';
    div.style.backgroundColor = 'red';
    div.style.width = "100px"
}
div.onmouseover = () => {
    console.log('The mouse Overed in div');
    div.style.borderRadius = '50%';
    div.style.backgroundColor = 'Green';
    div.style.transition = "all 1s ease-in-out"
}

btn.onclick = () => { div.style.color = "white" }

//? addEventListener(<event_name>,<function>)
//we can give move task for the same event by using the event listener the event will not be reinitialized.

let btn2 = document.getElementById('btn')
// btn2.addEventListener('click',()=>{console.log('Button clicked');
// })
// btn2.addEventListener('click',()=>{console.log('Changed now');
// })
// btn2.addEventListener('click',()=>{console.log('Finally changed');
// })

let counter = 0;

let fn1 = () => {
    counter++;
    console.log(counter);
    console.log('Button clicked');
}

btn2.addEventListener('click', fn1)

btn2.addEventListener('click', () => {
    console.log('Changed now');
})

btn2.addEventListener('click', () => {
    console.log('Finally changed');
    if (counter == 3) {
        btn2.removeEventListener("click",fn1)
    }
})







