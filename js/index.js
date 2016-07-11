$(function(){
	// var $box=$(".leftdiv");
	// var $imgs=$(".leftdiv>a");
	// var imgW=$imgs.width();
	// console.log(imgW)
	// var len=$imgs.length;
	// var $xb=$('.xb');
	// var now=0;
	// var next=0;
	// var $btnR=$('.btnR');
	// var flag=true;
	
	// $imgs.css('left','100%').eq(0).css('left',0);
	// for(var i=1;i<=len;i++)
	// {
	// 	var str=(i==1)?'<li class=hot>'+i+'</li>':'<li>'+i+'</li>';
	// 	$xb.append(str);
	// }
	// var $lis=$('.xb>li');
	// var t=setInterval(moveR,3000);
	// function moveR()
	// {
	// 	// if(!flag){return;}
	// 	next++;
	// 	if(next>len-1)
	// 	{
	// 		next=0;
	// 	}
	// 	$imgs.eq(next).css({"left":'100%'});
	// 	$imgs.eq(now).animate({"left":'-100%'});
	// 	$imgs.eq(next).animate({"left":0});
		
	// 	$lis.eq(next).addClass('hot');
	// 	$lis.eq(now).removeClass('hot');
	// 	now=next;
	// }

	// $xb.mouseover(function(){
	// 	clearInterval(t);
	// })
	// $xb.mouseout(function(){
	// 	t=setInterval(moveR,3000);
	// })

	// $lis.click(function(){
	// 	var $index=$(this).index();
	// 	if($index==now)
	// 	{
	// 		return;
	// 	}
	// 	if($index<now)
	// 	{
	// 		$imgs.eq($index).css('left','-100%');
	// 		$imgs.eq(now).animate({'left':'100%'});
	// 		$imgs.eq($index).animate({'left':0});
	// 		$lis.removeClass('hot');
	// 		$lis.eq($index).addClass('hot');
	// 		now=next=$index;
	// 	}else{
	// 		$imgs.eq($index).css('left','100%');
	// 		$imgs.eq($index).animate({'left':0});
	// 		$imgs.eq(now).animate({'left':'-100%'});
	// 		$lis.removeClass('hot');
	// 		$lis.eq($index).addClass('hot');
	// 		now=next=$index;
	// 	}
	// })

	// $btnR.click(function(){
	// 	if(flag)
	// 	{
	// 		flag=false;
	// 		moveR();
	// 	}
	// })

	// var swiper = new Swiper('.swiper-container', {
 //        pagination: '.swiper-pagination',
 //        nextButton: '.swiper-button-next',
 //        prevButton: '.swiper-button-prev',
 //        slidesPerView: 1,
 //        paginationClickable: true,
 //        spaceBetween: 30,
 //        loop: true
 //    });


	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });



	
})