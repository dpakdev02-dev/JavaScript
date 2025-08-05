
let p=new Promise((resolve,reject)=>{

    let mockGiving=false;
    if (mockGiving) {
        resolve("Mock Given")
    }
    else{
        reject("Mock Not given")
    }

});

// console.log(p);

p
.then((data)=>{
    console.log(data);
})
.catch((ele)=>{  
    // console.log(ele);
    
})

let p1=new Promise((resolve,reject)=>{

    // resolve("Data Is Present")
    // reject("Data Is Not Present")

});

p1.
then((data)=>{
    console.log(data);
    
})
.catch((ele)=>{
    console.log(ele);
    
})
.finally(console.log("Promise is there"));
