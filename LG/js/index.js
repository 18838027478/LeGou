$(function () {
    $("#banner1").tyslide({
        boxh: 430, //盒子的高度
        w: 1000, //盒子的宽度
        h: 400, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 10, //控制按钮圆角度数
        controlsColor: "#d8d8d8", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
        isNumber: true //是否需要数字
    });

    $("#asideBanner .asideLeft li").hover(function () {
        $(this).find(".listFirst").addClass("active");
        $(this).find(".listSecond").show();
    }, function () {
        $(this).find(".listFirst").removeClass("active");
        $(this).find(".listSecond").hide();
    })

    $(".ebookBanner").tyslide({
        boxh: 219, //盒子的高度
        w: 331, //盒子的宽度
        h: 219, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 10, //控制按钮宽度
        controlsH: 5, //控制按钮高度
        radius: 0, //控制按钮圆角度数
        controlsColor: "#ccc", //普通控制按钮的颜色
        controlsCurrentColor: "#fff", //当前控制按钮的颜色
        isNumber: false //是否需要数字
    });

    $("#books .floorTitle ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var booksIndex = $(this).index();
        $("#books .bookIn .booksRight").eq(booksIndex).show().siblings(".booksRight").hide();
    });


    $(".floorBanner").tyslide({
        boxh: 340, //盒子的高度
        w: 384, //盒子的宽度
        h: 340, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 4, //控制按钮高度
        radius: 0, //控制按钮圆角度数
        controlsColor: "#ccc", //普通控制按钮的颜色
        controlsCurrentColor: "#fff", //当前控制按钮的颜色
        isNumber: false //是否需要数字
    });

    $("#clothes .floorTitle li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var clothesIndex = $(this).index();
        $("#clothes .clothesIn .floorRight").eq(clothesIndex).show().siblings(".floorRight").hide();
    });

    $("#sports .floorTitle li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var clothesIndex = $(this).index();
        console.log(clothesIndex);
        $("#sports .clothesIn .floorRight").eq(clothesIndex).show().siblings(".floorRight").hide();
    });

    $("#children .floorTitle li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var clothesIndex = $(this).index();
        $("#children .clothesIn .floorRight").eq(clothesIndex).show().siblings(".floorRight").hide();
    });

    $("#more .moreRight li").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var moreIndex = $(this).index();
        $("#more .moreAll").stop(true).animate({
            left: moreIndex * (-1200) + 'px'
        }, 600);
    });

    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 800) {
            $("#searchAll").show();
            $(".searchOther").appendTo(".allOther");
            $("#renturnBox").show();
            $("#leftOther").show();
            $("#securities").show();
        } else {
            $("#searchAll").hide();
            $(".searchOther").appendTo(".searchBar");
            $("#renturnBox").hide();
            $("#leftOther").hide();
            $("#securities").hide();
        }
        $("#renturnBox").click(function () {
            $("html,body").stop(true).animate({
                "scrollTop": "0px"
            }, 500);
        })
    });

    var color = ["#93d56e", "#f75627", "#ba9eee", "#fe7594", "#c21d51", "#ffdc0c"];
    $("#leftOther li").hover(function () {
        var col = color[$(this).index()];
        $(this).css({
            "backgroundPositionX": "-40px",
            'paddingLeft': '40px',
            'width': '40px',
            'backgroundColor': col
        });
    }, function () {
        $(this).css({
            "backgroundPositionX": "0",
            'width': '0',
            'backgroundColor': '#f2f2f2'
        });
    });

    $('#leftOther li').click(function(){
        var otherIndex=$(this).index();
        var otherTop=$('.navFloor').eq(otherIndex).offset().top;
        $('html,body').stop(true).animate({'scrollTop':otherTop-80+'px'},500);
    })

    $("#securities li:nth-child(2)").hover(function(){
        $(this).find('img:last-child').show();
    },function(){
        $(this).find('img:last-child').hide();
    })
})