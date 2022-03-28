var video;
video = document.getElementById('player1');



window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});
 

var mute = document.querySelector("#mute");

mute.addEventListener("click", function () {
	
	if (mute.innerHTML == "Mute") {
		mute.innerHTML = "Unmute";
		video.volume = 0;

	} else {
		mute.innerHTML = "Mute";
		video.volume = 1;
	}
});


var fastClicks = 0;
var slowClicks = 0;
var diff_click;
var newspeed;

function change_speed(diff_click) {
	if (diff_click >= 0) {
		newspeed = 1.05 ** diff_click;
	} else {
		newspeed = 0.95 ** (-diff_click);
	}
	return newspeed;
}

document.querySelector("#slower").addEventListener("click", function () {
	slowClicks += 1;
	diff_click = fastClicks - slowClicks;
	newspeed = change_speed(diff_click);
	console.log("New speed is " + newspeed);
	video.playbackRate = newspeed;
});


document.querySelector("#faster").addEventListener("click", function () {
	fastClicks += 1;
	diff_click = fastClicks - slowClicks;
	newspeed = change_speed(diff_click);
	console.log("New speed is " + newspeed);
	video.playbackRate = newspeed;
});


document.querySelector("#skip").addEventListener("click", function () {
	var oriloc = video.currentTime;
	var newloc = oriloc + 15;
	console.log("Original location " + oriloc);
	if (newloc > video.duration) {
		newloc = 0;
		video.currentTime = 0;
	} else {
		video.currentTime = newloc;
	}
	console.log("New location " + newloc);
});


var slider = document.querySelector("#slider");
slider.addEventListener("change", function (e) {
	video.volume = e.currentTarget.value / 100;
	console.log(video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
})

var body = document.body;
document.querySelector("#vintage").addEventListener("click", function () {
	body.classList.add('oldSchool');
})

document.querySelector("#orig").addEventListener("click", function () {
	body.classList.remove('oldSchool');
})