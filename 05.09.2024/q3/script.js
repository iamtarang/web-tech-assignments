$(document).ready(function () {
	$("#submit-btn").click(function (e) {
		e.preventDefault()
		$('#output').append($('form').serialize());
	});
});