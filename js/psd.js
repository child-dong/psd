(function(){
	var init_dis = $('.on').position().left;
	$('.list-bg').css({left:init_dis})
	$('.head-content ul li').mouseover(function(){
		var left_dis = $(this).position().left;
		var wid = $(this).width();
		$('.list-bg').css({width:wid}).stop().animate({left:left_dis},300)
	})
	$('.head-content ul').mouseleave(function(){
		$('.list-bg').stop().animate({left:init_dis},300,function(){
			$('.list-bg').css({width:0})
		})
	})
	var mySwiper = new Swiper('.swiper-container',{
		effect : 'flip',
		autoplay: 2000,
		speed:500,
		autoplayDisableOnInteraction : false,
		flip:{
          slideShadows : true,
          limitRotation : true,
 		}
	})
})()