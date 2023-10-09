"use strict";

document.addEventListener("DOMContentLoaded",function () {
    //console.log("Hello World!");
    let  bbtn = document.getElementById("bmenubtn");
    let navUl = document.getElementById("nav_sliding_ul");
    //nav_sliding_ul.classList.remove("show-me");
    navUl.classList.remove("show-me");
    bbtn.onclick = function (){
        if (!nav_sliding_ul.classList.contains('show-me')){
            navUl.classList.add("show-me");
        }
        else{
            navUl.classList.remove("show-me");
        }
    }
     
  });