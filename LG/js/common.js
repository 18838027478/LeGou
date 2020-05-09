$(function(){
    // 手风琴效果
    $(".allbooksNews li").mouseover(function () {
        $(this).find(".style1").hide().next().show();
        $(this).siblings().find(".style1").show().next().hide();
    });

})