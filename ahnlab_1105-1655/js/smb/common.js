$(document).ready(function() {
	$('.menu .menuItem a').on('keyup',function() {
		$(this).parents('.menuItem').addClass('on');
		$(this).parents('.menuItem').find('.depthTwo p:last-child a').on('blur',function() {
			$(this).parents('.menuItem').removeClass('on');
		});
	});
	$('.menu .menuItem p').on('mouseenter',function() {
		$(this).addClass('on');
		$('.menuItem').on('mouseleave',function() {
			$(this).find('.on').removeClass('on');
		});
	});
	// tabBtn
	$('.tabBtn button').on('click',function() {
		var $thisP = $(this).parent();
		$thisP.addClass('on')
		.siblings('.tabBtn').removeClass('on');
		$thisP.next().show()
		.siblings('.tabContent').hide();
	});
	//share
	$('.btnShare').on('click',function() {
		var shareBlock = $('.shareWrap').css('display') === 'block';
		shareBlock ? $('.shareWrap').hide() : $('.shareWrap').show();
	});
	//scrollEvent
	var $window = $(window);
	$window.on('scroll', function() {
		var init = $(this).scrollTop();
		var quickTop = $window.outerHeight()*0.5;
		if (init <= 0) {
			$('.smbWrap').removeClass('active');
		} else {
			$('.smbWrap').addClass('active');			
			$('.quickMenu').stop().animate({
				"top": quickTop + init
			}, 500);
		}		
		$('.gnbWrap, .smbWrap').css({left: 0 - $(this).scrollLeft()});
	});
	if ($window.scrollTop() != 0) {
		$('.smbWrap').addClass('active');
	}
	// 이벤트 Zoom 효과 및 Focus
	$(".zoomList").on('mouseenter',function() {
		var $this = $(this);
		$this.addClass('active');  
		$this.find('.quantity input').focus();
	});
	$(".zoomList").on('mouseleave',function() {
		var $this = $(this);
		$this.removeClass('active');
		$this.find('.quantity input').blur();
	});
	// 이벤트 탭버튼 스크롤 Ani
	$('.eventContainer .tabBtn button').on('click',function() {
		var gnbHeight = $('.gnbWrap').outerHeight() +  $('.smbWrap').outerHeight(),
		thisIdx = $(this).index() + 1,
		scTop = $('.event0'+thisIdx).offset().top - gnbHeight;
		$('html, body').animate({
			scrollTop: scTop 
		}, 500);
	});
	//신청폼 약관 추천인 입력시 
	$('#uPartner').on("propertychange change keyup paste input",function() {
		var tVal = $(this).val();
		if (tVal !== '') {
			$('.partnersAgree').show();
			$('.aggPartnerName').text(tVal);
		} else {
			$('.partnersAgree').hide();
			$('.aggPartnerName').text(' ');
		}
	});
	// supportEvent_detail2
	$('.event_detail2').on('click', 'a[href^="#"]', function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 119
		}, 500);
	});
	$('.modal_open').on('click', function() {
		$('body').css('overflow','hidden');
		$('.modal_container').addClass('on');
		$('.modal').addClass('on');
	});
	$('.modal_close').on('click', function() {
		$('body').css('overflow', 'visible');
		$('.modal').removeClass('on');
		$('.modal_container').removeClass('on');
	});
	//fullpage.js
	$('#fullpage').fullpage({
		//options here
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		autoScrolling:true,
		scrollHorizontally: true
	});
	//methods
	$.fn.fullpage.setAllowScrolling(false);
});
