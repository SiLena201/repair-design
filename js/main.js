/*document.addEventListener("DOMContentLoaded", function(event) { 
 const modal = document.querySelector('.modal');
 const modalBtn = document.querySelectorAll('[data-toggle=modal]');
 const closeBtn = document.querySelector('.modal__close');
 const switchModal = () => {
  modal.classList.toggle('modal--visible');
 }
 
 modalBtn.forEach(element => {
  element.addEventListener('click', switchModal);
 });

  closeBtn.addEventListener('click', switchModal);
 
});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  }); 

  $(document).ready(function(){
    $('.modal--visible').hide();
    $('.modal').click(function(){
        $('.modal--visible').show();
    });
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27)
            $('.modal--visible').hide();
    });
  });

  $(document).mouseup(function (e) {
    var modal = $('.modal');
    if (e.target!=modal[0]&&modal.has(e.target).length === 0) {
      $('.modal--visible').hide();
    }
    
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    allowTouchMove: false,
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    
  })
  var mySwiper = new Swiper('.swiper-container-2', {
    loop: true,
    allowTouchMove: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', next.width() +20 +bullets.width() +20)
  bullets.css('left', prev.width() +20)

  new WOW().init();








  
  // маска для номера телефона
  $('input[name=userPhone]').mask('+7 (000) 00-00-000', {placeholder: "+7 (000) 000-00-00"});

});
