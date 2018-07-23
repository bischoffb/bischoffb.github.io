/* ####################################################################################################################### */

// JS Styling

/* ####################################################################################################################### */

// Fade in for each page entry
$(function() {
    $('body').removeClass('fade-out');
});

/* ####################################################################################################################### */


// Activation of Overlay Navigation Menu
$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

/* ####################################################################################################################### */

// Default

//Initializes to default invites
$('.hero-text-box').css('display', 'none');
$('#invites-text-box').css('display', 'block');

/* ####################################################################################################################### */

// Invites

// Activates Invites Slide Text
$('#linkInvites').mouseover(function() {
    $('.hero-text-box').css('display', 'none');
    $('#invites-text-box').fadeIn(700);
});

// Deactivates Invites Slide Text
$('#linkInvites').mouseout(function() {
    $('.hero-text-box').css('display', 'none');
    $('#invites-text-box').css('display', 'block');
    $('.invites-hero-image').css('display', 'block');
});


/* ####################################################################################################################### */

// Cards

// Activates Cards Slide Text
$('#linkCards').mouseover(function() {
    $('.invites-hero-image').css('display', 'none');
    $('.hero-text-box').css('display', 'none');
    $('#cards-text-box').fadeIn(700);
});

// Deactivates Cards Slide Text
$('#linkCards').mouseout(function() {
    $('.hero-text-box').css('display', 'none');
    $('#invites-text-box').css('display', 'block');
    $('.invites-hero-image').css('display', 'block');
    $('#cards-text-box').fadeOut(0);
});

/* ####################################################################################################################### */

// Swag

// Activates Swag Slide Text
$('#linkSwag').mouseover(function() {
    $('.invites-hero-image').css('display', 'none');
    $('.hero-text-box').css('display', 'none');
    $('#swag-text-box').fadeIn(700);
});

// Deactivates Swag Slide Text
$('#linkSwag').mouseout(function() {
    $('.hero-text-box').css('display', 'none');
    $('#invites-text-box').css('display', 'block');
    $('.invites-hero-image').css('display', 'block');
    $('#swag-text-box').fadeOut(0);
});

/* ####################################################################################################################### */

// Decor

// Activates Decor Slide Text
$('#linkDecor').mouseover(function() {
    $('.invites-hero-image').css('display', 'none');
    $('.hero-text-box').css('display', 'none');
    $('#decor-text-box').fadeIn(700);
});

// Deactivates Decor Slide Text
$('#linkDecor').mouseout(function() {
    $('.hero-text-box').css('display', 'none');
    $('#invites-text-box').css('display', 'block');
    $('.invites-hero-image').css('display', 'block');
    $('#decor-text-box').fadeOut(0);
});

/* ####################################################################################################################### */

// Art Prints

// Activates Art Prints Slide Text
$('#linkArtPrints').mouseover(function() {
    $('.invites-hero-image').css('display', 'none');
    $('.hero-text-box').css('display', 'none');
    $('#artprints-text-box').fadeIn(700);
});

// Deactivates Art Prints Slide Text
$('#linkArtPrints').mouseout(function() {
    $('.hero-text-box').css('display', 'none');
    $('#invites-text-box').css('display', 'block');
    $('.invites-hero-image').css('display', 'block');
    $('#artprints-text-box').fadeOut(0);
});

/* ####################################################################################################################### */

// Brand Kits

// Activates Brand Kits Slide Text
$('#linkBrandKits').mouseover(function() {
    $('.invites-hero-image').css('display', 'none');
    $('.hero-text-box').css('display', 'none');
    $('#brandkits-text-box').fadeIn(700);
});

// Deactivates Brand Kits Slide Text
$('#linkBrandKits').mouseout(function() {
    $('.hero-text-box').css('display', 'none');
    $('#invites-text-box').css('display', 'block');
    $('.invites-hero-image').css('display', 'block');
    $('#brandkits-text-box').fadeOut(0);
});

/* ####################################################################################################################### */

// Gifts

// Activates Gifts Slide Text
$('#linkGifts').mouseover(function() {
    $('.invites-hero-image').css('display', 'none');
    $('.hero-text-box').css('display', 'none');
    $('#gifts-text-box').fadeIn(700);
});

// Deactivates Gifts Slide Text
$('#linkGifts').mouseout(function() {
    $('.hero-text-box').css('display', 'none');
    $('#invites-text-box').css('display', 'block');
    $('.invites-hero-image').css('display', 'block');
    $('#gifts-text-box').fadeOut(0);
});

/* ####################################################################################################################### */

// Custom

// Activates Custom Slide Text
$('#linkCustom').mouseover(function() {
    $('.invites-hero-image').css('display', 'none');
    $('.hero-text-box').css('display', 'none');
    $('#custom-text-box').fadeIn(700);
});

// Deactivates Custom Slide Text
$('#linkCustom').mouseout(function() {
    $('#custom-text-box').fadeOut(0);
    $('.hero-text-box').css('display', 'none');
    $('#invites-text-box').css('display', 'block');
    $('.invites-hero-image').css('display', 'block');
});

/* ####################################################################################################################### */