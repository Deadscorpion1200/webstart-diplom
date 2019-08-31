$(document).ready(function () {
    // активация адаптивного меню
    $('.header-adaptive__btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('header-adaptive__btn_active');
    });
    // Раскрытие адаптивного меню
    $('.header-adaptive__btn').on('click', function (e) {
        e.preventDefault();
        $('.header-adaptive__menu').toggleClass('header-adaptive__menu_active');
    });
    // Подключение блока авторизации
    var authorization = $('.authorization');
    var authorizationClose = $('#authorization-close');
    $('.navbar__registration').on('click', function () {
        authorization.addClass('authorization__active');
        authorizationClose.on('click', function () {
            authorization.removeClass('authorization__active');
        });
    });
    // Подключение блока регистрации для телефонов
    $('.navbar-mobile__registration').on('click', function () {
        authorization.addClass('authorization__active');
        authorizationClose.on('click', function () {
            authorization.removeClass('authorization__active');
        });
    });
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target)
                .offset()
                .top
        }, 500);
    });
    // Подключение модального окна
    var modal = $('.modal');
    var modalClose = $('#modal-close');
    var modalThank = $('#overlay-thank');
    var closeThank = $('#close-thank');
    $('.modal-window').on('click', function () {
        event.preventDefault();
        modal.addClass('modal__active');
        modalClose.on('click', function () {
            modal.removeClass('modal__active');
        });
    });
    // Подключим валидатор формы
    // $('form').each(function () {
    //     $(this).validate({

    //         rules: {
    //             username: {
    //                 required: true,
    //                 minlength: 2,
    //                 maxlength: 15
    //             },
    //             userphone: {
    //                 required: true
    //             },
    //             useremail: {
    //                 required: true,
    //                 email: true
    //             }
    //         },
    //         messages: {
    //             username: {
    //                 required: "Укажите имя",
    //                 minlength: jQuery
    //                     .validator
    //                     .format("Мин. имя из {0} букв"),
    //                 maxlength: jQuery
    //                     .validator
    //                     .format("Слишком много букв")
    //             },
    //             useremail: {
    //                 required: "Нам нужен ваш email",
    //                 email: "email введен не верно"
    //             },
    //             userphone: {
    //                 required: "Укажите телефон"
    //             }
    //         },

    //         errorClass: "invalid",
    //         errorElement: "label"
    //     });
    // })

    $('#modal-form').validate({
        errorClass: "invalid",
        errorElement: "label",
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userphone: {
                required: true
            },
            useremail: {
                required: true,
                email: true
            }
        },
        messages: {
            username: {
                required: "Укажите имя",
                maxlength: jQuery
                    .validator
                    .format("Не больше 15 символов"),
                minlength: jQuery
                    .validator
                    .format("Осталось символов: {0}")
            },
            userphone: {
                required: "Укажите телефон"
            },
            useremail: {
                required: "Укажите почту",
                email: "Неправильный формат email"
            }
        },
        submitHandler: function () {
            event.preventDefault();
            $.ajax({
                url: 'mail.php',
                type: 'POST',
                data: $('#modal-form').serialize(),
                success: function (data) {
                    modalThank.addClass('modal-thank_active');
                    closeThank.on('click', function () {
                        modalThank.removeClass('modal-thank_active');
                        $('#modal-form').trigger("reset");
                    });
                }
            });
        }
    });

    // Маска для телефона $('.phoЫne').mask('+7 (999) 999-99-99');
    $('.phone').mask('+7 (999) 999-99-99');

});
