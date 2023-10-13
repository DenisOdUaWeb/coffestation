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
     const leftArrow = '<img src="img/left-arrow.jpg">';
     const rightArrow = '<img src="img/right-arrow.jpg">';
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 10,
        nav:true,
        navText: [leftArrow, rightArrow],
        autoplay: true,
        autoWidth:true,
        autoHeight: true,
        dots: false,
        responsive:{
            0:{
                items:1,
                center:true,
                margin: 250,
                autoHeight: true,
                autoWidth: true,


            },
            1024:{
                items:2,
            },
            1900:{
                items:3
            }
        }
    });
    //END OWL CAROUSEL 
     
  });

 