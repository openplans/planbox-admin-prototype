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
