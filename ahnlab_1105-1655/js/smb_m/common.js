$(document).ready(function () {
	$('.menu .menuItem a').on('keyup', function () {
		$(this).parents('.menuItem').addClass('on');
		$(this).parents('.menuItem').find('.depthTwo p:last-child a').on('blur', function () {
			$(this).parents('.menuItem').removeClass('on');
		});
	});
	// tabBtn
	$('.tabBtn button').on('click', function () {
		var $thisP = $(this).parent();
		$thisP.addClass('on')
			.siblings('.tabBtn').removeClass('on');
		$thisP.next().show()
			.siblings('.tabContent').hide();;
	});
	var $window = $(window);
	$window.on('scroll', function () {
		var init = $(this).scrollTop();
		var quickTop = $window.height() * 0.3;
		if (init <= 0) {
			$('header').removeClass('active');
		} else {
			$('header').addClass('active');
		}
	});
	if ($window.scrollTop() != 0) {
		$('header').addClass('active');
	}

	$('.menuOpenBtn button').on('click', function () {
		windowTop = $window.scrollTop();
		$('.moMenu').addClass('open');
		$('.menuDimed').css({
			'opacity': '1',
			'transform': 'translate(0,0)'
		});
		$('html, body,.moContainer').css({
			'height': '100%',
			'overflow': 'hidden'
		});
		$('.container').css({
			'transform': 'translateY(-' + windowTop + 'px'
		});
		$('.quickMenu').hide();
		$('.menuCloseBtn button').on('click', function () {
			$('.moMenu').removeClass('open');
			$('.menuDimed').css({
				'opacity': '0',
				'transform': 'translate(-100%,0)'
			});
			$('html, body,.moContainer').css({
				'height': 'auto',
				'overflow': 'auto'
			});
			$('html, body').scrollTop(windowTop);
			$('.container').removeAttr('style');
			$('.quickMenu').show();
		});
	});
	//share
	$('.btnShare').on('click', function () {
		var shareBlock = $('.shareWrap').css('display') === 'block';
		shareBlock ? $('.shareWrap').hide() : $('.shareWrap').show();
	})
	$('.menuItem > p button').on('click', function () {
		var nextShow = $(this).parent().next().css('display') === 'block';
		if (!nextShow) {
			$('.menuItem > p button').removeClass('active');
			$(this).addClass('active');
			$('.depthTwo').hide();
			$(this).parent().next().slideDown();
		} else {
			$(this).removeClass('active');
			$(this).parent().next().slideUp();
		}

	});

	$('.eventContainer .tabBtn button').on('click', function () {
		var gnbHeight = $('header').outerHeight(),
			thisIdx = $(this).index() + 1,
			scTop = $('.event0' + thisIdx).offset().top - gnbHeight;
		$('html, body').animate({
			scrollTop: scTop
		}, 500);
	});

	$('#uPartner').on("propertychange change keyup paste input", function () {
		var tVal = $(this).val();

		if (tVal !== '') {
			$('.partnersAgree').show();
			$('.aggPartnerName').text(tVal);
		} else {
			$('.partnersAgree').hide()
			$('.aggPartnerName').text(' ');
		}
	});
	$('.close_quick').on('click', function () {
		$('.quickMenu').hide();
	});
	$('.zoomSec button').on('click', function () {
		var productNum = $(this).siblings('.quantity').find('input').val(),
			productName = $(this).siblings('.zoomTitle').text()
		productNameCut = $(this).siblings('.zoomTitle').children('span').text();
		productName = productName.replace(productNameCut, "");
		var newWindow = window.open("about:blank");
		newWindow.location.href = "/html/smb_m/try/tryPop01.html?pNumber=" + productNum + "&pName=" + productName;
	});
	//20201030 add
	// 이벤트 Zoom 효과 및 Focus
	$(".zoomList").on('mouseenter', function () {
		var $this = $(this);
		$this.addClass('active');
		$this.find('.quantity input').focus();
	});
	$(".zoomList").on('mouseleave', function () {
		var $this = $(this)
		$this.removeClass('active');
		$this.find('.quantity input').blur();
	});
	// 이벤트 탭버튼 스크롤 Ani
	$('.eventContainer .tabBtn button').on('click', function () {
		var gnbHeight = $('.gnbWrap').outerHeight() + $('.smbWrap').outerHeight(),
			thisIdx = $(this).index() + 1,
			scTop = $('.event0' + thisIdx).offset().top - gnbHeight;
		$('html, body').animate({
			scrollTop: scTop
		}, 500);
	});
	//신청폼 약관 추천인 입력시 
	$('#uPartner').on("propertychange change keyup paste input", function () {
		var tVal = $(this).val();
		if (tVal !== '') {
			$('.partnersAgree').show();
			$('.aggPartnerName').text(tVal);
		} else {
			$('.partnersAgree').hide()
			$('.aggPartnerName').text(' ');
		}
	});
	// 20201029
	$('.modal_open').on('click', function () {
		$('.modal_container').addClass('on');
		$('.modal').addClass('on');
	});
	$('.modal_close').on('click', function () {
		$('.modal').removeClass('on');
		$('.modal_container').removeClass('on');
	});	
});

