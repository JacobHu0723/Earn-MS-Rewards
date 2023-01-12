// ==UserScript==
// @name         自动刷MS Rewards
// @version      0.2
// @author       Jacob Hu
// @match        https://cn.bing.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
//手机版
function mobile_rewards() {
    var link;
    var n;
    var l;
    var i=1;
    //跳转函数
    function locate() {
    location.href=link;
};
    //打开显示Rewards
    function open() {
        document.getElementById("mHamburger").click();
    };
    while(i<=24){//循环条件
    //设置链接
    n=Math.ceil(Math.random() * 100);
    l="https://cn.bing.com/search?q=";
    link=l+n;

    setTimeout(open,3000);
    setTimeout(locate,7000);

    i++;//增量
    console.log(i);
};
}

//电脑版
function pc_rewards() {
    var link;
    var n;
    var l;
    var i=1;
    //跳转函数
    function locate() {
    location.href=link;
};

    while(i<=30){//循环条件
    //设置链接
    n=Math.ceil(Math.random() * 100);
    l="https://cn.bing.com/search?q=";
    link=l+n;

    setTimeout(locate,7000);

    i++;//增量
    console.log(i);
};
}

//添加按钮
//移动版
var inputmobilebtn = document.createElement('input');
inputmobilebtn.id="mobile_btn";
inputmobilebtn.type="button";
inputmobilebtn.value="手机版";
inputmobilebtn.onclick = mobile_rewards()
document.getElementById("b_header").appendChild(inputmobilebtn);

//电脑版
var inputpcbtn = document.createElement('input');
inputpcbtn.id="pc_btn";
inputpcbtn.type="button";
inputpcbtn.value="电脑版";
inputpcbtn.onclick = pc_rewards()
document.getElementById("b_header").appendChild(inputpcbtn);


    // Your code here...
})();
