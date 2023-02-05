AOS.init({
    offset:100,
    duration: 1000,
});
$(function () {
    $('.burger-btn').on('click', function () {
      $('.burger-btn').toggleClass('close');
      $('.nav-wrapper').toggleClass('fade');
      $('body').toggleClass('noscroll');
    });

});
$('.nav-item').on('click' ,function (){
  $('.burger-btn').toggleClass('close');
  $('.nav-wrapper').toggleClass('fade');
});

$(function(){
  $('.nav-open').click(function(){
    $(this).toggleClass('active');
    $('.InItem').slideToggle();
  });
});

//     CSS にて ハンバーガーの中身を中央から 上に余白をつけるようにする
//     headerの余白を画像に合わせ、整える
//     フェードインスピードをタイトルと中身で、中身の方が早い方が良いことも