$(document).ready(function(){

    $( "#tabs" ).tabs();

    $( "#tabs-services" ).tabs();
    $( "#proj-tabs" ).tabs();
    $( "#tabs-vertical" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs-vertical li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
    $( "#accordion" ).accordion();

    $( "#accordion" ).accordion();
    //botsrap price slider
    // With JQuery
    $('.owl-carousel').owlCarousel({
      
        loop:true,
        margin:10,
        nav:true,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],

        responsive:{
            0:{
                items:1.2,
                nav:true
            },
            400:{
                items:1.5,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            800:{
                items:2.5,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
            },
            1200:{
                items:4,
                nav:true,
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