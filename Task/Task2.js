let btn=document.querySelector('button');

let counter=0;
console.log(btn)
let form=document.querySelector('div');

let fn1=()=>{counter++;
    let itemlabel=document.createElement('label');
    itemlabel.innerText="Item"
    form.appendChild(itemlabel);
    
    let iteminput=document.createElement('input')
    iteminput.setAttribute("Placeholder","Enter item")
    iteminput.setAttribute("type","number");
    form.appendChild(iteminput)
   
    let quanlabel=document.createElement('label')
    quanlabel.innerText="Quantity"
    form.appendChild(quanlabel)

    let quaninput=document.createElement('input')
    quaninput.setAttribute("Placeholder","Enter Quantity")
    form.appendChild(quaninput)

    let pricelabel=document.createElement('label')
    pricelabel.innerText="Price"
    form.appendChild(pricelabel)
}
btn.addEventListener('click',fn1);
btn.addEventListener("click",()=>{
    
    let priceinput=document.createElement('input')
    priceinput.setAttribute("Placeholder","Enter Price")
    priceinput.setAttribute("type","number")
    form.appendChild(priceinput)
    form.appendChild(document.createElement('hr'))

    if (counter>2) {
        let h1=document.createElement('h1');
        h1.innerText=sum;
        h1.style.textAlign="center";
        btn.style.display="none";        
        form.appendChild(h1)
        btn.removeEventListener('click',fn1)
    }
})