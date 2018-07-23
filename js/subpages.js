// JS 

// Fade in for each page entry
$(function() {
    $('body').removeClass('fade-out');
});

/* ######################################################################################### */

// Activation of Overlay Navigation Menu
$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

/* ######################################################################################### */

// FAQ Toggle Feature

if( jQuery(".faqSection .faq-title").hasClass('active') ){
    jQuery(".faqSection .faq-title.active").closest('.faqSection').find('.faq-inner').show();
}
jQuery(".faqSection .faq-title").click(function(){
    if( jQuery(this).hasClass('active') ){
        jQuery(this).removeClass("active").closest('.faqSection').find('.faq-inner').slideUp(200);
    }
    else{	jQuery(this).addClass("active").closest('.faqSection').find('.faq-inner').slideDown(200);
    }
});

