$(function () {
	var sp = 480; //SPのサイズを設定
  
	function masonry_execute() {
	  var $demo2 = $('.js-demo02');   //コンテナとなる要素を指定
  
	  if ( $('html').width() < sp ) { //ウィンドウ幅が480px以下だった場合、masonry破棄 (無効)
		$demo2.masonry('destroy');
	  } else {                        //ウィンドウ幅が480px以上だった場合、masonry適応
		$demo2.imagesLoaded(function(){
		  $demo2.masonry({
			itemSelector: '.js-item',
			columnWidth: 205,
			fitWidth: true,
		  });
		});
	  }
	}
	masonry_execute(); //masonry_execute関数を実行
  
	$(window).resize(function(){ //ウィンドウがリサイズされたら、再度masonry_execute関数を実行
	  masonry_execute();
	  console.log("戻りました");
	});
  });