// 메인 슬라이더 화살표버튼 클릭했을 때 이벤트

$('.arrow_next').click(function(){
    $('.slide_wrap').animate({marginLeft:"-100vw"},200,function(){
        $('.slide_wrap>a').first().appendTo('.slide_wrap');
        $('.slide_wrap').css('margin-left','0');
        
        var on = $('.main_bullet_on').index();

        if(on==6){
            $('.main_bullet>span').first().addClass("main_bullet_on");
            $('.main_bullet_on').last().removeClass("main_bullet_on");
        }else{
            $('.main_bullet_on').next().addClass("main_bullet_on");
            $('.main_bullet_on').first().removeClass("main_bullet_on");
        };
    });
})
$('.arrow_prev').click(function(){
    $('.slide_wrap>a').last().prependTo('.slide_wrap');
    $('.slide_wrap').css('margin-left','-100vw');
    $('.slide_wrap').animate({marginLeft:"0"},200)
})

// 메인 슬라이더 자동으로 넘어가는 이벤트
function next (){
    $('.slide_wrap').animate({marginLeft:"-100vw"},200,function(){
        $('.slide_wrap>a').first().appendTo('.slide_wrap');
        $('.slide_wrap').css('margin-left','0');

        var on = $('.main_bullet_on').index();

        if(on==6){
            $('.main_bullet>span').first().addClass("main_bullet_on");
            $('.main_bullet_on').last().removeClass("main_bullet_on");
        }else{
            $('.main_bullet_on').next().addClass("main_bullet_on");
            $('.main_bullet_on').first().removeClass("main_bullet_on");
        };
    });
}

setInterval(next,5000);


// 메인메뉴 마우스 호버 이벤트
$('.menu_left').mouseenter(function(){
    $('.mainmenu').show();
})
$('.menu_left').mouseleave(function(){
    $('.mainmenu').hide();
})
$('.mainmenu>ul>li').mouseenter(function(){
    var num = $(this).index();
    $(`.sub${num}`).show();
})
$('.mainmenu>ul>li').mouseleave(function(){
    var num = $(this).index();
    $(`.sub${num}`).hide();
})