let fetchedData=fetch("https://fakestoreapi.com/products")

console.log(fetchedData); //Promise 

fetchedData
.then((ele)=>{      


    console.log(ele); //Response

    let jsonData=ele.json();//Promise

    jsonData.then((data)=>{
        console.log(data);// Prints the data
        
    })
    .catch((err)=>{
        console.log(err);
        
    })

    
})
.catch((err)=>{
    console.log(err);
    
})