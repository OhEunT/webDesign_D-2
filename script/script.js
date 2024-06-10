//popup
// $("#notice .content ul li:nth-child(1)")
$("#notice .content ul li").eq(0).on("click",function(){
    $("#popupBg").css({display:"block"});
});
$("#close").on("click", function(){
    $("#popupBg").css({display:"none"});
})

//gnb
$("#gnb >li").on("mouseenter", function(){
    $(this).find(".sub").stop().slideDown();
});
$("#gnb >li").on("mouseleave", function(){
    $(this).find(".sub").stop().slideUp();
});

//slide

setInterval(function(){
    $(".frame").animate({left : "-100%"}, 1000, function(){
        $(".frame >li").eq(0).appendTo(".frame");
        $('.frame').css({left:"0px"});
    })
}, 3000);