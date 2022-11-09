// init. video variable 
var video;

// page load - 
// initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.querySelector("#player1"); 
	video.autoplay = false; 
	video.loop = false; 
});

// play button - 
// play the video and update the volume information.  

document.querySelector("#play").addEventListener("click", function() {
	console.log("play");
	video.play(); 
	var volume = document.querySelector("#slider").value; 
	document.querySelector("#volume").innerHTML =  volume + "%";
});

// pause button - 
// pause the video.
document.querySelector("#pause").addEventListener("click", function() {
	console.log("pause");
	video.pause(); 
});

// slow down -
// slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
document.querySelector("#slower").addEventListener("click", function() {
	console.log("slow down");
	video.playbackRate *= .9;
	console.log("New speed is " + video.playbackRate);
});

// speed up 
// increase the current video speed each time the button is clicked and log the new speed to the console. 
// change it by an amount proportional to the slow down. CHECK THIS!!  
// if you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function(){
	console.log("speed up");
	video.playbackRate *= 1.1;
	console.log("Speed is " + video.playbackRate);
});

// skip ahead 
// advance the current video by 10 seconds.  
// if the video length has been exceeded go back to the start of the video - no farther. 
// log the current location of the video.
document.querySelector("#skip").addEventListener("click", function(){
	console.log("skip ahead");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} 
	else {
		video.currentTime += 10;
	}
	console.log("Current video time is " + video.currentTime);
});

// mute 
// mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function(){
	console.log("mute selected");
	if (!video.muted) {
		console.log("mute"); 
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";

	} 
	if (video.muted) {
		console.log("unmute"); 
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

// volume slider 
// change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("click", function(){
	console.log("volume slider")
	video = document.querySelector("#player1"); 
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML =  video.volume * 100 + "%";
});

// styled
// utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
	console.log("oldSchool class")
});

// original 
// remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("oldSchool class")
});
