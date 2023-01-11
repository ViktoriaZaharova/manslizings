// mobile menu
$('.btn-burger').on('click', function () {
	$(this).toggleClass('click');
	$('.overlay-mobile').fadeToggle();
	$('.header-bottom').fadeToggle();
});

$('.nav-menu__close, .overlay-mobile').on('click', function (e) {
	e.preventDefault();
	$('.header-bottom').fadeOut();
	$('.overlay-mobile').fadeOut();
	$('.btn-burger').removeClass('click');
});

// $(function () {
//     $("#filter__range").slider({
//         min: 0,
//         max: 10000,
//         values: [1000, 7892],
//         range: true,
//         stop: function (event, ui) {
//             $('.price-range-min.value').html('€' + $("#filter__range").slider("values", 0));
//             $('.price-range-max.value').html('€' + $("#filter__range").slider("values", 1));
//         },
//         slide: function (event, ui) {
//             $('.price-range-min.value').html('€' + $("#filter__range").slider("values", 0));
//             $('.price-range-max.value').html('€' + $("#filter__range").slider("values", 1));
//         }
//     });
//
//     $('#filter__range .ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + '€' + $('#filter__range').slider('values', 0) + '</span>');
//     $('#filter__range .ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + '€' + $('#filter__range').slider('values', 1) + '</span>');
// });


$('.slider-range1').slider({
	range: true,
	min: 0,
	max: 10000,
	values: [1000, 7895],
	classes: {
		"ui-slider-handle": "ui-corner-all"
	},
	slide: function (event, ui) {
		//Поле минимального значения
		$(".dec1").val('€' + ' ' + ui.values[0]);
		//Поле максимального значения
		$(".dec2").val('€' + ' ' + ui.values[1]);
	}
});

$(".dec1").val('€' + ' ' + $(".slider-range1").slider("values", 0));
$(".dec2").val('€' + ' ' + $(".slider-range1").slider("values", 1));

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
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
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
				prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
				nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
				arrows: true,
				dots: true
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
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
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

//плавный скролл
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
});
//плавный скролл end


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
			prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
			nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
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
						fade: true,
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
		// $('.product-characteristics .collapse').collapse({
		//     toggle: true
		// });
	} else {
		$(".category-cars-slider.slick-initialized").slick("unslick");
		$(".steps-work-images.slick-initialized").slick("unslick");
		$(".steps-work-slider.slick-initialized").slick("unslick");
		$(".interested-slider.slick-initialized").slick("unslick");
		// $('.product-characteristics .collapse').collapse('dispose');
		$('.product-characteristics .collapse').collapse({
			toggle: false
		});
	}

	if ($(window).width() > 576) {
		$('.car-availability-slider:not(.slick-initialized)').slick({
			dots: false,
			slidesToShow: 4,
			arrows: true,
			variableWidth: false,
			prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
			nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
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
	$('.sidebar').fadeOut();
	$('.mobile-sorting').fadeOut();
});

$('.btn-filter').on('click', function () {
	$('.sidebar').fadeToggle();
});

$('.btn-sorting').on('click', function () {
	$('.mobile-sorting').fadeToggle();
});



// this is your selector
$.fileup({
	url: window.location.pathname + window.location.search,
	inputID: 'upload-demo',
	queueID: 'upload-demo-queue',
	dropzoneID: '',
	files: [],
	fieldName: 'filedata',
	extraFields: {},
	sizeLimit: 0,
	filesLimit: 0,
	method: 'post',
	timeout: null,
	autostart: false,
});


// invoke plugin
// $('.inp-file').MultiFile({
//     list: '.files-list'
// });

$(document).ready(function () {
	var input = document.querySelector(".phone-input1");
	window.intlTelInput(input, {
		separateDialCode: true,
		defaultCountry: 'auto',
		onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
			"ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
			"li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
			"ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"],
	});

	var input2 = document.querySelector(".phone-input2");
	window.intlTelInput(input2, {
		separateDialCode: true,
		defaultCountry: 'auto',
		onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
			"ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
			"li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
			"ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"],
	});

	var input3 = document.querySelector(".phone-input3");
	window.intlTelInput(input3, {
		separateDialCode: true,
		defaultCountry: 'auto',
		onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
			"ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
			"li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
			"ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"],
	});

});


$("body").on("click", ".btn-top-scroll", function (e) {
	e.preventDefault();
	$("html, body").animate({
		scrollTop: 0
	}, "slow");
});


$(document).scroll(function () {
	var y = $(this).scrollTop();
	if (y > 200) {
		$('.btn-top-scroll').css('right', '15px');
	} else {
		$('.btn-top-scroll').css('right', '-100%');
	}
});

// fixed sidebar
// $(function () {
//     var topPos = $('.product-gallery-wrapper').offset().top;
//     $(window).scroll(function () {
//         var top = $(document).scrollTop(),
//             pip = $('.product-characteristics').offset().top,
//             height = $('.product-gallery-wrapper').outerHeight();
//         if (top > topPos && top < pip - height) {
//             $('.product-gallery-wrapper').addClass('fixed').removeAttr("style");
//         } else if (top > pip - height) {
//             $('.product-gallery-wrapper').removeClass('fixed').css({'position': 'absolute', 'bottom': '0'});
//         } else {
//             $('.product-gallery-wrapper').removeClass('fixed');
//         }
//     });
// });


