(function(){
	$('.head-content ul li').eq(1).find('a').css({color:"#fff"})
	$('.head-content ul li').mouseover(function(){
		var index = $(this).index();
		$('.head-content ul li').eq(index).siblings().find('a').css({color:"#000"})
		$('.list-bg').stop().animate({left:(index-1)*84+"px"},300,function(){
			$('.head-content ul li').eq(index).find('a').css({color:"#fff"});
		})
	})
	$('.head-content ul').mouseleave(function(){
		$('.list-bg').stop().animate({left:"0"},300,function(){
			$('.head-content ul li').eq(1).find('a').css({color:"#fff"})
		})
		$('.head-content ul li').eq(1).siblings().find('a').css({color:"#000"});
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