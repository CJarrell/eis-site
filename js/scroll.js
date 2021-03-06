
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
$(document).ready(function(){
  $('#eis-hidden-nav > ul > li > a').on('click', function(){
    $('.navbar-toggle').click()
  });
});
$(document).ready(function(){
  $('#eis-nav > ul > li > a').on('click', function(){
    $('.navbar-toggle').click()
  });
});



// Modal dependency
$(document).ready(function(){

  var $before = $('img.before');
  var $after = $('img.after');
  $('#success-button').on('click', function(){
    $('#successStories').modal('show', function(){
      console.log("this happened");
    });
  })
  $('#successStories').on('shown.bs.modal', function () {
    $('.cocoen').cocoen(function(){
      $('#successModal').focus(function(){
        console.log("this happened");
      });
    });
    
    
    
  });
});
  
// function modal_density(){
//     $("#modal-content").load("pages/modals/density_control.php", function() {
//         $('#all_modal').modal('show').on('shown', function() {
//             $("#codebarre").focus(); 
//         });
//     });
// }




// Custom SVG
$(document).ready(function customSVG(){
    $('img.svg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data){
            var $svg = $(data).find('svg');
            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
        
    });
    customSVG;
});

// Disable Right Clicking
$(document).ready(function(){
  $('img').on("contextmenu", function(e){
    return false;
  });
});

