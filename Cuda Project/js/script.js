//=========================
//SKILL BAR SECTION
//=======================
$(function () {
    $('svg.radial-progress').each(function (index, value) {
        $(this).find($('circle.complete')).removeAttr('style');
    });
    $(window).scroll(function () {
        $('svg.radial-progress').each(function (index, value) {

            if (
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                percent = $(value).data('percentage');
                radius = $(this).find($('circle.complete')).attr('r');
                circumference = 2 * Math.PI * radius
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                $(this).find($('circle.complete')).animate({
                    'stroke-dashoffset': strokeDashOffset
                }, 1250);
            }
        });
    }).trigger('scroll');
});

// MIXITUP
var mixer = mixitup('.grid-work-container', {
    animation: {
        duration: 300
    }
});
//WOW ANIMATION  
wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})
wow.init();

//SCROLL TO TOP

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
