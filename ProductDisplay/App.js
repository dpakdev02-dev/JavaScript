let main=document.querySelector("main");    

let getApi= async()=>{
    let res=await fetch("https://fakestoreapi.com/products");
    let data=await res.json()

    console.log(data);

    data.map((ele)=>{
        let div=document.createElement("div");
        div.innerHTML=`<img src="${ele.image}" alt="">
                <h1>Product name:${ele.title.slice(0,11)}</h1>
                <h1>Product price:${ele.price}</h1>
                <h1>Product rating:${ele.rating.rate}</h1>`;
        div.classList.add("card");
        main.appendChild(div)
    })
    
    return data;
}

getApi();


let btn=document.querySelector("#btn");
// console.log(btn);

btn.addEventListener("click",async(e)=>{
    e.preventDefault();
    let inp=document.getElementById("sbar").value
    // console.log(inp);
    let data= await getApi();
    console.log(data);

    let div=document.querySelector("div")


    data.map((ele)=>{
        if (ele.title.toLowerCase().includes(inp.toLowerCase())) {
            console.log(ele.title);
            
        }
        else{
            
        }
    })
    
})
