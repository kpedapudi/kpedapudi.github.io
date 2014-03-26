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
    }, 300);
        
    });
    
    $('.nav li:nth-child(2)').click(function(){
    $('body').animate({
        scrollTop: $("#interests").offset().top-50
    }, 300);
    });
    
    $('.nav li:last-child').click(function(){
    $('body').animate({
        scrollTop: $("#contact").offset().top-50
    }, 300);
    });

    getPktAccTkn();

    window.onresize = function(event){_sec();};
});

function _sec(){
     $('.section').css({'height':($(window).innerHeight()-$('.navbar').height())+"px"});
}
function getPktAccTkn () {
    $.ajax({
            url: 'https://getpocket.com/v3/oauth/request',
            type: 'post',
            dataType: 'jsonp',
            headers: {          
                 "Accept" : "X-Accept",         
                "Content-Type": "application/json"   
            },
            data: { consumer_key : "25535-87e3dd30d58a2acf11a6315d", redirect_uri : "pocketapp1234:authorizationFinished"  },
            success: function (data) {
                alert(data);
            },
            fail: function (data) {
                alert(data);
            }
        });
}


