$(document).ready(function(){
    AOS.init();

   
    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        
      },
      loop:true,
        effect:"slide",
        autoplay:{
          delay:2500
        },
     
      
    });

    
    ///////////////sec-1/////////////////////
    $('.menu-bar li').mouseenter(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    

    //////////////sec-4///////////////////
    $('.sec-4 .sec4-btn').mouseenter(function(){
        $('.sec4-btn').addClass('active');
    });
    
    $('.sec-4 .sec4-btn').mouseleave(function(){
        $('.sec4-btn').removeClass('active');
    });



    ///////////// sec-3/////////////////
    $('.sec3-content-box .c-box-img1').mouseenter(function(){
      $('.sec3-content-box .c-box-img1').addClass('active');

    });
    $('.sec3-content-box .c-box-img2').mouseenter(function(){
      $('.sec3-content-box .c-box-img2').addClass('active');
      
    });
    $('.sec3-content-box .c-box-img3').mouseenter(function(){
      $('.sec3-content-box .c-box-img3').addClass('active');
      
    });
    $('.sec3-content-box .c-box-img4').mouseenter(function(){
      $('.sec3-content-box .c-box-img4').addClass('active');
      
    });

    $('.sec3-content-box .c-box-img1').mouseleave(function(){
      $('.sec3-content-box .c-box-img1').removeClass('active');

    });
    $('.sec3-content-box .c-box-img2').mouseleave(function(){
      $('.sec3-content-box .c-box-img2').removeClass('active');

    });
    $('.sec3-content-box .c-box-img3').mouseleave(function(){
      $('.sec3-content-box .c-box-img3').removeClass('active');

    });
    $('.sec3-content-box .c-box-img4').mouseleave(function(){
      $('.sec3-content-box .c-box-img4').removeClass('active');

    });









  



}); //////end///////

