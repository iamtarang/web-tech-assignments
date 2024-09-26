$(document).ready(function(){
	$("#show-btn").hide()

	$("#hide-btn").click(function() {
		$("#para").hide()
		$("#hide-btn").hide()
		$("#show-btn").show()
	})
	$("#show-btn").click(function() {
		$("#para").show()
		$("#show-btn").hide()
		$("#hide-btn").show()
	})
})