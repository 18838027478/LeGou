$(function(){
    $('#register .li_time').click(function(){
        var allTime=60;
        var timer=setInterval(function(){
            if(allTime<1){
               $('#register .li_time').html('获取验证码');
               $('#register .li_time').prop('disabled',false); 
            }else{
                $('#register .li_time').html(allTime+'&nbsp;秒后点击');
                $('#register .li_time').prop('disabled',true);
                allTime--; 
            }
        },1000)
    })
})