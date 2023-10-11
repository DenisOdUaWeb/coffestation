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

     //OWL CAROUSEL 
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        autoWidth:true,
        autoHeight: true,
        responsive:{
            0:{
                items:1,
                center:true,
                margin: 250,
                autoHeight: true,
                autoWidth: true,


            },
            1024:{
                items:2
            },
           /* 1900:{
                items:2
            }*/
        }
    });
    //END OWL CAROUSEL 
     
  });

 