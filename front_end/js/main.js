$(document).ready(function(){

    //botsrap price slider
    // With JQuery
    $('.owl-carousel').owlCarousel({
      
        loop:true,
        margin:15,
        nav:true,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],

        responsive:{
            0:{
                items:1 ,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true
            }
        }
    });
    var width = $(window).width();

    if(width < 768){
    var mainNav = $('#main-nav').clone();

    $('#nav-btn').on('click' , function (){
        $('#site-navbar').toggle();
    })
    $('#navbarDropdown').on('click' , function (){
     
            $('#main-nav').html($('#dropdown-menu').html());
            $('#close-drop').show()
           
    
    })
    $('#close-drop').on('click' , function (){
        $('#site-navbar').html(mainNav);
        $('#close-drop').hide()
    })
    
        }
})