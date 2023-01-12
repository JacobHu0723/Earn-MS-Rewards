// ==UserScript==
// @name         自动刷MS Rewards
// @version      0.3
// @author       Jacob Hu
// @match        https://cn.bing.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function ale() {
        alert()
    };

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
        while(i<=25){//循环条件
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
        //开始
        var inputbtn = document.createElement('input');
        inputbtn.id="btn";
        inputbtn.type="button";
        inputbtn.value="开始";
        inputbtn.onclick = rewards()
        document.getElementById("b_header").appendChild(inputbtn);

        //停止
        var stopbtn = document.createElement('input');
        stopbtn.id="stop_btn";
        stopbtn.type="button";
        stopbtn.value="停止";
        stopbtn.onclick = function() {
            window.open("about:blank","_self")
            window.close();
            alert("请手动关闭标签页!");
        };
        document.getElementById("b_header").appendChild(stopbtn);

        // Your code here...
    })();
