$(function(){

  $("nav ul li a").click(function(e){
    // console.log($(this.hash).offset().top)
    var thisElem = $(this.hash);
    $("html,body").stop();
    $("html,body").animate({scrollTop : thisElem.offset().top},1500);
    //e.preventDefault();
    return false;
  });

  $("#collections").click(function(){
    $("html,body").stop();
    $("html,body").animate({scrollTop : $('#COLLECTION').offset().top},1500);
  });
  $("#whatchmakings").click(function(){
    $("html,body").stop();
    $("html,body").animate({scrollTop : $('#WATCHMAKING').offset().top},1500);
  });
  $("#thebrands").click(function(){
    $("html,body").stop();
    $("html,body").animate({scrollTop : $('#THEBRAND').offset().top},1500);
  });
  $("#stores").click(function(){
    $("html,body").stop();
    $("html,body").animate({scrollTop : $('#STORE').offset().top},1500);
  });

  const widthNum = 440;
  $(".box.items_4 .imgwrap").css({"padding-left":"0px"});
  var movecontent = $('.box.items_4 p').click(function(){
    $(".box.items_4 .imgwrap").animate({ paddingLeft : parseInt(widthNum)+"px"},"slow","swing",function(){
        /*animation 실행이 끝난 후 실행 영역*/
        $(".box.items_4 .imgwrap").css({"padding-left":"0px"});
        $(".box.items_4 .imgwrap .img:last").prependTo(".box.items_4 .imgwrap");
    });
  });
  var movements = setInterval(function(){
    $('.box.items_4 p').click();
  },3000);
  $(window).scroll(function(){
    //console.log($(window).height())
    if( $(window).scrollTop() >= $('.box.items_2 .items').offset().top ){
      $('.box.items_2 .items .imgwrap').css("top","150px")
      $('.imgsec img').css({marginLeft:"00px",opacity:"1"});
    }else{
      $('.box.items_2 .items .imgwrap').css("top","50px");
    }
  });
});