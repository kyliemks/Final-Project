
// navigation scrolling to various sections

$("nav a").on("click", function(){
	var navId = $(this).attr("href");
	$("html,body").animate({
		scrollTop: $("#"+navId).offset().top
	});
});

// switch the hero image to another ***not working

$('#grayButton').on('click', function(){
	$('.hero-image').css('background-image','../images/hitsville museum.jpg');
	$('li').removeClass('active');
	$('#grayButton').addClass('active');
});

$('#whiteButton').on('click', function(){
	$('.hero-image').css('background-image','../images/faces.jpg');
	$('li').removeClass('active');
	$('#whiteButton').addClass('active');
});

// timeline interactivity ****not working

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// add class when in view
 
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

// alert window for contact submit form

$(".send").on("click" , function() {
  alert('Currently the form is inactive');
});

// hero image switches to a different image ***not working

// var btn =   $('#btn');
// var idd = $('#idd');

// btn.click(function() {  
//    idd.toggle(800, function() {
//       // change the button text according to the state of the "#idd" 
//       if (idd.hasClass('display-none')) {
//         btn.attr('src', '../images/faces.jpg'); 
//           idd.removeClass('hero-image');
//               } else {
//         btn.attr('src', '../images/hitsville museum.jpg');
//           idd.addClass('hero-image');
//        }
//     });
//   });

// youtube videos

$('.button_1').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/QoRBFNOgeHw" frameborder="0" allowfullscreen></iframe>');
});

$('.button_2').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/pvEoR4QywgE" frameborder="0" allowfullscreen></iframe>');
});

$('.button_3').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/pKQtWMETbfo" frameborder="0" allowfullscreen></iframe>');
});

$('.button_4').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/6kduvcqx-BU" frameborder="0" allowfullscreen></iframe>');
});

$('.button_5').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/XYPE7rZkYRg" frameborder="0" allowfullscreen></iframe>');
});

$('.button_6').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/sCXEtvbJkkY" frameborder="0" allowfullscreen></iframe>');
});

$('.button_7').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/vZjcM4yEgXg" frameborder="0" allowfullscreen></iframe>');
});

$('.button_8').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/nqAvFx3NxUM" frameborder="0" allowfullscreen></iframe>');
});

$('.button_9').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/zc7rxcjwwYs" frameborder="0" allowfullscreen></iframe>');
});

$('.button_10').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/8iwBM_YB1sE" frameborder="0" allowfullscreen></iframe>');
});

$('.button_11').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/RS2nfeN4DEw" frameborder="0" allowfullscreen></iframe>');
});

$('.button_12').on('click', function() {
 $('#video, #overlay').fadeIn('slow');
 $('#video-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/a0l112Qy4yA" frameborder="0" allowfullscreen></iframe>');
});

// rotating circle around each artist profile

// var element 		= document.getElementsByClassName('image');
// var ctx				= element.getContext("2d");
// var camera 			= {};
// 	camera.x 		= 0;
// 	camera.y 		= 0;
// var scale			= 1.0;
// var obj 			= [];

// 	var t			= {};
// 		t.angle	    = Math.random()*Math.PI*2; //start angle
// 		t.radius    = 200;
// 		t.x 		= Math.cos(t.angle)*t.radius; // start position x
// 		t.y 		= Math.sin(t.angle)*t.radius; //start position y
// 		t.circumference	= t.radius * 2 * Math.PI; //curcumfrence
// 		t.duration	= 10000; //10 seconds per rotation
// 		t.start		= Date.now();
    	
// obj.push(t);


// function update(){
    
// 				for(var i = 0; i < obj.length; i++){
// 					var delta				= Date.now() - obj[i].start;
// 					obj.start 				= Date.now();
//                     // vector is a portion of circumference per ms.
// 					var vector				= obj[i].circumference / obj[i].duration;
//                     // vector * data is a portion of circumference that the dot should have walked through by the duration delta.
//                     // You have to normalize by your radius to get an angel (in radian).
// 					var angle				= vector * delta / obj[i].radius;
//                     // The angle is now already in radian, no longer need to convert from degree to radian.
// 					obj[i].x				= obj[i].radius * Math.cos(angle);
// 					obj[i].y				= obj[i].radius * Math.sin(angle);								
// 				}
// }

// function draw(){
//     update();
//     ctx.clearRect(0,0,element.width,element.height);
    
//     ctx.save();
    
//     ctx.translate(0-(camera.x - element.width/2),0-(camera.y-element.height/2));  	    
//     ctx.scale(scale,scale);
//     ctx.fillStyle = 'blue';
//     for(var i = 0; i < obj.length; i++){
//         ctx.beginPath();
// 		ctx.arc(0,0,obj[i].radius,0,Math.PI*2);  
// 		ctx.lineWidth = 1.5;
// 		ctx.strokeStyle = "white";
// 		ctx.stroke();
        
//         ctx.beginPath();
// 		ctx.arc(obj[i].x,obj[i].y,10,0,Math.PI*2);  
// 		ctx.lineWidth = 1.5;
// 		ctx.strokeStyle = "white";
// 		ctx.stroke();    
//         ctx.fillStyle = "white";
// 		ctx.fill();    
//     }
    
//     ctx.restore();
//     requestAnimationFrame(draw);
// }

// draw();



// $(background).on('touchend, mouseup', function(e) {
// 	if (!$('#video').is(e.target);
// 		$('#video, #overlay').fadeOut('slow');
// 		$('#video-container').html(''); 
// 	}
// });



// animate the width in javascript to cause css transition




