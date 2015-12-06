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

for (var i = 0; i < mydata.length; i++) {
//d3.select("body div").append("div").classed("classenclosed").append("div").classed("classhighlight").append("classinfo");
d3.select("body div")[0][0].appendChild(addClassBlock(mydata[i].courseName, mydata[i].courseNum, mydata[i].finalStart, mydata[i].finalEnd, mydata[i].finalLocation, mydata[i].finalRoom));
//d3.select("body div").append("div");
}
