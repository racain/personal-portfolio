
/*****************************************************
This smoothly scrolls to the about section.
*******************************************************/

$('#down-arrow-btn').click(() => {
    $('html, body').animate({
        scrollTop: $('.about-info').offset().top
    }, 800);
});

