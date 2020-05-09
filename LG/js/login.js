$(function () {
    $('#last .lastHead p').click(function(){
        $(this).addClass('colorf60').siblings().removeClass('colorf60');
        var index=$(this).index();
        $('#last .lastBody .theOne').eq(index).show().siblings().hide();
    })


            $('#last .bodyLeft').hover(function () {
                $(this).find('img:first').stop(true).animate({
                    "left": "24px"
                }, 500, function () {
                    $(this).next().stop(true).fadeIn(500);
                });
            }, function () {
                $(this).find('img:last').stop(true).fadeOut(500,function(){
                    $(this).prev().stop(true).animate({
                        "left": "100px"    
                });
            })
        })
    })