
// process the confirmation dialog result
function onConfirm(buttonIndex) {
	if(buttonIndex == 2) {
		navigator.app.exitApp();
	}
}

// Show a custom confirmation dialog
//
function showConfirm() {
    navigator.notification.confirm(
        'Confirm to exit', // message
         onConfirm,            // callback to invoke with index of button pressed
        'Exit',           // title
        'Cancel,Exit'         // buttonLabels
    );
}

// Send a mail
function sendMail() {
	//Open E-Mail draft
	window.plugin.email.open({
		to : ['smartdroidies@gmail.com'],
		cc : ['prem.pricy@gmail.com'],
		subject : 'Stay Healthy - Enquiry',
		body : 'Add in your content here',
		isHtml:  false
	});
}
