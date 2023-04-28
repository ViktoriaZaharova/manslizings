// mobile menu
$('.btn-burger').on('click', function () {
    $(this).hasClass('click') ? $('.overlay-mobile').fadeOut() : $('.overlay-mobile').fadeIn();

    $(this).toggleClass('click');
    $('.header-bottom').fadeToggle();

    $('.mobile-sorting').fadeOut();
    $('.sidebar').fadeOut();
});

$('.nav-menu__close, .overlay-mobile').on('click', function (e) {
    e.preventDefault();
    $('.header-bottom').fadeOut();
    $('.overlay-mobile').fadeOut();
    $('.btn-burger').removeClass('click');

    $('.mobile-sorting').fadeOut();
    $('.sidebar').fadeOut();
});

$("body").on("click", ".btn-top-scroll", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, 700);
});


$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.btn-top-scroll').css('right', '15px');
    }
    else {
        $('.btn-top-scroll').css('right', '-100%');
    }
    
    if($('.home-page-section').length == 0)
    {
        if (y > 80) {
            $('.working-hours-header').addClass('d-none');
        }
        else {
            $('.working-hours-header').removeClass('d-none');
        }
    }
});

$(function () {

    $('.numeric').keyup(function (e)
    {
        if (/\D/g.test(this.value))
        {
            // Filter non-digits from input value.
            this.value = this.value.replace(/\D/g, '');
        }
    });

    if ($('html').attr('lang') == 'lv') {
        $.extend($.validator.messages, {
            required: "Šis lauks ir obligāts.",
            remote: "Lūdzu, pārbaudiet šo lauku.",
            email: "Lūdzu, ievadiet derīgu e-pasta adresi.",
            emailfull: "Lūdzu, ievadiet derīgu e-pasta adresi.",
            url: "Lūdzu, ievadiet derīgu URL adresi.",
            date: "Lūdzu, ievadiet derīgu datumu.",
            dateISO: "Lūdzu, ievadiet derīgu datumu (ISO).",
            number: "Lūdzu, ievadiet derīgu numuru.",
            digits: "Lūdzu, ievadiet tikai ciparus.",
            creditcard: "Lūdzu, ievadiet derīgu kredītkartes numuru.",
            equalTo: "Lūdzu, ievadiet to pašu vēlreiz.",
            extension: "Lūdzu, ievadiet vērtību ar derīgu paplašinājumu.",
            maxlength: $.validator.format("Lūdzu, ievadiet ne vairāk kā {0} rakstzīmes."),
            minlength: $.validator.format("Lūdzu, ievadiet vismaz {0} rakstzīmes."),
            rangelength: $.validator.format("Lūdzu ievadiet {0} līdz {1} rakstzīmes."),
            range: $.validator.format("Lūdzu, ievadiet skaitli no {0} līdz {1}."),
            max: $.validator.format("Lūdzu, ievadiet skaitli, kurš ir mazāks vai vienāds ar {0}."),
            min: $.validator.format("Lūdzu, ievadiet skaitli, kurš ir lielāks vai vienāds ar {0}."),
            intlphone: "Nepareizs telefona numurs!"
        });
    }

    if ($('html').attr('lang') == 'ru') {
        $.extend($.validator.messages, {
            required: "Это поле необходимо заполнить.",
            remote: "Пожалуйста, введите правильное значение.",
            email: "Пожалуйста, введите корректный адрес электронной почты.",
            emailfull: "Пожалуйста, введите корректный адрес электронной почты.",
            url: "Пожалуйста, введите корректный URL.",
            date: "Пожалуйста, введите корректную дату.",
            dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
            number: "Пожалуйста, введите число.",
            digits: "Пожалуйста, вводите только цифры.",
            creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
            equalTo: "Пожалуйста, введите такое же значение ещё раз.",
            extension: "Пожалуйста, выберите файл с правильным расширением.",
            maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
            minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
            rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
            range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
            max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
            min: $.validator.format("Пожалуйста, введите число, большее или равное {0}."),
            intlphone: "Неправильный номер телефона!"
        });
    }

    if ($('html').attr('lang') == 'en') {
        $.extend($.validator.messages, {
            required: "This field is required.",
            remote: "Please check this field.",
            email: "Please enter a valid email address.",
            emailfull: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter numbers only.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same again.",
            extension: "Please enter a value with a valid extension.",
            maxlength: $.validator.format("Please enter a maximum of {0} characters."),
            minlength: $.validator.format("Please enter at least {0} characters."),
            rangelength: $.validator.format("Please enter {0} to {1} characters."),
            range: $.validator.format("Please enter a number between {0} and {1}."),
            max: $.validator.format("Please enter a number less than or equal to {0}."),
            min: $.validator.format("Please enter a number greater than or equal to {0}."),
            intlphone: "Wrong phone number!"
        });
    }

    jQuery.validator.addMethod("intlphone", function (value, element) {
        var iti = window.intlTelInputGlobals.getInstance(element);
        var country = $(element).data('country');

        if (country == 'lv')
        {
            if (element.value.trim() != '') {
                if (iti.isValidNumber()) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }

        return true;
        //return this.optional(element) || !$(element).closest('label').hasClass('invalid-phone');
    });

    jQuery.validator.addMethod("emailfull", function (value, element) {
        return this.optional(element) || /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(value);
    });

    $('.letters-only').bind('keydown', function (e) {
        var key = e.keyCode;

        if (key == 32)
            return true;

        return ((key >= 65 && key <= 90) || key == 8);
    });

    var priceRangeContainer = $("#filter__range").closest('.range_val');

    var priceMin = parseInt($(priceRangeContainer).find(".dec1").val());
    var priceMax = parseInt($(priceRangeContainer).find(".dec2").val());

    $("#filter__range").slider({
        min: priceMin,
        max: priceMax,
        values: [1000, 7892],
        range: true,
        classes: {
            "ui-slider-handle": "ui-corner-all"
        },
        slide: function (event, ui) {
            var priceRange = $(this).closest('.price-range');
            if (priceRange.length > 0)
            {
                $(priceRange).addClass('has-changes');
            }

            $(priceRangeContainer).find('.dec1').val('€' + $("#filter__range").slider("values", 0));
            $(priceRangeContainer).find('.dec2').val('€' + $("#filter__range").slider("values", 1));
        }
    });

    $(priceRangeContainer).find(".dec1").val('€' + ' ' + $("#filter__range").slider("values", 0));
    $(priceRangeContainer).find(".dec2").val('€' + ' ' + $("#filter__range").slider("values", 1));

    $(".request-base-form").each(function () {

        var policyRequired = false;
        var policyErrorMsg = '';

        if ($(this).find('.policy-checkbox').length > 0)
        {
            $.validator.setDefaults({
                ignore: [] // DON'T IGNORE PLUGIN HIDDEN SELECTS, CHECKBOXES AND RADIOS!!!
            });

            policyRequired = true;
            policyErrorMsg = $(this).find('.policy-checkbox').data('required-error-message');
        }

        $(this).validate({
            rules: {
                phone: {intlphone: true},
                email: {
                    emailfull: true
                },
                policy: {required: policyRequired}
            },
            messages: {
                policy: {
                    required: policyErrorMsg
                }
            },
            errorElement: 'span',
            errorClass: 'error-form',
            errorPlacement: function (error, element) {
                var intlPhone = $(element).closest('label').find('.iti');

                if (intlPhone.length > 0)
                {
                    $(intlPhone).after(error);
                }
                else {

                    if ($(element).hasClass('checkbox-inp'))
                    {
                        var policyError = $(element).closest('form').find('.policy-error');
                        if ($(policyError).length > 0)
                        {
                            error.appendTo($(policyError));
                        }
                        else {
                            error.insertAfter($(element).closest('label'));
                        }

                    }
                    else {
                        error.appendTo($(element).closest('label'));
                    }
                }
            },
            highlight: function (element) {
                //$(element).closest('label').addClass('error-label');
                $(element).parent().next('div').show();
            },
            unhighlight: function (element) {
                //$(element).closest('label').removeClass('error-label');
                $(element).parent().next('div').hide();
            }
        });

        $(this).submit(function (e) {
            e.preventDefault();

            if (!$(this).valid())
                return;

            var form = $(this);
            var url = form.attr('action');

            var data = form.serialize();
            var formInput = $(form).find('.intl-phone-input');

            if (formInput.length > 0)
            {
                var iti = window.intlTelInputGlobals.getInstance(formInput[0])
                data = data + '&phone_full=' + encodeURIComponent(iti.getNumber());
            }

            $.ajax({
                type: "POST",
                url: url,
                data: data,
                success: function (data)
                {
                    if (data.success)
                    {
                        if (typeof gtag !== 'undefined') {
                            gtag('event', $(form).data('event'), {
                                'event_label': decodeURI(window.location.href),
                                'value': $(form).data('title')
                            });
                        }

                        window.location = data.href;
                    }
                    else {
                    }
                }
            });
        });
    })

    var carsDisplay = localStorage.getItem("display");
    if (carsDisplay && carsDisplay == 'list')
    {
        $('#catalog-tab2__link').removeClass('active');
        $('#catalog-tab2').removeClass('active');
        $('#catalog-tab2').removeClass('show');

        $('#catalog-tab1__link').addClass('active');
        $('#catalog-tab1').addClass('active');
        $('#catalog-tab1').addClass('show');
    }

    $('.view-switch a').click(function () {
        var displayType = $(this).attr('href') == '#catalog-tab1' ? 'list' : 'grid';
        localStorage.setItem('display', displayType);
    });

});

var sliderContainer1 = $('.slider-range1').closest('.range_val');
var slider1Min = parseInt($(sliderContainer1).find(".dec1").data('min'));
var slider2Max = parseInt($(sliderContainer1).find(".dec2").data('max'));

$('.slider-range1').slider({
    range: true,
    min: slider1Min,
    max: slider2Max,
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    change: function (event, ui) {
    },
    slide: function (event, ui) {
        var container = $(this).closest('.range_val');

        if (ui.handleIndex == 0)
        {
            $(container).find(".dec1").addClass('has-changes');
            $(container).find(".dec1").val(ui.values[0] + ' ' + '€');
        }
        else {
            $(container).find(".dec2").addClass('has-changes');
            $(container).find(".dec2").val(ui.values[1] + ' ' + '€');
        }
    }
});

var year = new Date().getFullYear();
$('.year-range').slider({
    range: true,
    min: 1990,
    max: 2022,
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        var container = $(this).closest('.range_val');

        //Поле минимального значения
        $(container).find(".dec1").val(ui.values[0]);
        //Поле максимального значения
        $(container).find(".dec2").val(ui.values[1]);
    }
});

