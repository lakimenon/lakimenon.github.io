'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
}

$(".project .img-thumbnail").click(projectClick);

function projectClick(e){
	e.preventDefault();
	$(this).css("background-color", "#7fffff");
	$(this).parent().next().toggle();
	return false;
	$(this).css("background-color", "#808080")
}

$(".nav-item").click(function(e) {
	$(this).toggleClass("active").siblings().removeClass("active");
})