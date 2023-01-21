/*Designed and coded by Abhilash Narayan */
function AmazeTime(almbtnobj) {
	this.date,this.day,this.dt,this.month, this.year,this.hour,this.minute,this.second = null;
	this.almHour, this.almMinute, almMeridiem = null;
	this.meridiem = "AM";
	this.almBtn = almbtnobj;
	this.almBtn = this.setAlarm;
}

AmazeTime.prototype.initializeTime = function() {
	this.dt = new Date();
	this.day = this.getDayInWords(this.dt.getDay());
	this.date = this.dt.getDate();
	this.month = this.getMonthInShort(this.dt.getMonth());
	this.year = this.dt.getFullYear();
	this.hour = this.setHour(this.dt.getHours());
	this.minute = this.doubleDigit(this.dt.getMinutes());
	this.second = this.doubleDigit(this.dt.getSeconds());
	this.meridiem = this.setMeridiem(this.dt.getHours());
}

AmazeTime.prototype.setHour = function(hr) {	
	if(hr > 12) {
		hr = hr - 12;
	}
	if(hr === 0) {
		hr = 12;
	}
	return this.doubleDigit(hr);
}

AmazeTime.prototype.doubleDigit = function(val) {
	if(val < 10) {
		val = "0" + val;
	}
	return val;
}

AmazeTime.prototype.setMeridiem = function(hr) {
	if(hr > 12) {
		hr = hr - 12;
		return "PM";
	} else {
		return "AM";
	}
}

AmazeTime.prototype.getMonthInShort = function(value) {
	var Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	return Months[value];
}

AmazeTime.prototype.getDayInWords = function(value) {
	var Weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	return Weekdays[value];
}

AmazeTime.prototype.setClock = function() {
	var clockDiv = document.getElementById("clock");
	var dayDiv = document.getElementById("day");
	var dateDiv = document.getElementById("date");
	var self = this;
	dayDiv.innerText = this.day;
	dateDiv.innerText = this.date + " " + this.month + " " + this.year;
    clockDiv.innerHTML = "<span id='currentHr'> " + this.hour
                        + "</span>:<span id='currentMin'>" + this.minute
                        + "</span><span id='currentSec' class='sec'>" + this.second
                        + "</span><span id='meridiem'> " + this.meridiem 
                        + " </span>";
}



var mytime = null;
mytime = new AmazeTime(document.getElementById("savebtn"));
window.addEventListener('load', function() { 
	function runTime() {
	mytime.initializeTime();
	mytime.setClock();
	
	}
setInterval(runTime, 1000);	
}	, false);	

	