$('.mileage-range').slider({
    range: true,
    min: 0,
    max: 700000,
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        var container = $(this).closest('.range_val');

        //Поле минимального значения
        $(container).find(".dec1").val(ui.values[0]);
        //Поле максимального значения
        $(container).find(".dec2").val(ui.values[1]);
    }
});

$('.range_val').each(function () {

    if ($(this).hasClass('range-option'))
    {
        setSliderValues($(this), '.year-range');
        setSliderValues($(this), '.mileage-range');
    }
    else {
        setSliderValues($(this), '.slider-range1');
    }

})

function setSliderValues(rangeElement, sliderElement) {

    var container = $(rangeElement).closest('.range_val');

    if ($(rangeElement).find(".dec1").val())
    {
        var min = $(rangeElement).find(".dec1").val();
        var hasCurrency = min.indexOf('€') > -1;

        min = min.replace(/€/g, "");

        if (min > 0)
        {
            $(rangeElement).find(sliderElement).slider('values', 0, min);

            var dec1Value = hasCurrency ? min + ' ' + '€' : min;
            $(container).find(".dec1").val(dec1Value);
        }
    }

    if ($(rangeElement).find(".dec2").val())
    {
        var max = $(rangeElement).find(".dec2").val();
        var hasCurrency = max.indexOf('€') > -1;

        max = max.replace(/€/g, "");

        if (max > 0)
        {
            $(rangeElement).find(sliderElement).slider('values', 1, max);
            var dec2Value = hasCurrency ? max + ' ' + '€' : max;
            $(container).find(".dec2").val(dec2Value);
        }
    }
}

