const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const feedbackslider = new Swiper('.feedback-slider', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.feedback-button-next',
    prevEl: '.feedback-button-prev',
  },

});
