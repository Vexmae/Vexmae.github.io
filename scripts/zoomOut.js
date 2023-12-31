document.onload = zoomOut();

function zoomOut(){
	document.firstElementChild.style.zoom = '100%';
	this.blur();
}