$('.slider-range4').slider({
    range: "min",
    min: 0,
    max: 50000,
    value: 12950,
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec3").val('€' + ' ' + ui.value);
    }
});
$(".dec3").val('€' + ' ' + $(".slider-range4").slider("value"));

$('.slider-range5').slider({
    range: "min",
    min: 0,
    max: 112,
    value: 64,
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec4").val(ui.value + ' ' + 'мес.');
    }
});
$(".dec4").val($(".slider-range5").slider("value") + ' ' + 'мес.');

$('.main-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="catalog/view/theme/manslizings/img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="catalog/view/theme/manslizings/img/sprite.svg#next"></use></svg></button>',
});

$('.reviews-slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.product-gallery').slick({
    slidesToShow: 1,
    // fade: true,
    arrows: false,
    asNavFor: '.product-gallery-preview',
    responsive: [

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="catalog/view/theme/manslizings/img/sprite.svg#prev"></use></svg></button>',
                nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="catalog/view/theme/manslizings/img/sprite.svg#next"></use></svg></button>',
                arrows: true,
                dots: false
            }
        }
    ]
});

$('.product-gallery-preview').slick({
    slidesToShow: 5,
    arrows: true,
    asNavFor: '.product-gallery',
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="catalog/view/theme/manslizings/img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="catalog/view/theme/manslizings/img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
});

