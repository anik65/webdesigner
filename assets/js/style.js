
//  sticky nav
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
        $("nav").addClass("fixed-top");
    } else {
        $("nav").removeClass("fixed-top");
    }
});
$('body').scrollspy({ target: ".navbar", offset: 50 });
$('.carousel').carousel({
    interval: 3000
});
AOS.init();
//counter
$('.count').counterUp({
    delay: 10,
    time: 1500
});
$('.bxslider').bxSlider({
    controls: false,
    auto: true,

});

$(window).on("load",function () {
    $(".site-preloader-wrap").css({
        'display': 'none', 
    });
});

