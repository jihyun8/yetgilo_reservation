$(function(){
	$("#reservation_now tr:nth-child(1) a.button").click(function(){
		$(".popup").fadeIn();
	});
	$(".popup .close").click(function(){
		$(".popup").fadeOut();
	});
	$(".popup .submit").click(function(){
		alert("현재 리뉴얼중입니다. 고객센터로 문의주세요(1588-2345)");
	});
	$(".button_box .submit1").click(function(){
		alert("예약완료 되었습니다.");
	});
});
