$(function () {
   _sec();
    
    $('.nav li').click(function(){
        $('.nav li').removeClass('active');
        $('.nav li a').removeClass('active');
        $(event.target).parent().addClass('active');
        $(event.target).addClass('active');
    });
    
    $('.nav li:first-child').click(function(){
    $('body').animate({
        scrollTop: $("#bio").offset().top-50
    }, 500);
        
    });
    
    $('.nav li:nth-child(2)').click(function(){
    $('body').animate({
        scrollTop: $("#likes").offset().top-50
    }, 500);
    });
    
    $('.nav li:last-child').click(function(){
    $('body').animate({
        scrollTop: $("#contact").offset().top-50
    }, 500);
    });

    window.onresize = function(event){_sec();};
});

function _sec(){
     $('.section').css({'height':($(window).innerHeight()-$('.navbar').height())+"px"});
}


