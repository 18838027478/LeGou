$(function () {
    add();
    // 加号
    $('#shopBody .bodyMore .Choice li:nth-child(4)').find('span:last-child').click(function () {
        var value = parseInt($(this).prev().val());
        value++;
        $(this).prev().val(value);

        var somePrice = parseFloat($(this).parent().prev().find("span").html());
        somePrice = somePrice * value;
        $(this).parent().next().children().html(somePrice.toFixed(2));
        add();
    })
    // 减号
    $('#shopBody .bodyMore .Choice li:nth-child(4)').find('span:first-child').click(function () {
        var value = parseInt($(this).next().val());
        if (value <= 1) {
            value = 1;
        } else {
            value--;
        }
        $(this).next().val(value);

        var somePrice = parseFloat($(this).parent().prev().find("span").html());
        somePrice = somePrice * value;
        $(this).parent().next().children().html(somePrice.toFixed(2));
        add();

    })
    // 中间的input事件
    $('#shopBody .bodyMore .Choice li:nth-child(4)').children('input').blur(function () {
        var value = parseInt($(this).val());
        if (isNaN(value) || value == '' || value < 1) {
            // alert('输入错误');
            $(this).val("1");
        } else {
            $(this).val(value);
        }
        add();

    })
    $('#shopBody .Choice li:last-child').find('p:first-child').click(function () {
        $(this).parents('.Choice').remove();
    })
    // 全选和单选事件
    $('#shopBody .checkEvery').click(function () {
        var check = $(this).prop('checked');
        $('.checkEvery,.checkEach').prop("checked", check);
        add();
    })
    $('#shopBody .checkEach').click(function () {
        var flag = true;
        $('.checkEach').each(function () {
            var isCheck = $(this).prop('checked');
            if (!isCheck) {
                flag = false;
            }
        })
        if (flag) {
            $('.checkEvery').prop('checked', true);
        } else {
            $('.checkEvery').prop('checked', false);
        }
        add();
    })
    $('#shopBody .delChoice').click(function () {
        $('.checkEach').each(function () {
            var check = $(this).prop('checked');
            if (check) {
                $(this).parents('.Choice').remove();
            }
        })
        add();
    })

    // 更新函数
    function add(){
        var num=0;
        var price=0;
        $('#shopBody .Choice').each(function(){
            var check=$(this).find('.checkEach').prop('checked');
            if(check){
                num+=parseInt($(this).find('li:nth-child(4) input').val());
                price+=parseFloat($(this).find('li:nth-child(5) span').html());
            }
            $('#shopBody .carFoot .num').html(num);
            $('#shopBody .carFoot .allPrice').html(price.toFixed(2));
        })
    }

})