$('.product-gallery-preview').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var nextThumb = $(slick.$slides.get(nextSlide));
    var img = $(nextThumb).find('img').data('img');
    var slideIndex = $(nextThumb).find('img').data('id');

    $('#slick-big-img-' + slideIndex).attr('data-lazy', img);

    setTimeout(
            function ()
            {
                $('#slick-big-img-' + slideIndex).attr('src', img);
            }, 300);
});


// slick active
$(window).on('load resize', function () {
    if ($(window).width() < 992) {
        $('.category-cars-slider:not(.slick-initialized)').slick({
            dots: false,
            slidesToShow: 1,
            arrows: false,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });

        $('.steps-work-images').slick({
            slidesToShow: 1,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="catalog/view/theme/manslizings/img/sprite.svg#prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="catalog/view/theme/manslizings/img/sprite.svg#next"></use></svg></button>',
            asNavFor: '.steps-work-slider',
        });

        $('.steps-work-slider').slick({
            slidesToShow: 1,
            arrows: false,
            focusOnSelect: true,
            asNavFor: '.steps-work-images',
        });

        $('.interested-slider').slick({
            slidesToShow: 2,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 870,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        adaptiveHeight: true,
                    }
                }
            ]
        });

        $('.collapsed-btn').attr('data-toggle', 'collapse');
    }
    else {
        $(".category-cars-slider.slick-initialized").slick("unslick");
        $(".steps-work-images.slick-initialized").slick("unslick");
        $(".steps-work-slider.slick-initialized").slick("unslick");
        $(".interested-slider.slick-initialized").slick("unslick");
        $('.product-characteristics .collapse').collapse({
            toggle: false
        });
    }

    if ($(window).width() > 576) {
        $('.car-availability-slider:not(.slick-initialized)').slick({
            dots: false,
            slidesToShow: 4,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="catalog/view/theme/manslizings/img/sprite.svg#prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="catalog/view/theme/manslizings/img/sprite.svg#next"></use></svg></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });

    }
    else {
        $(".car-availability-slider.slick-initialized").slick("unslick");
    }
});
// slick active


