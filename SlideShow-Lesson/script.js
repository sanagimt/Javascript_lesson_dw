const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true, 
  autoplay: {
    delay: 3000,
  },
 
  //ページネーション表示の設定
  pagination: { 
    el: '.swiper-pagination',
    clickable: true, 
  },
 
  //ナビゲーションボタン（矢印）表示の設定
  navigation: { 
    nextEl: '.swiper-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
  },
});