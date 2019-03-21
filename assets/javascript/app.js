
window.onload = function () {
    // similar behavior as clicking on a link
    window.location.href = "https://www.noahanderson.dev/";
}

$('.sidenav').sidenav({
    draggable: true
});

$('.parallax').parallax();

$('.modal').modal();

$('.hexagon').hover(function () {
    $(this).children().addClass('pulse');
}, function () {
    $(this).children().removeClass('pulse');
});

$(window).scroll(() => {
    // console.log(scrollY);
    if (scrollY > 50) {
        $('#navBar').addClass('blue darken-4');

    } else {
        $('#navBar').removeClass('blue darken-4');
    }

    // if (scrollY > 1550) {
    //     $('#card1').removeClass('hidden').addClass('slideUp');
    //     setTimeout(function () { $('#card2').removeClass('hidden').addClass('slideUp') }, 500);
    //     setTimeout(function () { $('#card3').removeClass('hidden').addClass('slideUp') }, 1000);
    //     setTimeout(function () { $('#card4').removeClass('hidden').addClass('slideUp') }, 1500);
    //     setTimeout(function () { $('#card5').removeClass('hidden').addClass('slideUp') }, 2000);
    //     setTimeout(function () { $('#card6').removeClass('hidden').addClass('slideUp') }, 2500);
    //     setTimeout(function () { $('#card7').removeClass('hidden').addClass('slideUp') }, 3000);
    //     setTimeout(function () { $('#card8').removeClass('hidden').addClass('slideUp') }, 3500);
    // }

    // if (scrollY > 3480) {
    //     $('#contactCard').removeClass('hidden').addClass('bigEntrance');
    // }
});

var sender;
var data;


$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    if ($('#first_name').val() != "" && $('#email').val() != "" && $('#textarea1').val() != "") {
        $('#modal1').modal('open');
        $("#sentMessage").addClass('hidden');
        $("#loader").removeClass('hidden');
        console.log($('#textarea1').val());
        sender = $('#first_name').val() + " " + $('#last_name').val();


        data = {
            service_id: 'gmail',
            template_id: 'template_mjYN8BQS',
            user_id: 'user_MXAiEo7cocXKDbNvoFujf',
            template_params: {
                from_name: sender,
                message_html: $('#textarea1').val(),
                from_email: $('#email').val(),
                reply_to: 'nanderson815@gmail.com'
            }
        };

        sendMail();
    }
});


function sendMail() {
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function () {
        $('#first_name').val("");
        $('#last_name').val("");
        $('#textarea1').val("");
        $('#email').val("");
        // alert('Your mail is sent!');
        $("#loader").addClass('hidden');
        $("#sentMessage").removeClass('hidden');
    }).fail(function (error) {
        alert('Oops... ' + JSON.stringify(error));
    });
}



