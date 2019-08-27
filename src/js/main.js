$(document).ready(function(){
  // активация адаптивного меню
  $('.header-adaptive__btn').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('header-adaptive__btn_active');
  });
  // Раскрытие адаптивного меню
  $('.header-adaptive__btn').on('click', function(e){
    e.preventDefault();
    $('.header-adaptive__menu').toggleClass('header-adaptive__menu_active');
  });
  // Подключим валидатор формы
  $('form').each(function () {
    $(this).validate({

      rules: {
        username: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userphone: {
          required: true
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        username: {
          required: "Укажите имя",
          minlength: jQuery.validator.format("Ещё {0} символа"),
          maxlength: jQuery.validator.format("Надо меньше {0} символов")
        },
        email: {
          required: "Нам нужен ваш email",
          email: "email введен не верно"
        },
        userphone: {
          required: "Укажите телефон"
        }
      },

      errorClass: "invalid",
      errorElement: "label"
    });
  })

  // Маска для телефона
  // $('.phone').mask('+7 (999) 999-99-99');

  
});
