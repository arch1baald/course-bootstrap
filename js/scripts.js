$(document).ready(function() {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function () {
        if ($(this).children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $(this).children('span').removeClass('fa-pause');
            $(this).children('span').addClass('fa-play');
        } else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $(this).children('span').removeClass('fa-play');
            $(this).children('span').addClass('fa-pause');
        }
    });

    <!-- To debug: console.log("") -->
    <!-- Assignment 4, Tasks 1, 2, 3 -->
    const idLoginModal = '#loginModal';
    $('#navBarLoginButton').click(function () {
        $(idLoginModal).modal('show');
    });
    $('#loginCloseCross').click(function () {
        $(idLoginModal).modal('hide');
    });
    $('#loginCancelButton').click(function () {
        $(idLoginModal).modal('hide');
    });

    const idReserveModal = '#reserveModal';
    $('#reserveTableButton').click(function () {
        $(idReserveModal).modal('show')
    });
    $('#reserveCloseCross').click(function () {
        $(idReserveModal).modal('hide')
    });
    $('#reserveCancelButton').click(function () {
        $(idReserveModal).modal('hide')
    });
});