$(".js-tab-trigger").hover(function () {
    var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="' + id + '"]');

    // $('.mega-menu__route.active').removeClass('active'); // 1
    // $(this).addClass('active'); // 2

    $('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});


//progressbar
function setProgress(index) {
    const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

    $progressBar
            .css('width', calc + '%')
            .attr('aria-valuenow', calc);

}

const $slider = $('.category-cars-slider');
const $progressBar = $('.progress-bg');

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    setProgress(nextSlide);

});



$('.btn-toggle-filter').on('click', function (e) {
    e.preventDefault();
    // $('.overlay-mobile').fadeIn();
    $('.filter-wrapper').fadeIn();
});

$('.btn-close__filter, .overlay-mobile').on('click', function (e) {
    e.preventDefault();
    $('.filter-wrapper').fadeOut();
    // $('.overlay-mobile').fadeOut();
});

$('.sidebar-close').on('click', function () {
    $('.overlay-mobile').fadeOut();
    $('.sidebar').fadeOut();
    $('.mobile-sorting').fadeOut();
});

$('.btn-filter').on('click', function () {
    $('.overlay-mobile').fadeIn();
    $('.sidebar').fadeToggle();
    $('.mobile-sorting').fadeOut();
});

$('.btn-sorting').on('click', function () {
    $('.overlay-mobile').fadeIn();
    $('.mobile-sorting').fadeToggle();
    $('.sidebar').fadeOut();
});

$(".cb-value").click(function () {
    var mainParent = $(".toggle-btn");
    if ($(mainParent).find("input.cb-value").is(":checked")) {
        $(mainParent).addClass("active");
        $('.conditions-v2 .tab-pane:first-child').addClass('show active');
        $('.conditions-v2 .tab-pane:last-child').removeClass('show active');
    }
    else {
        $(mainParent).removeClass("active");
        $('.conditions-v2 .tab-pane:first-child').removeClass('show active');
        $('.conditions-v2 .tab-pane:last-child').addClass('show active');
    }
});

