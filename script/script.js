/* Smooth scroll */
$(function () {
    $('a[href*=\\#]:not([href=\\#])').click(function () {
        //closing menu
        $(function () {
            $(".start-menu").removeClass("button-anim-close"),
                $(".main-nav").removeClass("nav-anim"),
                $(".start-menu").removeClass("button-anim"),
                $(".main-nav").removeClass("nav-anim-close"),
                $(".start-menu").addClass("button-anim-close"),
                $(".main-nav").addClass("nav-anim-close")
        });

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/* Activate Wow.js */
new WOW().init();

/* Activate Animate on Scroll */
AOS.init();

/* Preloader */
$(window).on("load", function () {
    $(".load").fadeOut("slow");
})


/* Swiper JS */
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 2,
    mousewheel: false,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


/* Best Sellers */
(function ($) {

    $(document).ready(function () {

        var s = $('.slider'),
            sWrapper = s.find('.slider-wrapper'),
            sItem = s.find('.slide'),
            btn = s.find('.slider-link'),
            sWidth = sItem.width(),
            sCount = sItem.length,
            slide_date = s.find('.slide-date'),
            slide_title = s.find('.slide-title'),
            slide_text = s.find('.slide-text'),
            slide_more = s.find('.slide-more'),
            slide_image = s.find('.slide-image img'),
            sTotalWidth = sCount * sWidth;

        sWrapper.css('width', sTotalWidth);
        sWrapper.css('width', sTotalWidth);

        var clickCount = 0;

        btn.on('click', function (e) {
            e.preventDefault();

            if ($(this).hasClass('next')) {

                (clickCount < (sCount - 1)) ? clickCount++ : clickCount = 0;
            } else if ($(this).hasClass('prev')) {

                (clickCount > 0) ? clickCount-- : (clickCount = sCount - 1);
            }
            TweenMax.to(sWrapper, 0.4, {
                x: '-' + (sWidth * clickCount)
            })


            //CONTENT ANIMATIONS

            var fromProperties = {
                autoAlpha: 0,
                x: '-50',
                y: '-10'
            };
            var toProperties = {
                autoAlpha: 0.8,
                x: '0',
                y: '0'
            };

            TweenLite.fromTo(slide_image, 1, {
                autoAlpha: 0,
                y: '40'
            }, {
                autoAlpha: 1,
                y: '0'
            });
            TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
            TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
            TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
            TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

        });

    });
})(jQuery);

$('.overlay').addClass('overlay-blue');

/* testinomials */
$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 1],
        pagination: true,
        navigation: false,
        autoplay: true
    });
});

/* Sweet Alert and Alertify */

function hindipd() {
    swal("Hindi Pendrive List", "Coming Soon! Stay tune with us");
}

function engpd() {
    swal("English Pendrive List", "Coming Soon! Stay tune with us");
}


/* collapisable questions */

var coll = document.getElementsByClassName("ques-collab");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

/* Search Filter */

function searchbook() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchbooks');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('div');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h2")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


/* Counting Animation */

function animateValue(id, start, end, duration){
    if (start===end) return;
    var range = end - start;
    var current = start;
    var increment = end> start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function(){
                           current += increment;
                           obj.innerHTML = current;
                           if(current == end){
                                clearInterval(timer);
    }
                           }, stepTime);
}

animateValue("value-count", 0, 500, 2000);
animateValue("value-count1", 0, 100, 2000);
animateValue("value-count2", 0, 5, 2000);