document.onload = addContent();

function addContent(){
	fetch(document.currentScript.getAttribute('path'))
		.then(Response => Response.text())
		.then(data => {
			document.getElementById('content-space').insertAdjacentHTML('afterbegin', data);
		});
}