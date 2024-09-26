$(document).ready(function () {
	// Initially disable the submit button
	$('#submit-btn').prop('disabled', true);
	$('#disable').toggle();

	// Event listener for checkbox change
	$('#submit1').change(function () {
		let isChecked = $(this).is(':checked');

		// Toggle the submit button state
		$('#submit-btn').prop('disabled', !isChecked);

		// Toggle visibility of the labels
		if (isChecked) {
			$('#enable').toggle();
			$('#disable').toggle();
		} else {
			$('#enable').toggle();
			$('#disable').toggle();
		}
	});
});

