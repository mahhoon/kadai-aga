

$(function() {
//クリニックph表示
  $(window).scroll(function() {
    $('.clinic-ph').each(function() {
      const targetElement = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
　        
      if (scroll > targetElement - windowHeight + 300) {
        $(this).addClass('clinic-ph-view')
      }
    });
  });
  
  //症例写真表示
  $(window).scroll(function() {
    $('.case-photo-wrap,.case-photo-wrap-sp').each(function() {
      const targetElement = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      
      if (scroll > targetElement - windowHeight + 300) {
        $(this).addClass('case-photo-fadein')
      }
    });
  });
  
  //アコーディオン
  $('.acordion-btn-blue, .acordion-btn-orange').on('click', (e) => {
    $(e.target).parent().next().slideToggle(400);
    $(e.target).toggleClass('acordion-btn-minus');
  })
    
});

