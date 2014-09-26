'use strict';

$(document).foundation();

$('.new-project-button').click(function(event) {
    event.preventDefault();
    $('.new-project').removeClass('hide');
});

$('.post-publish-switch label').click(function() {
    $('.post-publish-off').toggleClass('hide');
    $('.post-publish-on').toggleClass('hide');
});

$('.post-now a').click(function(event) {
    event.preventDefault();
    $('.post-publish-on span').addClass('hide');
    $('.post-in-future').removeClass('hide');
});
$('.post-in-future a').click(function(event) {
    event.preventDefault();
    $('.post-publish-on span').addClass('hide');
    $('.post-in-past').removeClass('hide');
});
$('.post-in-past a').click(function(event) {
    event.preventDefault();
    $('.post-publish-on span').addClass('hide');
    $('.post-now').removeClass('hide');
});

$('.new-org-button').click(function(event) {
    event.preventDefault();
    $('.new-org').removeClass('hide');
});

$('.new-member-button').click(function(event) {
    event.preventDefault();
    $('.new-member').removeClass('hide');
});

$('.project-settings-toggle').click(function(event) {
    event.preventDefault();
    $('.project-setting').toggle('fast');
});

$('#shareabouts-switch').click(function() {
    $('.shareabouts-switch-target').toggle('fast');
});

$('form').delegate('.section-settings-toggle', 'click', function(event) {
    event.preventDefault();
    $(this).parents('fieldset').find('.section-settings').toggle('fast');
});

$('.cover-image-switch').click(function() {
    $(this).parents('fieldset').find('.cover-image-container').toggle('fast');
});

$('#add-call-to-action').click(function() {
    $('.call-to-action-buttons').toggle('fast');
});

$('form').delegate('input.textsection-twocolumn', 'click', function() {
    $(this).parents('fieldset').find('.pen-container-1').removeClass('large-3').addClass('large-6');
    $(this).parents('fieldset').find('.pen-container-2').removeClass('large-9').addClass('large-6');
});
$('form').delegate('input.textsection-sidebar', 'click', function() {
    $(this).parents('fieldset').find('.pen-container-1').removeClass('large-6').addClass('large-3');
    $(this).parents('fieldset').find('.pen-container-2').removeClass('large-6').addClass('large-9');
});

$('#limited-text-1').keyup(function() {
    var len = $('#limited-text-1').val().length;
    $('#limited-text-1-counter').text( 99 - len );
});

$('form').delegate('.add-image-section', 'click', function(event) {
    event.preventDefault();

    var thetime = $.now(),
        section = $('.image-section .project-section').clone();
    $('ul', section).attr( 'id', 'section-type-selector-' + thetime );
    $('.section-insert .button', section).attr( 'data-dropdown', 'section-type-selector-' + thetime );
    section.insertAfter( $(this).parents('.project-section') );

    $('body').trigger('click');
});

$('form').delegate('.add-text-section', 'click', function(event) {
    event.preventDefault();

    var thetime = $.now(),
        section = $('.text-section .project-section').clone();
    $('.text-section-layouts input', section).attr( 'name', 'textsection-sidebar-' + thetime );
    $('input.textsection-sidebar', section).attr( 'id', 'textsection-sidebar-' + thetime );
    $('input.textsection-sidebar + label', section).attr( 'for', 'textsection-sidebar-' + thetime );
    $('input.textsection-twocolumn', section).attr( 'id', 'textsection-twocolumn-' + thetime );
    $('input.textsection-twocolumn + label', section).attr( 'for', 'textsection-twocolumn-' + thetime );
    section.insertAfter( $(this).parents('.project-section') );

    $('body').trigger('click');
});
