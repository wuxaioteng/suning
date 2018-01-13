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
    if(n==active.length){
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
{
    // 置顶
    let din=document.querySelector(".ceda .din");
    din.onclick=function () {
        // document.documentElement.scrollTop=0;
        //setInterval
        let st=document.documentElement.scrollTop;
        let speed=st*30/500;//30指电脑刷新次数的频率500运行玩的时间
       let t=setInterval(function () {
           st-=speed;
           if(st<=0){
               st=0;
               clearInterval(t);
           }
           document.documentElement.scrollTop=st;
        },30);
       console.log(t)
    }
}




{
    let flag=true;
    let topbar=document.querySelector(".bar");
    let leftbar=document.querySelector(".ceda");
    let btn=document.querySelectorAll(".ceda ul li");
    let floor=document.querySelectorAll(".xiaji");
    window.onscroll=function () {
        if(flag){
        let st=document.documentElement.scrollTop;
        if(st>630){
            topbar.style.display="block";
        }else {
            topbar.style.display="none";
        }
        if(st>2600){
            leftbar.style.display="block";
        }else{
            leftbar.style.display="none";
        }
        floor.forEach(function (ele,index) {
            if(st>ele.offsetTop-260){
                for(let i=0;i<btn.length;i++){
                    btn[i].classList.remove("active");
                }
                btn[index].classList.add("active");

            }

        });
        }
    }
    btn.forEach(function (ele,index) {
        ele.onclick=function () {
            flag=false;
            let ot=floor[index].offsetTop;//目标距离
            let now=document.documentElement.scrollTop;//获取当前距离
            let speed=(ot-now)*30/300;//每隔30毫秒动
            let time=0;
            let t=setInterval(function () {
                now+=speed;
                time+=30;
                if(time===300){
                    clearInterval(t);
                    now=ot;
                    flag=true;
                }

                document.documentElement.scrollTop=now;
            },30);
        }
    })

}
{
    let sp=document.querySelector(".cedda .san1");
    let sq=document.querySelector(".cedda .san2");
    let sb=document.querySelector(".cedda .san1 .xiao");
    let sn=document.querySelector(".cedda .san2 .disa");
    sp.onmouseover=function () {
        sb.classList.add("fadeIn");
        sb.style.display="block";
    }
    sp.onmouseout=function () {
        sb.classList.remove("fadeIn");
        sb.style.display="none";
    }

    sq.onmouseover=function () {
        sn.classList.add("fadeOut");
        sn.style.display="block";
    }
    sq.onmouseout=function () {
        sn.classList.remove("fadeOut");
        sn.style.display="none";
    }
}



{
    let banfn=document.querySelectorAll("#jds");
    let bancd=document.querySelector(".aside-zs");
    let ban=document.querySelector(".ban");
    banfn.forEach(function (ele,index) {
        ele.onmouseover=function () {
            bancd.style.display="block"
        }
        ban.onmouseleave=function () {
            bancd.style.display="none"
        }
    })
}

// 尖叫
{
    let suv= document.querySelectorAll(".sikuai1 input");
    suv.forEach(function (ele) {
    ele.onclick = function () {
        this.placeholder ="";
    }
    ele.onfocus = function () {
        if (this.value === "尖叫24小时,家电免费送")
            this.value = "";
    }
    ele.onblur = function () {
        if (this.value === "") {
            this.value = "尖叫24小时,家电免费送";
        }
    }
    })
}



{
    let sv=document.querySelector(".dindan .wode:first-child");
    let su=document.querySelector(".d_box");
    sv.onmouseover=function () {
        su.style.display="block";
    }
    sv.onmouseout=function () {
        su.style.display="none";
    }
}

