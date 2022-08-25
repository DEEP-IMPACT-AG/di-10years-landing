$('#social-share').click((e) => {
	$('.modal').addClass('active');
});

$('#modal-close, #modal-close-inner').click((e) => {
	$('.modal').removeClass('active');
});

$('#social-twitter').click((e) => {
	e.preventDefault();
	var twitterWindow = window.open(
		'https://twitter.com/share?url=https://10.deep-impact.ch',
		'twitter-popup',
		'height=350,width=600'
	);
	if (twitterWindow.focus) {
		twitterWindow.focus();
	}
	return false;
});

$('#social-facebook').click((e) => {
	e.preventDefault();
	var facebookWindow = window.open(
		'https://www.facebook.com/sharer/sharer.php?u=https://10.deep-impact.ch',
		'facebook-popup',
		'height=350,width=600'
	);
	if (facebookWindow.focus) {
		facebookWindow.focus();
	}
	return false;
});
