let btns = document.querySelectorAll("button");
let flag = document.querySelectorAll(".Country");
let p= document.querySelectorAll("p");

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        for (let i = 0; i < p.length; i++) {
            if(btn.innerText=="All"){
                flag[i].style.display="";
            }else if (btn.innerText==p[i].innerText) {
                flag[i].style.display="";
            }else{
                flag[i].style.display="none";
            }
        }
    })
});