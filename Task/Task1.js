let inputs = document.getElementsByTagName('input');

let input1 = inputs[0];
let input2 = inputs[1];
let input3 = inputs[2];

// console.log(input1);
// console.log(input2);
// console.log(input3);

let counter=1;
let solve = () => {
    let a = input1.value
    let b = input2.value
    let c = input3.value
    let d=b*c;
    let div = document.getElementsByClassName('value')[0];
        let data = document.createElement('data');
    
    div.append(data);

    if (counter>=5) {
        btn.style.visibility='hidden';
    }
    data.innerHTML=`<h2>${a}</h2><h2>${b}</h2><h2>${d}</h2>`
    counter++;
}

let btn = document.getElementsByTagName('button')[0]



btn.addEventListener("click", solve)

let fn2=() => {
    input1.value = '';
    input2.value = '';
    input3.value = '';
}
btn.addEventListener("click",fn2 )

let reset=document.getElementsByClassName('reset')[0]

let value=document.getElementsByClassName('value')[0]
