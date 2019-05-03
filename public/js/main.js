$(window).on("load", function() {
	$('.meta-imgs').css('display', 'none');
});
$(document).ready(function() {
	var fullscreen = false;
	$(".btn-fullscreen").click(
	function(event) {
		$(".content").toggleClass('fullscreen');
		$(".cover").toggleClass('col-lg-12');
		$(".cover .caption").toggleClass('col-lg-6').toggleClass('col-lg-4');
		$("html, body").toggleClass("has-scroll");
	});

	// modal hide scroll
	// $("[data-toggle='modal']").click(function(event) {
	// 	$("html, body").css('overflow-y', 'hidden');
	// });
	// $("[data-dismiss='modal']").click(function(event) {
	// 	$("html, body").css('overflow-y', 'scroll');
	// });

	// scroll
	$p = $('.cover');
	setCover($p);
	$(window).scroll(function(event) {
		fab();
		cover();
	});

	// plugins
	$('.rating').rating();

});

function fab () {
	$context_height = $(".context").height();
	$context_footer_height = $(".context-footer").height();
	$window_height = $(window).height();
	if($(window).scrollTop() > $context_height + $context_footer_height + 145 - $window_height) {
		$("#fab").removeClass("fab");
		$("#offset").removeClass("offset");
	} else {
		$("#fab").addClass("fab");
		$("#offset").addClass("offset");
	}
}

function cover() {
	$ps = $("p[data-img]");
	$cover = $('.cover');
	$caption_header = $('.caption .header');
	$caption_text = $('.caption p');
	$caption_footer = $('.caption i');

	// if($(window).scrollTop() > $($ps[0]).offset().top) {
	// 	console.log(0);
	// } else {
	// 	console.log(-1);
	// }
	if($ps.length == 1) {
		if($(window).scrollTop() + $(window).height() > $($ps[0]).offset().top)
			$p = $($ps[0]);
		else if($(window).scrollTop() + $(window).height() < $($ps[0]).offset().top){
			$p = $('.cover');
		}
	} else
		for($j = 0; $j < $ps.length - 1; $j++) {
			if($(window).scrollTop() + $(window).height() > $($ps[$j]).offset().top && $(window).scrollTop() + $(window).height() < $($ps[$j + 1]).offset().top) {
				$p = $($ps[$j]);
			} else if($(window).scrollTop() + $(window).height() > $($ps[$ps.length - 1]).offset().top) {
				$p = $($ps[$ps.length - 1]);

			} else if($(window).scrollTop() + $(window).height() < $($ps[0]).offset().top){
				$p = $('.cover');
			}
		}
	setCover($p);
}

function setCover($data) {
	$caption = $('.caption');
	$cover = $('.cover');
	$header = $('.caption .header');
	$text = $('.caption p');
	$footer = $('.caption i');

	$cover.css('background', 'url("' + $data.attr('data-img') + '") left center no-repeat');
	$header.text($data.attr('data-header'));
	$text.text($data.attr('data-text'));
	$footer.text($data.attr('data-footer'));
}