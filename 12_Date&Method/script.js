let now=new Date();


let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

let h2=document.querySelector('h2')
let h3=document.querySelector('h3')
let DateDiv=document.querySelector('.date')

h2.innerText="Time="+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()+" Date="+now.getFullYear()+"-"+months[now.getMonth()]+"-"+now.getDate();

//!getDay()
switch (now.getDay()) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}


let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


console.log(days[now.getDay()]);

h3.innerText="Day="+days[now.getDay()];


DateDiv.innerHTML=`<h1>${now.toDateString()}</h1>`
