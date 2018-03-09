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
        console.log(text,box);
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
    function gn(b) {
        let nei_dian=b.querySelectorAll(".neironghuan1");
        let nei_box=b.querySelectorAll(".neirong_neirong");
        console.log(nei_dian,nei_box);
        //let nei_prev=b.querySelector(".neirong_jiantou1");
       // let nei_next=b.querySelector(".neirong_jiantou2");
        nei_dian.forEach(function (ele,index) {
            ele.onclick=function () {
                for(i=0;i<nei_dian.length;i++){
                    nei_dian[i].classList.remove("neironghuan");
                    nei_box[i].classList.remove("neirong_prevnext");
                }
                this.classList.add("neironghuan");
                nei_box[index].classList.add("neirong_prevnext");
               // n=index;
            }
        });
        // let n=0;
        // function move() {
        //     n++;
        //     if(n===nei_dian.length){
        //         n=0
        //     }
        //     if(n<0){
        //         n=nei_dian.length-1;
        //     }
        //     for(i=0;i<nei_dian.length;i++){
        //         nei_dian[i].classList.remove("neironghuan");
        //         nei_box[i].classList.remove("neirong_prevnext");
        //     }
        //     nei_dian[n].classList.add("neironghuan");
        //     nei_box[n].classList.add("neirong_prevnext");
        // }
        // nei_prev.onclick(function () {
        //     n-=2;
        //     move();
        // });
        // nei_next.onclick(function () {
        //    move();
        // })
    //}
    let nei_huan=document.querySelectorAll("neirong_btn");
    nei_huan.forEach(function (ele) {
        gn(ele);
    })

}