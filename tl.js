function doFirst(){
	barSize = 1279;
	myMovie = document.getElementById('myMovie');
	bar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');
 
	myMovie.addEventListener('click', playOrPause, false);
	bar.addEventListener('click', clickedBar, false);
}

function playOrPause() {
	if (!myMovie.paused && !myMovie.ended) {
		myMovie.pause();
		window.clearInterval(updateBar);
	} else {
		myMovie.play();
		updateBar = setInterval(update, 500);
	}
}

function update() {
	if (!myMovie.ended) {
		var size = parseInt(myMovie.currentTime * barSize / myMovie.duration);
		progressBar.style.width = size + 'px';
	} else {
		progressBar.style.width = '0px';
		window.clearInterval(updateBar);
	}
}

function clickedBar(e){
	var mouseX = e.pageX - bar.offsetLeft;
	var newtime = mouseX * myMovie.duration / barSize;
	myMovie.currentTime = newtime;
	progressBar.style.width = mouseX + 'px';
}
window.addEventListener('load', doFirst, false);
