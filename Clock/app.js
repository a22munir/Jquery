$(document).ready(function () {
	function displayTime() {
		let currentTime = new Date();
		let hours = currentTime.getHours();
		let seconds = currentTime.getSeconds();
		let minutes = currentTime.getMinutes();
		let meridian = " AM";
		seconds < 10 ? seconds = "0" + seconds : seconds;
		hours > 10 ? (hours = hours - 12, meridian = " PM") : (hours, meridian);
		let clockDiv = document.getElementById('clock')
		clockDiv.innerText = hours + ":" + minutes + ":" + seconds + meridian;

	}
	displayTime();
	setInterval(displayTime, 1000);
})
