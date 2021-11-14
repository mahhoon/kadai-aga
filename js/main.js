

$(function() {
  //フェードイン
  const fadeInPhoto = (element, view) => {
    $(window).scroll(function() {
      $(element).each(function() {
        const targetElement = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
　        
        if (scroll > targetElement - windowHeight + 300) {
          $(this).addClass(view)
        }
      });
    });
  }
  
  //クリニックph表示
  fadeInPhoto('.clinic-ph', 'clinic-ph-view');
  //症例写真表示
  fadeInPhoto('.case-photo-wrap,.case-photo-wrap-sp', 'case-photo-fadein');
  
  //アコーディオン
  $('.acordion-btn-blue, .acordion-btn-orange').on('click', (e) => {
    $(e.target).parent().next().slideToggle(400);
    $(e.target).toggleClass('acordion-btn-minus');
  })
    
});

