var vForm = document.getElementById('mgform');
var vInput = document.getElementById('mail');
var vBody = document.getElementById('mailBody');
var location;
vForm.onsubmit = function() {
	if (this.hid == "bulk") {
		location = "/submit/" + encodeURIComponent(vInput.value)+"/"+encodeURIComponent(vBody.value);
	}
	if (this.hid == "list") {
		location = "/validate/" + encodeURIComponent(vInput.value);
	}
	if (this.hid == "inv") {
		location = "/invoice/" + encodeURIComponent(vInput.value)+"/"+encodeURIComponent(vBody.value);
	}

	return false;
}