    $(document).on('ready', function() {

      $(".regular").slick({
		autoplay:true,//자동 갤러리 구문(삭제시 수동으로 변함.)
		autoplaySpeed:2000,//자동 갤러리가 넘어가는 시간
        dots: true,
        infinite: true,
        slidesToShow: 4,//보여지는 갤러리 수
        slidesToScroll: 4,//넘어가는 갤러리 수
		speed: 500//다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간
      });
	  
    });