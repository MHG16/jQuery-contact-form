// Create a contact form with the following fields: name, email, website and message. 
// The form should also have a submit button. When the submit button is clicked 
// (or the enter key is presses) it should validate all of the form fields and show all errors 
// in the form data. Use CSS to style the form to be responsive. When you mouse over the submit 
// button the background color should fade to a green color (#88C470) over the course of 0.5 seconds. 
// If a user tries to submit the form and two or more fields are invalid, and then proceeds to fix
//  one of the errors but not both, the error message should disappear for the field that was fixed.

// Use the following error messages:

// Name cannot be left empty
// Email cannot be left empty
// Email must contain an '@'
// Website cannot be left empty
// Website must start with http://
// Message cannot be left empty


var form = $('form');


form.on('submit', function(e) {

	e.preventDefault();

	var userName = $('.name').val();
	var userEmail = $('.email').val();
	var userWebsite = $('.website').val();
	var userMessage = $('.message').val();


$( ".target" ).hide();


	if (userName === '') {
		$('.nameError').html('<p>Name cannot be left empty</p>');
		return;
	}


	else if (userEmail === '') {
		$('.nameError').html('<p>Email cannot be left empty</p>');
		return;
	}

	else if (userEmail.indexOf('@') === -1) {
		$('.emailError').html('<p>Email must contain an @</p>');
		return;
	}

	else if (userWebsite === '') {
		$('.websiteError'.html('<p>Website cannot be left empty</p>');
		return;
	}

	else if (userWebsite.substring(0, 7) !== 'http://') {
		$('.websiteError').html('<p>Website must start with http://</p>');
		return;
	}

	else if (userMessage === '') {
		$('.messageError').html('<p>Message cannot be left empty</p>');
		return;
	}

});



