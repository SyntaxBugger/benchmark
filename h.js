const button = document.querySelector(".reaction button");
const content = document.querySelector(".content");
const waitTime = Math.floor(Math.random()*1000)+4000;
let startime =0;
let isClick= "initial";
button.addEventListener("click",()=>{
    if(isClick=="initial"){
        button.innerText = "Wait for it...";
        content.style.backgroundColor = "red";
        isClick = "waiting";
         timeout=setTimeout(()=>{
            content.style.backgroundColor = "green";
            button.innerText = "Click NOWWW!!";
            startime = Date.now();
            isClick = "ready";
          }, waitTime);
    }
    else if(isClick== "ready"){
        content.style.fontSize = "30px";
        let endtime = Date.now();
        let reactiontime = endtime - startime;
        console.log(reactiontime);
        content.innerText = `Your reaction time is ${reactiontime} milliseconds`;
        button.innerHTML = "Please Refresh the page";
    }
    else if(isClick=="waiting" ){
        clearTimeout(timeout);
        content.style.fontSize = "30px";
        content.style.backgroundColor = "blue";
        content.innerText = "Not so fast";
        button.innerText = "Refresh the page";        
    }

})
