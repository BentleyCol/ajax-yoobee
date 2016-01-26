$(document).ready(function(){

	//Listen to the form
	$('#note-form').submit(function(e){

		//Prevent form from submitting
		e.preventDefault();

		//Grab the note
		if ($.trim( $('#note').val() ) == '') {
			return;
		}

		//Prepare AJAX
		$.ajax({
			url: 'http://bentley.cole.yoobee.net.nz/ajax-yoobee/ajax-yoobee.php',
			data: {note: $('#note').val()},
			success: function(dataFromServer) {
				console.log( dataFromServer );
			},
			error: function() {
				alert('Cannot Connect');
			}
		});
	});
});