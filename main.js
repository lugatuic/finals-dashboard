var mydata = [
{"courseName": "CS", "courseNum": 107, "CRN": "10634", "classTime": "4:00PM MWF", "finalStart": new Date(2015,11,6,3,30,0,0), "finalEnd": new Date(2015,11,8,5,30,0,0), "finalLocation": "2LCC", "finalRoom": "C3"},
{"courseName": "CS", "courseNum": 109, "CRN": "10634", "classTime": "4:00PM MWF", "finalStart": new Date(2015,11,8,3,30,0,0), "finalEnd": new Date(2015,11,8,5,30,0,0), "finalLocation": "2LCC", "finalRoom": "C3"}
];


function addClassBlock(courseName, courseNum, finalStart, finalEnd, finalLocation, finalRoom ) {
	var obj = document.createElement("div");
	obj.className = "classenclosed";
	var obj2 = document.createElement("div");
	obj2.className = "classhighlight";
	var obj2h1 = document.createElement("h1");
	obj2h1.innerHTML = (courseName ? courseName : "XX");
	var obj2h3 = document.createElement("h3");
	obj2h3.innerHTML = (courseNum ? courseNum : "XXX");
	var obj2p = document.createElement("p");
	obj2p.innerHTML = (finalLocation ? finalLocation + " " + finalRoom : "XXX");
	obj2.appendChild(obj2h1);
	obj2.appendChild(obj2h3);
	obj2.appendChild(obj2p);
	var obj3 = document.createElement("div");
	var obj3p = document.createElement("p");
	obj3p.innerHTML = "Schedule Time:";
	var obj3h2 = document.createElement("h2");
	obj3h2.innerHTML = (finalStart ? moment(finalStart).preciseDiff(new Date(), finalStart) : "00:00:00");
	obj3.className = "classinfo";
	obj3.appendChild(obj3p);
	obj3.appendChild(obj3h2);
	obj.appendChild(obj2);
	obj.appendChild(obj3);
	return obj;
}

