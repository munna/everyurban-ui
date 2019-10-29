$(function () {
	// HOME PAGE CAROUSEL
	$("#banner").carousel({
		interval: false
	})

	// HAMBURGER
	$("#hamburger").click(function (e) {
		e.preventDefault();
		$("#menu").slideDown(400);
		$("#menu-bg").fadeIn(400);
	});
	$("#menu, #menu-bg").click(function () {
		$("#menu").slideUp(300);
		$("#menu-bg").fadeOut(400);
	});
});