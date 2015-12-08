 /* global $*/
'use strict';
$('.sf-menu > li').hover(function() {
  $(this).addClass('active');
  $(this).find('.submenu-container').stop(true, true).delay(200).fadeIn();
}, function() {
  $(this).find('.close-submenu').click(function(){
    $('.submenu-container').stop(true, true).delay(100).fadeOut();
  });
  $(this).find('.submenu-container').stop(true, true).delay(200).fadeOut();
  $(this).removeClass('active');
});













