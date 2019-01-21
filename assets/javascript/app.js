$(document).ready(function () {

    $('.sidenav').sidenav({
        draggable: true
    });

    $('.parallax').parallax();

    $(window).scroll(() => {
        if (scrollY > 50) {
            $('#navBar').addClass('blue darken-4');

        } else {
            $('#navBar').removeClass('blue darken-4');

        }
    })

});