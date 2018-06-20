$(document).ready(function(){
	$(".toggle_1").click(function(){
	$(this).toggleClass("active");
	});

	$(".slide_1-body").click(function(){
	$(".slide_1-body .slide_1").toggleClass("active");
	});

  $(".on").click(function(){
    $("#audio-player")[0].play();
  });

  $(".off").click(function(){
    $("#audio-player")[0].pause();
  });
});