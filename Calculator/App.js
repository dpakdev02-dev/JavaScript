let fn1=(num)=>{
    document.getElementById("output").value+=num;
}

let equalsf=()=>{
   let data=document.getElementById("output").value;
   document.getElementById("output").value=eval(data);
}

let clrscr=()=>{
    console.log('Hii');
    
    document.getElementById("ouput").value="";//err
}