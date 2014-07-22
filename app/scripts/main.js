'use strict';

$(document).foundation();

$('.new-project-button').click(function(event) {
    event.preventDefault();
    $('.new-project').removeClass('hide');
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
    $('.project-setting').toggleClass('hide');
});

$('#shareabouts-switch').click(function() {
    $('.shareabouts-switch-target').toggle('fast');
});

$('.section-settings-toggle').click(function(event) {
    event.preventDefault();
    $(this).parents('fieldset').find('.section-settings').toggleClass('hide');
});

$('.cover-image-switch').click(function() {
    $('.cover-image-container').toggle('fast');
});

$('#add-call-to-action').click(function() {
    $('.call-to-action-buttons').toggle('fast');
});

$('input.textsection-twocolumn').click(function() {
    $(this).parents('fieldset').find('.pen-container-1').removeClass('large-3').addClass('large-6');
    $(this).parents('fieldset').find('.pen-container-2').removeClass('large-9').addClass('large-6');
});
$('input.textsection-sidebar').click(function() {
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
        section = $('.image-section .project-section').clone().attr( 'id', thetime );
    $('ul', section).attr( 'id', 'section-type-selector-' + thetime );
    $('.section-insert .button', section).attr( 'data-dropdown', 'section-type-selector-' + thetime );
    section.insertAfter( $(this).parents('.project-section') );

    $('body').trigger('click');
});

$('form').delegate('.add-text-section', 'click', function(event) {
    event.preventDefault();

    var thetime = $.now(),
        section = $('.text-section .project-section').clone().attr( 'id', thetime );
    $('ul', section).attr( 'id', 'section-type-selector-' + thetime );
    $('.section-insert .button', section).attr( 'data-dropdown', 'section-type-selector-' + thetime );
    section.insertAfter( $(this).parents('.project-section') );

    $('body').trigger('click');
});
