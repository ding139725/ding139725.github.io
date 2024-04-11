$(document).ready(function () {

    /* Responsive Menu 
     �������أ�http://www.bootstrapmb.com
     */
    $("#show-themability_megamenu").click(function () {
        $('.badminton_menu .main-menu-outer').toggleClass('main-menu-active');
        $('body').addClass('active');
    });

    $(".badminton_menu .menu_title i").click(function () {
        $('.badminton_menu .main-menu-outer').removeClass('main-menu-active');
        $('body').removeClass('active');
    });

    /* .Responsive Menu */
    
    // Wow active
    new WOW().init();
});


// Banner Section 
$('.banner-slider').owlCarousel({
    loop: true,
    autoplay: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false,
    autoplay: true,
    animateOut: 'fadeOut',
    autoplayTimeout: 3000,
    margin: 0,
    responsive: {
        0: {
            items: 1
        }
    }
});


//Championship Section
$('.championship-owl').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        346: {
            items: 2
        },
        768: {
            items: 3,
        },
    }
});

// Best-Player Section
$('.best-player').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        449: {
            items: 2
        },
        768: {
            items: 3,
        },
    }
});


// Testimonial_Section
$('.testimonial-items').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        }
    }
});

// Blog_Section 
$('.blogs-items').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});

// PLAYER DETAILS
$('.player-silder').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});


function footerExplanCollapse() {
    $(".footer-row h4").addClass('toggled');
    $('.footer-row .toggled').on('click', function (e) {
        e.preventDefault();
        if ($(window).width() < 992) {
            $(this).toggleClass('active');
            $(this).parent().find('ul').toggleClass('active').toggle('slow');
        }
    });
}


function updateColumnsAndContent() {
    if ($(window).width() < 992) {
        $('.footer-column ul').hide();

    } else {
        $('.footer-column ul').show();
    }
}


jQuery(window).resize(function () {
    updateColumnsAndContent();
});

$(document).ready(function () {
    // responsive footer
    footerExplanCollapse();
    // responsive footer
    updateColumnsAndContent();

    /* Contact Form */
    if (window.location.href.indexOf('submitted=true') !== -1) {
        $('.submitted').show();
    }
    /* .Contact Form */
});



(function ($) {
    'use strict';
    /* Contact Form */
    if (window.location.href.indexOf('submitted=true') !== -1) {
        $('.submitted').show();
    }

    $(document).ready(function () {
        // Back to top
        backToTop();
    });

    // Scroll to Top 
    function backToTop() {
        //Check to see if the window is top if not then display button
        $(".scrollToTop").hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
        //Click event to scroll to top
        $('.scrollToTop').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    }

})(jQuery);

$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-submenu .show').removeClass("show");
    });

    return false;
});