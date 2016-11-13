
$("nav a").on("click", function(){
	var navId = $(this).attr("href");
	$("html,body").animate({
		scrollTop: $("#"+navId).offset().top
	});
});

// youtube videos

$('.diana_ross_image').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/QoRBFNOgeHw" frameborder="0" allowfullscreen></iframe>');
});

$('.al_green_image').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/sCXEtvbJkkY" frameborder="0" allowfullscreen></iframe>');
});

$('.barbara_mcnair_image').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/vZjcM4yEgXg" frameborder="0" allowfullscreen></iframe>');
});

$('.lionel_richie_image').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/nqAvFx3NxUM" frameborder="0" allowfullscreen></iframe>');
});

$('.stevie_wonder_image').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/RS2nfeN4DEw" frameborder="0" allowfullscreen></iframe>');
});

$('.four_tops_image').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/pvEoR4QywgE" frameborder="0" allowfullscreen></iframe>');
});

$('.the_temptations_image').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/XYPE7rZkYRg" frameborder="0" allowfullscreen></iframe>');
});

$('.smokey_robinson_image').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/mEUOiiVxsGc" frameborder="0" allowfullscreen></iframe>');
});

$('.syreeta_wright_image').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/zc7rxcjwwYs" frameborder="0" allowfullscreen></iframe>');
});

$('.the_jackson_five_image').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/a0l112Qy4yA" frameborder="0" allowfullscreen></iframe>');
});

$('.marvin_gaye_image').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/COiIC3A0ROM" frameborder="0" allowfullscreen></iframe>');
});

$('.the_pointer_sisters_image').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/8iwBM_YB1sE" frameborder="0" allowfullscreen></iframe>');
});

$('.diana_ross_top').on('touchend, mouseup', function(e) {
	if (!$('#video').is(e.target);
		$('#video, #overlay').fadeOut('slow');
		$('#video-container').html(''); 
	}
});

// $("#artists").on("click" , function() {
//   alert('video is not visible');
// });

// animate the width in javascript to cause css transition




