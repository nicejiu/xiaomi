//头部购物车效果
{
    let car=document.querySelector(".head_car");
    let box=document.querySelector(".head_car_carbox");
    let bigbox=document.querySelector(".headcarbox");
    car.onmouseenter=function () {
        box.style.display="block";
    };
    bigbox.onmouseleave=function () {
        box.style.display="none";
    };
}
//banner效果
{
    let banimg=document.querySelectorAll(".banner_img li");
    let bandian=document.querySelectorAll(".banner_dian div");
    let banner=document.querySelector(".banner");
    let bannerbtn1=document.querySelector(".banner_btn1");
    let bannerbtn2=document.querySelector(".banner_btn2");
    bandian.forEach(function (ele,index) {
        ele.onclick=function () {
            for(let i=0;i<bandian.length;i++){
                bandian[i].classList.remove("banner_dian2");
                banimg[i].classList.remove("banner_img1");
            }
            this.classList.add("banner_dian2");
            banimg[index].classList.add("banner_img1");
            n=index;
        }
    });
    let n=0;
    function move() {
        n++;
        if(n===banimg.length){
            n=0;
        }
        if(n<0){
            n=banimg.length-1;
        }
        for (let i=0;i<banimg.length;i++){
            banimg[i].classList.remove("banner_img1");
            bandian[i].classList.remove("banner_dian2");
        }
        banimg[n].classList.add("banner_img1");
        bandian[n].classList.add("banner_dian2");
    }
    let t=setInterval(move,3000);
    banner.onmouseenter=function () {
        clearInterval(t);
    };
    banner.onmouseleave=function () {
        t=setInterval(move,3000);
    };
    let flag=true;
    bannerbtn2.onclick=function () {
        if (flag){
            flag=false;
            move();
        }
    };
    bannerbtn1.onclick=function () {
        if (flag){
            flag=false;
            n-=2;
            move();
        }
    };
    banimg.forEach(function (ele,index) {
        ele.addEventListener("transitionend",function () {
            flag=true;
        })
    });
}
//小米单品效果
{
    let danpin_prev=document.querySelector(".danpin_btn1");
    let danpin_next=document.querySelector(".danpin_btn10");
    let danpin_list=document.querySelector(".danpin_bottom_ul");
    let n=0;
    danpin_next.onclick=function () {
        n++;
        danpin_prev.classList.remove("disable");
        if(n===2){
            danpin_next.classList.add("disable");
        }
        if(n===3){
            n=2;
            return;
        }
        danpin_list.style.marginLeft=-1226*n+"px";
    };
    danpin_prev.onclick=function () {
        n--;
        danpin_next.classList.remove("disable");
        if(n===0){
            danpin_prev.classList.add("disable");
        }
        if(n===-1){
            n=0;
            return;
        }
        danpin_list.style.marginLeft=-1226*n+"px";
    }
}
//选项卡效果  搭配
{
    function fn(a) {
        let text=a.querySelectorAll(".dapeiright_wenzi");
        let box=a.querySelectorAll(".three_bottom_right");
        text.forEach(function (ele,index) {
            ele.onmouseenter=function () {
                for(i=0;i<text.length;i++){
                    text[i].classList.remove("dapeiright_wenzi1");
                    box[i].classList.remove("three_bottom_right1");
                }
                this.classList.add("dapeiright_wenzi1");
                box[index].classList.add("three_bottom_right1");
            }
        })
    }
    let list=document.querySelectorAll(".three_top");
    list.forEach(function (ele) {
        fn(ele)
    })
}
//推荐效果
{
    let wo_prev=document.querySelector(".tuijian_btn1");
    let wo_next=document.querySelector(".tuijian_btn10");
    let tuijian_list=document.querySelector(".tuijian_bottom_list");
    let n=0;
    wo_next.onclick=function () {
        n++;
        wo_prev.classList.remove("disablet");
        if(n===3){
            wo_next.classList.add("disablet");
        }
        if(n===4){
            n=3;
            return;
        }
        tuijian_list.style.marginLeft=-1240*n+"px";
    };
    wo_prev.onclick=function () {
        n--;
        wo_next.classList.remove("disablet");
        if(n===0){
            wo_prev.classList.add("disablet");
        }
        if(n===-1){
            n=0;
            return;
        }
        tuijian_list.style.marginLeft=-1240*n+"px";
    }
}
//内容效果
{
    function bn(c) {
        let prev=c.querySelector(".neirong_jiantou1");
        let next=c.querySelector(".neirong_jiantou2");
        let imgs=c.querySelector(".neirong_changhuan");
        let dian=c.querySelectorAll(".neironghuan1");
        let n=0;
        next.onclick=function () {
            n++;
            if(n===dian.length){
                n=dian.length-1;
                return;
            }
            imgs.style.marginLeft=-296*n+"px";
            dian[n-1].classList.remove("neironghuan");
            dian[n].classList.add("neironghuan");
            obj=dian[n];
        };
        prev.onclick=function () {
            n--;
            if(n<0){
                n=0;
                return;
            }
            imgs.style.marginLeft=-296*n+"px";
            dian[n+1].classList.remove("neironghuan");
            dian[n].classList.add("neironghuan");
            obj=dian[n];
        };
        let obj=dian[0];
        dian.forEach(function (ele,index) {
            ele.onclick=function () {
                obj.classList.remove("neironghuan");
                dian[index].classList.add("neironghuan");
                imgs.style.marginLeft=-296*index+"px";
                obj=dian[index];
                n=index;
            }
        })
    }
    let feng=document.querySelectorAll(".neirong_btn")
    feng.forEach(function (ele) {
        bn(ele);
    })
}
//banner导航的效果
{
    let nav=document.querySelectorAll(".banner_nav_li");
    let con=document.querySelectorAll(".banner_nav_menu");
    let obj=con[0];
    nav.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            obj.style.display="none";
            con[index].style.display="block";
            obj=con[index];
        };
        ele.onmouseleave=function () {
            con[index].style.display="none"
        }
    })
}
//导航效果
{
    let text=document.querySelectorAll(".daohang_wenzi_box");
    let box=document.querySelectorAll(".daohang_wenzi_box_longbox");
    let obj=box[0];
    text.onmouseenter=function () {
        box.style.height="233px";
    };
    box.onmouseleave=function () {
        box.style.height="0" ;
    };
    text.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            obj.style.display="none";
            box[index].style.display="block";
            obj=box[index];
        };
        ele.onmouseleave=function () {
            box[index].style.display="none";
        };
    })
}
