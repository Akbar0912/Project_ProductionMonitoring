$(".menu > ul > li").click(function(e) {
    $(this).toggleClass("active");

    $(this).find("ul").slideToggle();
});

$(".menu-btn").click(function(){
    $(".sidebar").toggleClass("active");
})