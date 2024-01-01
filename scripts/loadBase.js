document.onload = addBase();

function addBase(){
	fetch('/content/html/nav-bar.html')
		.then(Response => Response.text())
		.then(data => {
			document.body.insertAdjacentHTML('afterbegin', data);
		});

	fetch('/content/html/content-area.html')
	.then(Response => Response.text())
	.then(data => {
		document.body.insertAdjacentHTML('beforeend', data);
	});
}