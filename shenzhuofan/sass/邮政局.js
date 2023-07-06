var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable :true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
      slidesPerView: 2,
    },
    
  });

  var swiper = new Swiper("#mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    slidesPerView: 2.06,
    spaceBetween: 40,
    loop: true,
    autoplay:true,
  });

  $('#first').mouseenter(function(){
    $('#first-box').css('display',"block")
    $('#last-box').css('display',"none")
  })
  $('#last').mouseenter(function(){
    $('#last-box').css('display',"block")
    $('#first-box').css('display',"none")
  })