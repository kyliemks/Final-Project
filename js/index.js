   
$("nav a").on("click", function(){
	var navId = $(this).attr("href");
	$("html,body").animate({
		scrollTop: $("#"+navId).offset().top
	});
});





// Toggle the quote

// $('.tagline-main').on('click', function(){
// 	$('#answer1').slideToggle(); 
// });

// youtube videos

// $('.diana_ross_image').on('click', function() {
//  $('#video, #overlay').fadeIn('slow');
//  $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/VzpP0KbjHU8" frameborder="0" allowfullscreen></iframe>');
// });

// $(document).on('touchend, mouseup', function(e) {
// 	if (!$('#video').is(e.target);
// 		$('#video, #overlay').fadeOut('slow');
// 		$('#video-container').html(''); 
// 	}
// });

// $("#artists").on("click" , function() {
//   alert('video is not visible');
// });

// animate the width in javascript to cause css transition