var welcome = SAGE2_App.extend({
	init: function(data) {
		// Create div into the DOM
		this.SAGE2Init("div", data);
		// Set the background to black
		this.element.style.backgroundColor = 'white';
		
		for (var i = 0; i < mydata.length; i++) {		
			this.appendChild(addClassBlock(mydata[i].courseName, mydata[i].courseNum, mydata[i].finalStart, mydata[i].finalEnd, mydata[i].finalLocation, mydata[i].finalRoom));
		}

		// request it fullscreen
		if (this.state.goFullscreen) {
			this.sendFullscreen();
			// only go fullscreen at creation time, not reload nor session
			this.state.goFullscreen = false;
			// Manual sync of the state since changed outside event handler
			this.SAGE2Sync();
		}
	},
	
	addClassBlock: function (courseName, courseNum, finalStart, finalEnd, finalLocation, finalRoom ) {
	var obj = document.createElement("div");
	obj.className = "classenclosed";
	var obj2 = document.createElement("div");
	obj2.className = "classhighlight";
	var obj2h1 = document.createElement("h1");
	obj2h1.innerHTML = (courseName ? courseName : "XX");
	var obj2h3 = document.createElement("h3");
	obj2h3.innerHTML = (courseNum ? courseNum : "XXX");
	var obj2p = document.createElement("p");
	obj2p.innerHTML = (finalLocation ? finalLocation + " " + finalRoom : "XXX");
	obj2.appendChild(obj2h1);
	obj2.appendChild(obj2h3);
	obj2.appendChild(obj2p);
	var obj3 = document.createElement("div");
	var obj3p = document.createElement("p");
	obj3p.innerHTML = "Schedule Time:";
	var obj3h2 = document.createElement("h2");
	obj3h2.innerHTML = (finalStart ? moment(finalStart).preciseDiff(new Date(), finalStart) : "00:00:00");
	obj3.className = "classinfo";
	obj3.appendChild(obj3p);
	obj3.appendChild(obj3h2);
	obj.appendChild(obj2);
	obj.appendChild(obj3);
	return obj;
	}

	
	requestPicture: function() {
		// Get a new image every 15min
		if (isMaster && ((this.t - this.lastRequest) > 900)) {
			// Generate a new random ID
			var aUrl = 'https://www.gstatic.com/prettyearth/assets/data/' + this.state.imageID + '.json';
			this.applicationRPC({image: true, url: aUrl}, "gotPicture", true);
			// update the time
			this.lastRequest = this.t;
			// setup for next image
			this.state.imageID = this.getNewImageID();
		}
	},

	makeText: function(x, y, fs, value, stroke, col) {
		var text = this.svg.text(x, y, value);
		text.attr({textAnchor: 'middle', "font-size": fs});
		if (col) {
			text.attr({fill: col});
		} else {
			text.attr({fill: "#FFFFFF"});
		}
		text.attr({fontFamily: 'Helvetica,Arial,sans-serif'});
		if (stroke === 1) {
			text.attr({paintOrder: 'stroke', stroke: '#000000'});
			text.attr({strokeWidth: '0.15px', strokeLinecap: 'butt', strokeLinejoin: 'miter'});
		} else if (stroke === 2) {
			text.attr({fontFamily: 'Helvetica,Arial,sans-serif'});
		}
		return text;
	},

	gotWeather: function(data) {
		var weather = data.weather;
		var text = Math.round(weather.main.temp) + 'F';
		this.textWeather.attr({text: text});
		this.iconWeather.attr("xlink:href", "http://openweathermap.org/img/w/"
			+ weather.weather[0].icon + ".png");
	},

	gotLocation: function(data) {
		// SAGE2 location
		// "ip": "131.193.78.133",
		// "hostname": "No Hostname",
		// "city": "Chicago",
		// "region": "Illinois",
		// "country": "US",
		// "loc": "41.8784,-87.6852",
		// "org": "AS6200 University of Illinois at Chicago",
		// "postal": "60612"
		var geojson = data.location;
		if (geojson && geojson.city) {
			this.textGeolocation.attr({text: geojson.city.toUpperCase()});
			if (isMaster) {
				// Now get the weather
				var loc = geojson.city;
				if (geojson.country) {
					loc += "," + geojson.country;
				}
				this.applicationRPC({weather: true, place: loc}, "gotWeather", true);
			}
		}
	},

	gotPicture: function(data) {
		if (data.err && data.err !== null) {
			console.log('Welcome> error');
			return;
		}
		// Set the picture URL
		this.image.attr("xlink:href", data.picture.dataUri);
		// Update the quote text
		this.textQuote.attr({text: "\"" + data.quote + "\""});

		// Location of picture
		var location = data.picture.geocode;
		var locationText;
		locationText = location.locality || "";
		if (location.administrative_area_level_1) {
			if (locationText.length > 0) {
				locationText += ", " + location.administrative_area_level_1;
			} else {
				locationText = location.administrative_area_level_1;
			}
		}
		if (location.country) {
			if (locationText.length > 0) {
				locationText += ", " + location.country;
			} else {
				locationText += location.country;
			}
		}
		this.textLocation.attr({text: locationText});
		this.textAttribution.attr({text: data.picture.attribution});

		if (isMaster) {
			// now get the location of the wall
			this.applicationRPC({location: true}, "gotLocation", true);
		}
	},

	load: function(date) {
		this.refresh(date);
	},

	updateTime: function(date) {
		var now = moment(date);
		this.textDate.attr({text: now.format('LL')});
		this.textTime.attr({text: now.format('h:mm')});
		var greetString;
		var h = now.hours();
		if (h >= 19) {
			greetString = "Good evening";
		} else if (h >= 12) {
			greetString = "Good afternoon";
		} else if (h >= 6) {
			greetString = "Good morning";
		} else {
			greetString = "Good night";
		}
		this.textGreet.attr({text: greetString});
	},

	draw: function(date) {
		this.requestPicture();
		this.updateTime(date);
	},

	resize: function(date) {
		this.svg.attr('width',  this.element.clientWidth  + "px");
		this.svg.attr('height', this.element.clientHeight + "px");
		this.refresh(date);
	},

	quit: function() {
		// Make sure to delete stuff (timers, ...)
	},

	event: function(eventType, position, user_id, data, date) {
		if (eventType === "pointerPress" && (data.button === "left")) {
		} else if (eventType === "pointerMove" && this.dragging) {
		} else if (eventType === "pointerRelease" && (data.button === "left")) {
		} else if (eventType === "pointerScroll") {
			// Scroll events for zoom
		} else if (eventType === "widgetEvent") {
		} else if (eventType === "keyboard") {
			if (data.character === "m") {
				this.refresh(date);
			}
		} else if (eventType === "specialKey") {
			if (data.code === 37 && data.state === "down") { // left
				this.refresh(date);
			} else if (data.code === 38 && data.state === "down") { // up
				this.refresh(date);
			} else if (data.code === 39 && data.state === "down") { // right
				this.refresh(date);
			} else if (data.code === 40 && data.state === "down") { // down
				this.refresh(date);
			}
		}
	},

	getNewImageID: function() {
		var imageIds = [ "1003", "1004", "1006", "1007", "1008", "1010", "1012", "1014", "1017",
		"7020", "7021",  "7023" ];
		return imageIds[Math.floor(Math.random() * imageIds.length)];
	}
});
