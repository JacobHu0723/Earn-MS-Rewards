// ==UserScript==
// @name         自动刷MS Rewards
// @version      0.1
// @author       Jacob Hu
// @match        https://cn.bing.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
//添加按钮
//移动端
    
var inputmobilebtn = document.createElement('input');
inputmobilebtn.id="mobile_btn";
inputmobilebtn.type="button";
inputmobilebtn.value="开始";
inputmobilebtn.onclick = function() {
    document.getElementById("sb_form_q").value = "13Hello";
    document.querySelector(".sb_search button").click();
};
document.getElementById("b_header").appendChild(inputmobilebtn);




var inputpcbtn = document.createElement('input');
inputpcbtn.id="pc_btn";
inputpcbtn.type="button";
inputpcbtn.value="电脑端";
inputpcbtn.onclick = function() {
    var input=document.querySelector('#sb_form_q');
    input.value="23";
                    };
document.getElementById("b_header").appendChild(inputpcbtn);


//var first=document.body.firstChild;
//document.body.insertBefore(inputmobilebtn,first);
//document.body.insertBefore(inputpcbtn,first);

//电脑端
function pc_rewards() {
    var input=document.querySelector('#sb_form_q');
    input.value="23";


//移动端
function mobile_rewards() {
    document.getElementById("sb_form_q").value = "13Hello";


    // Your code here...
})();
