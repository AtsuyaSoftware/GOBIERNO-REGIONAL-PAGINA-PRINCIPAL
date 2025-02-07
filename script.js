new Swiper('.card-wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,  // Espacio entre las imágenes

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
      },

    breakpoints: {
        0: {
            slidesPerView: 1, // 1 imagen visible para pantallas pequeñas
        },
        768: {
            slidesPerView: 1, // 1 imagen visible para pantallas medianas
        },
        1024: {
            slidesPerView: 3, // 3 imágenes visibles para pantallas grandes
        }
    }
});