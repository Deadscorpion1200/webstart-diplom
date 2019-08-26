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
  // Высчитывание пропорциональной высоты блока анонсов для соц.сетей
  $('.anouncement__socials').top($('anouncement-block').height()/1.57);
  $(window).resize(function(){
    $('.anouncement__socials').top($('.anouncement-block').height()/1.57);
  });
});
