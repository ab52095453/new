//技能小动画
$(function(){
   $(".icon-box a").mouseenter(
       function () {
           $(this).find("img").animate({top:"-45px",opacity:"0"},300,function(){
               $(this).css({top:"112px"});
               $(this).animate({top:"10px",opacity:"1"},400)
           })
       }
   )
});
//导航样式
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 10){
            $(".navbar-fixed-top").animate({top:"0px",opacity:"1"},400);
        }
        if($(window).scrollTop() < 10){
            $(".navbar-fixed-top").stop(true,false).animate({top:"-51px",opacity:"0"},400);
        }
    });
    //返回顶部
    $(".back").click(function(){
       $("html,body").animate({
           scrollTop:0
       },800)
    });
});
//弹出框
$(function () {
    $('[data-toggle="popover"]').popover()
});