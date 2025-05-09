searchForm = document.querySelector('#search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}



$(window).on("load", function () {
    $(".loader-container").fadeOut("slow");
})


let activePage = window.location.pathname;
let container = document.getElementById('nav2');
var navItems = container.querySelectorAll(".nav-item a");
navItems.forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})

// book-slider}
$(document).ready(function () {

    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        smartSpeed: 2000,
        autoplayTimeout:8000,
        dots: false,
        navText: ['<', '>'],
        autoplay:
        {
            delay: 5000,
            disableOnInteraction: false,
        },
        responsive: {
            0: {

            },
            600: {

            },
            1000: {

            },
        }
    })
});

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay:
    {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:
    {
        0:
        {
            slidesPerView: 1,
        },
        450:
        {
            slidesPerView: 2,
        },
        768:
        {
            slidesPerView: 3,
        },
        1024:
        {
            slidesPerView: 4,
        },
    },

});


var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay:
    {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints:
    {
        0:
        {
            slidesPerView: 1,
        },

        768:
        {
            slidesPerView: 2,
        },
        1024:
        {
            slidesPerView: 3,
        },
    },

});



