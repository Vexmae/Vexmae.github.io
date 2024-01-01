document.onload = addContent();

function addContent(){
	var params = new URLSearchParams(window.location.search);
	var path = params.get('page');

	if(path){
		path = '/content/' + path + '.html';

		fetch(path)
			.then(Response => Response.text())
			.then(data => {
				document.getElementById('content-space').insertAdjacentHTML('afterbegin', data);
				document.getElementById('tab-title').innerText = document.getElementById('loaded').getAttribute('page-title');
				document.getElementById('page-title').innerText = document.getElementById('loaded').getAttribute('page-title');
			});
			
	} else {
		window.location.href = window.location + '?page=html/home-content'
	}

	
}