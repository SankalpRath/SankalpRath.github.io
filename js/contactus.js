$('.heading').click(function () {
    if ($(this).hasClass('selected')) return;

    $prev_content_id = "#" + $('.selected').attr('id') + '-b';
    $content_id = "#" + $(this).attr('id') + "-b";


    $('.selected').removeClass('selected');
    $(this).addClass('selected');
    console.log($content_id);
    //TEST BLOCK


    // console.log($('.contactus-content-h').scrollLeft());

    $('.contactus-content-h').animate({
        scrollLeft: ($('.contactus-content-h').scrollLeft() + $(this).position().left + 30) - (($(window).width() - $(this).width()) / 2)
    }, 700);

    // console.log("To scroll:" + ($('.contactus-content-h').scrollLeft() + $(this).position().left));
    // console.log($('.contactus-content-h').width());
    // console.log("browser width:" + $(window).width());
    // console.log("this offset left :" + $(this).offset().left);
    // console.log("this position left :" + $(this).position().left);


    //TEST BLOCK END
    //console.log($('.d-block').attr('id'));

    //hide previous data
    $($prev_content_id).removeClass('fadeInRight');
    $($prev_content_id).addClass('fadeOut');
    $($prev_content_id).addClass('d-none');
    $($prev_content_id).removeClass('d-block');

    //show current element
    $($content_id).removeClass('d-none');
    $($content_id).addClass('d-block');
    $($content_id).removeClass('fadeOut');
    $($content_id).addClass('fadeInRight');

    /* $($content_id).toggleClass('fadeOut');
     $($content_id).toggleClass('fadeInLeft');*/

    //console.log($($content_id).attr('class'));
});

$(document).ready(function () {
    if ($(document).scrollTop() > (window.innerHeight * 0.15)) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar").addClass("bg-info-1");
        $(".navbar").removeClass("bg-transparent"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
        $(".navbar").addClass("bg-transparent");
        $(".navbar").removeClass("bg-info-1"); // if not, change it back to transparent
    }


    $(window).scroll(function () { // check if scroll event happened
        //console.log("on scroll " + window.innerHeight + "/" + $(document).scrollTop() + " " + ($(document).scrollTop() > window.innerHeight));
        if ($(document).scrollTop() > (window.innerHeight * 0.15)) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar").addClass("bg-info-1");
            $(".navbar").removeClass("bg-transparent"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".navbar").addClass("bg-transparent");
            $(".navbar").removeClass("bg-info-1"); // if not, change it back to transparent
        }
    });
});