$(document).ready(function () {

    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });

    var settings = {
        separateDialCode: true,
        defaultCountry: 'auto',
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.15/js/utils.min.js',
        preferredCountries: ["lv", "lt", "ee", "de", "gb", "fi", "se", "no", "dk", "fr", "es", "it", "nl", "ie", "at", "be", "pt", "lu", "pl", "cz", "hr", "sk", "bg"],
        onlyCountries: ["lv", "lt", "ee", "de", "gb", "fi", "se", "no", "dk", "fr", "es", "it", "nl", "ie", "at", "be", "pt", "lu", "pl", "cz", "hr", "sk", "bg"],
        localizedCountries: {
            "lv": 'Latvija',
            "lt": 'Lietuva',
            "ee": 'Igaunija',
            "de": 'Vācija',
            "gb": 'Lielbritānija',
            "fi": 'Somija',
            "se": 'Zviedrija',
            "no": 'Norvēģija',
            "dk": 'Dānija',
            "fr": 'Francija',
            "es": 'Spānija',
            "it": 'Itālija',
            "nl": 'Nīderlande',
            "ie": 'Īrija',
            "at": 'Austrija',
            "be": 'Beļģija',
            "pt": 'Portugāle',
            "lu": 'Luksemburga',
            "pl": 'Polija',
            "cz": 'Čehija',
            "hr": 'Horvātija',
            "sk": 'Slovākija',
            "bg": 'Bulgārija'
        }
    };

    if ($('html').attr('lang') == 'lv')
    {
        settings.localizedCountries = {
            "lv": 'Latvija',
            "lt": 'Lietuva',
            "ee": 'Igaunija',
            "de": 'Vācija',
            "gb": 'Lielbritānija',
            "fi": 'Somija',
            "se": 'Zviedrija',
            "no": 'Norvēģija',
            "dk": 'Dānija',
            "fr": 'Francija',
            "es": 'Spānija',
            "it": 'Itālija',
            "nl": 'Nīderlande',
            "ie": 'Īrija',
            "at": 'Austrija',
            "be": 'Beļģija',
            "pt": 'Portugāle',
            "lu": 'Luksemburga',
            "pl": 'Polija',
            "cz": 'Čehija',
            "hr": 'Horvātija',
            "sk": 'Slovākija',
            "bg": 'Bulgārija'
        };
    }

    if ($('html').attr('lang') == 'ru')
    {
        settings.localizedCountries = {
            "lv": 'Латвия',
            "lt": 'Литва',
            "ee": 'Эстония',
            "de": 'Германия',
            "gb": 'Великобритания',
            "fi": 'Финляндия',
            "se": 'Швеция',
            "no": 'Норвегия',
            "dk": 'Дания',
            "fr": 'Франция',
            "es": 'Испания',
            "it": 'Италия',
            "nl": 'Нидерладны',
            "ie": 'Ирландия',
            "at": 'Австрия',
            "be": 'Бельгия',
            "pt": 'Португалия',
            "lu": 'Люксембург',
            "pl": 'Польша',
            "cz": 'Чехия',
            "hr": 'Хорватия',
            "sk": 'Словакия',
            "bg": 'Болгария'
        };
    }

    var input = document.querySelector(".phone-input1");
    if (input)
    {
        window.intlTelInput(input, settings);
    }

    var input2 = document.querySelector(".phone-input2");
    if (input2)
    {
        window.intlTelInput(input2, settings);
    }

    var input3 = document.querySelector(".phone-input3");
    if (input3)
    {
        window.intlTelInput(input3, settings);
    }

    $('.intl-phone-input').inputmask({mask: "99999999999999999999", greedy: true, placeholder: ''});
    $('.intl-phone-input').each(function () {
        var iti = window.intlTelInput(this, settings);

        validatePhone(this, iti);
    })

    function validatePhone(input, intl)
    {
        //$(input).inputmask({alias: 'numeric', rightAlign: false, placeholder: ""});

        input.addEventListener("countrychange", function () {
            validateCountryPhone(input, intl);
        });

        input.addEventListener('keyup', function (e) {
            var country = intl.getSelectedCountryData();
            $(this).data('country', country.iso2);
            e.preventDefault();
        });

        input.addEventListener('keydown', function (e) {
            var country = intl.getSelectedCountryData();

            var start = e.target.selectionStart;
            var end = e.target.selectionEnd;

            if (country.iso2 == 'lv' && input.value.length >= 8 && e.keyCode != 46 && e.keyCode != 8 && end - start == 0)
            {
                e.preventDefault();
            }
        });
    }

    function validateCountryPhone(input, intl, skipLengthLimit)
    {
        $(input).closest('label').removeClass('invalid-phone');
        var country = intl.getSelectedCountryData();

        if (country.iso2 == 'lv')
        {
            if (input.value.trim() != '') {
                if (intl.isValidNumber()) {
                    $(input).closest('label').removeClass('error-input invalid-phone');
                }
                else {
                    $(input).closest('label').addClass('error-input invalid-phone');
                }
            }

            if (input.value.length >= 2)
                $(input).valid();
        }
        else {
            $(input).valid();
        }
    }

    $('header .form-search input').focus(function () {
        $('.btn-search-header').addClass('btn-search-header__close');
        $('.btn-search-header').removeClass('btn-search-header');
    });

    $('.btn-search-header').on('click', function (e) {
        e.preventDefault();

        var
                $this = $(this),
                content = $('header .form-search');


        if (!$this.hasClass('trigger')) {
            $this.addClass('trigger');
            $this.addClass('btn-search-header__close');
            content.css('left', '50%');
        }
        else {
            $this.removeClass('btn-search-header__close');
            $this.removeClass('trigger');
            $this.addClass('btn-search-header');
            content.css('left', '-100%');
        }
    });

    $(".car-search-form").submit(function (e) {
        e.preventDefault();

        var search = $(this).find('.search-input');
        var actionUrl = $(this).attr('action');

        $.get(actionUrl + '&filter_ocfilter=10121:' + $(search).val(), function (json) {
            window.location = json.href;
        });
    });

});



