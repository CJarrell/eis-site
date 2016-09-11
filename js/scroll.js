// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// delay animations on brand type and nav bar
$(function() {
  setTimeout(function () {
    $(".eis-brand").addClass('slideDown');
  }, 700);
  setTimeout(function () {
    $(".eis-nav-container").addClass('slideUp');
  }, 1400);

});

// Show Hidden Nav after scrolling
$(document).ready(function(){
  var $header = $('#header');
  var $logo = $('.logo');
  var $hiddenNav = $('#hidden-nav');
  $logo.scrollspy({
    min: $header.offset().top,
    onEnter: function(element, position){
      window.console.log('scrollspy: Entering');
      $hiddenNav.fadeOut(2000);

    },
    onLeave: function(element, position){
      window.console.log('scrollspy: leaving');
      $hiddenNav.addClass("slideDown");
      $hiddenNav.slideDown();
    }
  });
});
