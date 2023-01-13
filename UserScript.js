// ==UserScript==
// @name         自动刷MS Rewards
// @description  自动刷Microsoft Rewards
// @icon         https://github.com/JacobHu0723/Earn-MS-Rewards/blob/master/Jing.png
// @version      0.4
// @author       Jacob Hu
// @match        https://cn.bing.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var i=1;

    function rewards() {
        var link;
        var n;
        var l;
        //跳转函数
        function locate() {
            location.href=link;
        };
        //打开显示Rewards
        function open() {
            document.getElementById("mHamburger").click();
        };

        //i=1
        setTimeout(function(){
            while(i<=25){//循环条件
                //设置链接
                n=Math.ceil(Math.random() * 999);
                l="https://cn.bing.com/search?q=";
                link=l+n;
                setTimeout(open,0);
                setTimeout(locate,2000);
                if(i>25) {return}

                i++;//增量

            };
        },3000)
    }

    //添加按钮
    //开始
    var inputbtn = document.createElement('input');
    inputbtn.id="btn";
    inputbtn.type="button";
    inputbtn.value="开始";
    inputbtn.onclick = rewards();
    document.getElementById("b_header").appendChild(inputbtn);

    //停止
    var stopbtn = document.createElement('input');
    stopbtn.id="stop_btn";
    stopbtn.type="button";
    stopbtn.value="停止";
    stopbtn.onclick = function() {
        i=100;
        //location.href="cn.bing.com";
        alert("请手动禁用脚本");
    };
    document.getElementById("b_header").appendChild(stopbtn);

    // Your code here...
})();
