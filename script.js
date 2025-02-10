// Swiper para noticias
new Swiper('.noticias-swiper', {
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.noticias-swiper .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.noticias-swiper .swiper-button-next',
        prevEl: '.noticias-swiper .swiper-button-prev',
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

// Swiper para videos
new Swiper('.videos-swiper', {
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.videos-swiper .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.videos-swiper .swiper-button-next',
        prevEl: '.videos-swiper .swiper-button-prev',
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});
