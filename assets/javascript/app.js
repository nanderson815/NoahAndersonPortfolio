$(document).ready(function () {

    $('.sidenav').sidenav({
        draggable: true
    });

    $('.parallax').parallax();

    $('#startText').removeClass('hidden');
    $('#startText').addClass('slideInLeft');

    window.setTimeout(function () {
        $('#startText2').removeClass('hidden');
        $('#startText2').addClass('slideIn');
    }, 1000);


    $(window).scroll(() => {
        console.log(scrollY);
        if (scrollY > 50) {
            $('#navBar').addClass('blue darken-4');

        } else {
            $('#navBar').removeClass('blue darken-4');

        }

        if (scrollY > 90) {
            $('#aboutMeHeader, #aboutMeP').removeClass('hidden');
            $('#aboutMeHeader').addClass('slide2');
            $('#aboutMeP').addClass('slideInLeft');


        }
    })

    // $('#headerName').on('click', () => {
    //     window.scrollTo(0, 0);
    // });

});