function sendSigninRequest()
{
	let email = $('#email').val();
	let password = $('#password').val();

	$.ajax(
	{
		url: '/login',
		type: 'POST',
		contentType: 'application/json',
		data: JSON.stringify({ email : email, password : password }), 
		dataType: 'json'
	})
	.done(signinSuccess)
	.fail(signinError);
}

function signinSuccess(data, textSatus, jqXHR)
{
	window.localStorage.setItem('authToken', data.authToken);
	window.location = "/account";
}

function signinError(jqXHR, textStatus, errorThrown)
{
	if (jqXHR.statusCode == 404)
	{
		$('#ServerResponse').html("<span class='red-text text-darken-2'>Server Unavailable</p>");
		$('#ServerResponse').show();
	}
	else
	{
		$('#ServerResponse').html("<span class='red-text text-darken-2'>Error: " + jqXHR.responseJSON.error + "</span>");
		$('#ServerResponse').show();
	}
}

$(function()
{  
	if( window.localStorage.getItem('authToken'))
		window.location.replace('/account');
	else
	{
		$('#signin').click(sendSigninRequest);
		$('#password').keypress(function(event)
		{
			if( event.which === 13 )
				sendSigninRequest();
		});
	}
});