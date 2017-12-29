{
let active=document.querySelectorAll(".lunb li");
let pag=document.querySelectorAll(".xiaodian li");
let bannerContainer=document.querySelector(".banner1")
let prev=document.querySelector(".ban_left")
let nest=document.querySelector(".ban_right")
pag.forEach(function (ele,index) {
    ele.onclick=function () {
        for(let i=0;i<pag.length;i++){
            pag[i].classList.remove("active");
            active[i].classList.remove("active");
        }
        this.classList.add("active");
        active[index].classList.add("active");
        n=index;
    }
});
let n=0;
function lunbo(dir="r") {
    if(dir==="r"){
        n++;
    }
    else if(dir==="l"){
        n--;
    }
    if(n==pag.length){
       n=0;
    }
    if(n==-1){
        n=pag.length-1;
    }
    for(let i=0;i<pag.length;i++){
        pag[i].classList.remove("active");
        active[i].classList.remove("active");
    }
    pag[n].classList.add("active");
    active[n].classList.add("active");
}
let st=setInterval(lunbo,1000);
    bannerContainer.onmouseover=function () {
    clearInterval(st);
}
    bannerContainer.onmouseout=function () {
        st=setInterval(lunbo,1000);
    }
    nest.onclick=function () {
        lunbo("r");
    }
    prev.onclick=function () {
        lunbo("l");
    }
    
    
}
