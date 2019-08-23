$(document).ready(function(){
  $('.header-adaptive__btn').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('header-adaptive__btn_active');
  });
  $('.header-adaptive__btn').on('click', function(e){
    e.preventDefault();
    $('.header-adaptive__menu').toggleClass('header-adaptive__menu_active');
  });
});
