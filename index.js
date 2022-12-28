// This is the Java scrpit file conatins the stopwatch functionality

// declaring the variables 
// extarcting the values from the website using DOM

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

// declaring the variables 
let hour = 00;
let minute = 00;
let second = 00;

// Adding Event listners to the buttonns- start, stop and reset
// And calling the respective functions 
//time boolean variable used to find out if the stopwatch is active or not

start.addEventListener('click', function () {
	timer = true;
	stopWatch();
});

// stop sets the timer variable to false which makes the function to not call it self again 
// which stops the stop watch

stop.addEventListener('click', function () {
	timer = false;
});

//reset does the same as stop but also sets all the timer variables in the stopwatch to "0"

reset.addEventListener('click', function () {
	timer = false;

	hour = 0;
	minute = 0;
	second = 0;

	document.getElementById('h').innerHTML = "00";
	document.getElementById('m').innerHTML = "00";
	document.getElementById('s').innerHTML = "00";
});

// Function => Strting the time of the stopwatch 
//firstly the function checks if the stopwatch is active or not with the value of timer variable
//then for each and every call of the function second value is incremented by one
//for every 60 second valyes one minute value is incremented
//for every 60 minute values one hour value is incremented
//just like the time in the clock
//at the end setTimer method is used to call the function for every one second

function stopWatch() {

    // checking if the stopwatch is active or not
	if (timer) {

        second++;

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

        // here declaring the variables to send into the html file to display to the user

		let hr = hour;
		let min = minute;
		let sec= second;

        //taking care of one digit numbers on the timer

		if (hour < 10) {
			hr = "0" + hr;
		}

		if (minute < 10) {
			min = "0" + min;
		}

		if (second < 10) {
			sec = "0" + sec;
		}

        //seting the values h , m and s in the html file
	        
        document.getElementById('h').innerHTML = hr;
		document.getElementById('m').innerHTML = min;
		document.getElementById('s').innerHTML = sec;

        // calling the stopwatch function for every 1 sec which increases second value for every one sec

		setTimeout(stopWatch, 1000);
	}
    // functionality ends

}
