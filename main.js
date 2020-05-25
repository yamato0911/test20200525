$(function(){
    $('.new-btn').click(function(){
        $('.signin-modal').show();
    });
    $('.close').click(function(){
        $('.signin-modal').animate({
            'marginLeft':'800px'
        },2200);
    });
    $('.login-btn').click(function(){
        $('.login-modal').show();
    });
    $('.close').click(function(){
        $('.login-modal').animate({
            'marginLeft':'800px'
        },2200);
    });

    var headNav = $(".top-header");
    $(window).on('load scroll', function () {
        if($(this).scrollTop() > 500 && headNav.hasClass('fixed') == false) {
            headNav.css({"top": '-100px'});
            headNav.addClass('fixed');
            headNav.animate({"top":'0px'},600);
        } else if ($(this).scrollTop() < 150 && headNav.hasClass('fixed') == true) {
            headNav.removeClass('fixed');
        }
    });

});
