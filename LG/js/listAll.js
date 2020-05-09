$(function(){
    $("#topBanner").tyslide({
        boxh: 430, //盒子的高度
        w: 1000, //盒子的宽度
        h: 400, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 10, //控制按钮圆角度数
        controlsColor: "#ccc", //普通控制按钮的颜色
        controlsCurrentColor: "#f60", //当前控制按钮的颜色
        isNumber: true //是否需要数字
    });
  
})