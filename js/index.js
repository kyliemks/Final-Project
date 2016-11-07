   
$("nav a").on("click", function(){
  var navId = $(this).attr("href");
   $("html,body").animate({
     scrollTop: $("#"+navId).offset().top
   });
});

// hover button

$(document).ready(function () {
    $(document).on('mouseenter', '.divbutton', function () {
        $(this).find(":button").show();
    }).on('mouseleave', '.divbutton', function () {
        $(this).find(":button").hide();
    });
});

// youtube videos

// $('#btn').click(function() {
//   $('#video, #overlay').fadeIn('slow');
//   $('#video-container').html('<iframe width=560 height=315 src=https://www.youtube.com/watch?v=VzpP0KbjHU8 frameborder=0 allowfullscreen></iframe>');
// });

// $(document).on('touchend, mouseup', function(e) {
//   if (!$('#video').is(e.target)) {
//     $('#video, #overlay').fadeOut('slow');
//     $('#video-container').html('');
//   }
// });

// $('#btn2').click(function() {
//   alert('video is not visible');
// });




