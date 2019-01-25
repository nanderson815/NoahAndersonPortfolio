$(document).ready(function () {

    $('.sidenav').sidenav({
        draggable: true
    });

    $('.parallax').parallax();


    $(window).scroll(() => {
        console.log(scrollY);
        if (scrollY > 50) {
            $('#navBar').addClass('blue darken-4');

        } else {
            $('#navBar').removeClass('blue darken-4');

        }

        if (scrollY > 90) {
            $('#aboutMeHeader, #aboutMeP').removeClass('hidden');
            $('#aboutMeHeader').addClass('slideRight');
            $('#aboutMeP').addClass('slideUp');


        }

        if (scrollY > 1900) {
            $('#card1').removeClass('hidden').addClass('slideUp');
            setTimeout(function () { $('#card2').removeClass('hidden').addClass('slideUp') }, 500);
            setTimeout(function () { $('#card3').removeClass('hidden').addClass('slideUp') }, 1000);
            setTimeout(function () { $('#card4').removeClass('hidden').addClass('slideUp') }, 1500);
            setTimeout(function () { $('#card5').removeClass('hidden').addClass('slideUp') }, 2000);
            setTimeout(function () { $('#card6').removeClass('hidden').addClass('slideUp') }, 2500);
            setTimeout(function () { $('#card7').removeClass('hidden').addClass('slideUp') }, 3000);
        }
    })

    // $('#headerName').on('click', () => {
    //     window.scrollTo(0, 0);
    // });

});