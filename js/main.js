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
      subscribe = $('.subscribe');

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

  $(function() {
 
    $(window).scroll(function() {
     
    if($(this).scrollTop() != 0) {
     
    $('#toTop').fadeIn();
     
    } else {
     
    $('#toTop').fadeOut();
     
    }
     
    });
     
    $('#toTop').click(function() {
     
    $('body,html').animate({scrollTop:0},1500);
     
    });
     
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
  
  });
  
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
  
  next.css('left', next.width() +20 +bullets.width() +20)
  bullets.css('left', prev.width() +20)

  new WOW().init();

  $(".modal__form").validate({
   errorClass:  "invalid",
    errorElement: "div",
   rules: {
      // Строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        phone: true
      },
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhone: {
        required: "Заполните поле",
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    },
    submitHandler: function (form) {
      $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
      alert('Форма отправлена. Мы свяжемся с вами в течение 10 миут');
      $(form)[0].reset();
      modal.removeClass('modal--visible');
      }
      });
      }
  });

  // маска для номера телефона
  $('[type=tel]').mask('+7 (000) 000-00-00', { placeholder: "Ваш номер телефона" });

  $(".control__form").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // Строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        phone: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhone: {
        required: "Заполните поле",
      }
    }
  });

  $(".footer__form").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // Строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        phone: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhone: {
        required: "Заполните поле",
      }
    }
  });
  
});

