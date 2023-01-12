// ==UserScript==
// @name         自动刷MS Rewards
// @version      0.3
// @author       Jacob Hu
// @match        https://cn.bing.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

function rewards() {
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

    setTimeout(open,7000);
    setTimeout(locate,10000);

    i++;//增量

};
}

//添加按钮
var inputbtn = document.createElement('input');
inputbtn.id="btn";
inputbtn.type="button";
inputbtn.value="开始";
inputbtn.onclick = rewards()
document.getElementById("b_header").appendChild(inputbtn);

    // Your code here...
})();
