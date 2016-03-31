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



// when hovering over the submit button, the background color fades to green over the course of .5 seconds

$(document).ready(function(){

	$('button').hover(function () {
		 $('button').css('background-color', '#88C470');
	
	   },function(){
    $('button').css('background-color', '');
  });
});

var form = $('form');


form.on('submit', function(e) {

	e.preventDefault();

	var isErr = false;

	var userName = $('.name').val();
	var userEmail = $('.email').val();
	var userWebsite = $('.website').val();
	var userMessage = $('.message').val();

//function to check that Email field is not empty and it contains '@'
function validateEmail () {
	if (userEmail === '') {
		$('.emailError').html('<p class="error">Email cannot be left empty</p>');
		$('.email').css('border-left-color', 'red');
	}
	else if (userEmail.indexOf('@') === -1) {
		$('.emailError').html('<p class="error">Email must contain an \'@\'</p>');
		$('.email').css('border-left-color', 'red');
	}
	return;  
}

//function to check that website field is not empty and starts with 'http://'
function validateWebsite () {
	if (userWebsite === '') {
		$('.websiteError').html('<p class="error">Website cannot be left empty</p>');
		$('.website').css('border-left-color', 'red');
	}
	else if (userWebsite.substring(0, 7) !== 'http://') {
		$('.websiteError').html('<p class="error">Website must start with http://</p>');
		$('.website').css('border-left-color', 'red');
	}
	return;  
}

$( ".target" ).hide();


	if (userName === '') {
		$('.nameError').html('<p class="error">Name cannot be left empty</p>');
		$('.name').css('border-left-color', 'red');
		isErr = true;
	}

	validateEmail();
	validateWebsite();


	if (userMessage === '') {
		$('.messageError').html('<p class="error">Message cannot be left empty</p>');
		$('.message').css('border-left-color', 'red');
		isErr = true; 
	}

	if (isErr) {
		$('.successMessage').html('<p>Thanks for contacting us '+userName+ '.  We have recieved your message and will be in touch with you shortly.</p>');
	}
	$('.successMessage').html('<p>Thanks for contacting us '+userName+ '.  We have recieved your message and will be in touch with you shortly.</p>');

});



