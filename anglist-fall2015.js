var app = angular.module('finalscountdown', ['timer']);

app.controller('listingCtrl', function ($scope, $interval) {

	$scope.mydata = [
//{"courseName": "CS", "courseNum": 107, "CRN": "10634", "classTime": "4:00PM MWF", "finalStart": new Date(2015,11,7,3,30,0,0), "finalEnd": new Date(2015,11,7,5,30,0,0), "finalLocation": "2LCC", "finalRoom": "C3"},
	{"courseName": "CS", "courseNum": 100, "CRN": 10615, "classTime": "01:00 PM MWF", "finalStart": new Date(2015,11,7,0,0,0,0), "finalEnd": new Date(2015,11,7,0,0,0,0), "finalLocation": "", "finalRoom": ""},
	{"courseName": "CS", "courseNum": 107, "CRN": 10634, "classTime": "04:00 PM MWF", "finalStart": new Date(2015,11, 8,15,30,0,0), "finalEnd": new Date(2015,11,8,17,30,0,0), "finalLocation": "2LCC", "finalRoom": "C003"},
	{"courseName": "CS", "courseNum": 109, "CRN": 36425, "classTime": "02:00 PM MW", "finalStart": new Date(2015,11, 9,13,0,0,0), "finalEnd": new Date(2015,11, 9,15,0,0), "finalLocation": "LC", "finalRoom": "A1 & F4"},
	{"courseName": "CS", "courseNum": 111, "CRN": 34656, "classTime": "11:00 AM TR", "finalStart": new Date(2015,11, 7,10,30,0,0), "finalEnd": new Date(2015,11, 7,12,30,0,0), "finalLocation": "LC", "finalRoom": "A1"},
	{"courseName": "CS", "courseNum": 141, "CRN": 34657, "classTime": "03:00 PM MWF", "finalStart": new Date(2015,11, 7,8,0,0,0), "finalEnd": new Date(2015,11, 7,10,0,0,0), "finalLocation": "2LCD", "finalRoom": "D005"},
	{"courseName": "CS", "courseNum": 151, "CRN": 30001, "classTime": "NA", "finalStart": new Date(2015,11,8,18,0,0), "finalEnd": new Date(2015,11, 8,20,0,0,0), "finalLocation": "SES ", "finalRoom": "250"},
	{"courseName": "CS", "courseNum": 201, "CRN": 10641, "classTime": "11:00 AM TR, 11:00 P", "finalStart": new Date(2015,11, 7,10,30,0,0), "finalEnd": new Date(2015,11, 7,12,30,0,0), "finalLocation": "2SH", "finalRoom": "304"},
	{"courseName": "CS", "courseNum": 211, "CRN": 34861, "classTime": "11:00 AM M", "finalStart": new Date(2015,11,7,0,0,0), "finalEnd": new Date(2015,11,7,0,0,0,0), "finalLocation": "", "finalRoom": ""},
	{"courseName": "CS", "courseNum": 251, "CRN": 36203, "classTime": "02:00 PM MWF", "finalStart": new Date(2015,11,9,13,0,0), "finalEnd": new Date(2015,11, 9,15,0,0,0), "finalLocation": "2LCD", "finalRoom": "D002"},
	{"courseName": "CS", "courseNum": 261, "CRN": 36391, "classTime": "11:30 PM TR", "finalStart": new Date(2015,11,11,8,0,0), "finalEnd": new Date(2015,11,11,10,0,0,0), "finalLocation": "2LCC", "finalRoom": "C004"},
	{"courseName": "CS", "courseNum": 301, "CRN": 10647, "classTime": "09:30 AM TR", "finalStart": new Date(2015,11, 9,10,30,0), "finalEnd": new Date(2015,11, 9,12,30,0,0), "finalLocation": "2LCF", "finalRoom": "F004"},
	{"courseName": "CS", "courseNum": 341, "CRN": 36202, "classTime": "01:00 PM MWF", "finalStart": new Date(2015,11, 7,13,0,0), "finalEnd": new Date(2015,11, 7,15,0,0,0), "finalLocation": "LC", "finalRoom": "D4 & D2"},
	{"courseName": "CS", "courseNum": 342, "CRN": 37162, "classTime": "11:30 PM TR", "finalStart": new Date(2015,11,11,8,0,0), "finalEnd": new Date(2015,11,11,10,0,0,0), "finalLocation": "2LCF", "finalRoom": "F004"},
	{"courseName": "CS", "courseNum": 361, "CRN": 36535, "classTime": "11:00 AM MWF", "finalStart": new Date(2015,11,7,0,0,0), "finalEnd": new Date(2015,11,7,0,0,0,0), "finalLocation": "", "finalRoom": ""},
	{"courseName": "CS", "courseNum": 362, "CRN": 36196, "classTime": "02:00 PM TR", "finalStart": new Date(2015,11, 9,15,30,0), "finalEnd": new Date(2015,11, 9,17,30,0,0), "finalLocation": "2LCC", "finalRoom": "C001"},
	{"courseName": "CS", "courseNum": 377, "CRN": 36199, "classTime": "02:00 PM MW", "finalStart": new Date(2015,11, 9,13,0,0), "finalEnd": new Date(2015,11, 9,15,0,0,0), "finalLocation": "2LH", "finalRoom": "311"},
	{"courseName": "CS", "courseNum": 377, "CRN": 38340, "classTime": "11:00 PM MW", "finalStart": new Date(2015,11, 8,8,0,0), "finalEnd": new Date(2015,11, 8,10,0,0,0), "finalLocation": "2SH", "finalRoom": "303"},
	{"courseName": "CS", "courseNum": 385, "CRN": 10654, "classTime": "03:30 PM TR", "finalStart": new Date(2015,11,7,0,0,0), "finalEnd": new Date(2015,11,7,0,0,0,0), "finalLocation": "", "finalRoom": ""},
	{"courseName": "CS", "courseNum": 401, "CRN": 10669, "classTime": "11:00 AM MWF", "finalStart": new Date(2015,11,10,10,30,0), "finalEnd": new Date(2015,11,10,12,30,0,0), "finalLocation": "2BH", "finalRoom": "209"},
	{"courseName": "CS", "courseNum": 401, "CRN": 10671, "classTime": "11:30 PM TR", "finalStart": new Date(2015,11,11,8,0,0), "finalEnd": new Date(2015,11,11,10,0,0,0), "finalLocation": "LCC", "finalRoom": "C6"},
	{"courseName": "CS", "courseNum": 401, "CRN": 35218, "classTime": "02:00 PM MWF", "finalStart": new Date(2015,11, 9,13,0,0), "finalEnd": new Date(2015,11, 9,15,0,0,0), "finalLocation": "LC", "finalRoom": "E1"},
	{"courseName": "CS", "courseNum": 401, "CRN": 39067, "classTime": "03:30 PM TR", "finalStart": new Date(2015,11,11,13,0,0), "finalEnd": new Date(2015,11,11,15,0,0,0), "finalLocation": "2BSB", "finalRoom": "367"},
	{"courseName": "CS", "courseNum": 411, "CRN": 10672, "classTime": "11:00 PM MWF", "finalStart": new Date(2015,11, 8,8,0,0), "finalEnd": new Date(2015,11, 8,10,0,0,0), "finalLocation": "2BH", "finalRoom": "304"},
	{"courseName": "CS", "courseNum": 412, "CRN": 38992, "classTime": "09:30 AM TR", "finalStart": new Date(2015,11, 9,10,30,0), "finalEnd": new Date(2015,11, 9,12,30,0,0), "finalLocation": "2BH", "finalRoom": "309"},
	{"courseName": "CS", "courseNum": 424, "CRN": 33484, "classTime": "02:00 PM TR", "finalStart": new Date(2015,11,7,0,0,0), "finalEnd": new Date(2015,11,7,0,0,0,0), "finalLocation": "", "finalRoom": ""},
	{"courseName": "CS", "courseNum": 425, "CRN": 38706, "classTime": "11:30 PM TR", "finalStart": new Date(2015,11,11,8,0,0), "finalEnd": new Date(2015,11,11,10,0,0,0), "finalLocation": "2TH", "finalRoom": "215"},
	{"courseName": "CS", "courseNum": 440, "CRN": 30002, "classTime": "NA", "finalStart": new Date(2015,11, 9,18,0,0), "finalEnd": new Date(2015,11, 9,20,0,0,0), "finalLocation": "LCA", "finalRoom": "A1"},
	{"courseName": "CS", "courseNum": 441, "CRN": 10676, "classTime": "11:30 PM TR", "finalStart": new Date(2015,11,11,8,0,0), "finalEnd": new Date(2015,11,11,10,0,0,0), "finalLocation": "2BH", "finalRoom": "304"},
	{"courseName": "CS", "courseNum": 442, "CRN": 38900, "classTime": "11:30 PM TR", "finalStart": new Date(2015,11,11,8,0,0), "finalEnd": new Date(2015,11,11,10,0,0,0), "finalLocation": "2LCF", "finalRoom": "F001"},
	{"courseName": "CS", "courseNum": 450, "CRN": 10677, "classTime": "03:00 PM MWF", "finalStart": new Date(2015,11, 7,8,0,0), "finalEnd": new Date(2015,11, 7,10,0,0,0), "finalLocation": "2BH", "finalRoom": "317"},
	{"courseName": "CS", "courseNum": 466, "CRN": 28472, "classTime": "11:00 AM TR", "finalStart": new Date(2015,11, 7,10,30,0), "finalEnd": new Date(2015,11, 7,12,30,0,0), "finalLocation": "2BH", "finalRoom": "304"},
	{"courseName": "CS", "courseNum": 474, "CRN": 10680, "classTime": "11:00 AM TR", "finalStart": new Date(2015,11, 7,10,30,0), "finalEnd": new Date(2015,11, 7,12,30,0,0), "finalLocation": "2LCE", "finalRoom": "E101"},
	{"courseName": "CS", "courseNum": 474, "CRN": 38902, "classTime": "02:00 PM TR", "finalStart": new Date(2015,11, 9,15,30,0), "finalEnd": new Date(2015,11, 9,17,30,0,0), "finalLocation": "2BSB", "finalRoom": "337"},
	{"courseName": "CS", "courseNum": 480, "CRN": 10682, "classTime": "03:30 PM TR", "finalStart": new Date(2015,11,11,13,0,0), "finalEnd": new Date(2015,11,11,15,0,0,0), "finalLocation": "SES ", "finalRoom": "130"},
	{"courseName": "CS", "courseNum": 487, "CRN": 28114, "classTime": "01:00 PM MWF", "finalStart": new Date(2015,11, 7,13,0,0), "finalEnd": new Date(2015,11, 7,15,0,0,0), "finalLocation": "2SES", "finalRoom": "138"},
	{"courseName": "CS", "courseNum": 491, "CRN": 38416, "classTime": "03:00 PM W", "finalStart": new Date(2015,11, 7,8,0,0), "finalEnd": new Date(2015,11, 7,10,0,0,0), "finalLocation": "2BSB", "finalRoom": "331"},
	{"courseName": "CS", "courseNum": 491, "CRN": 38956, "classTime": "02:30 PM R", "finalStart": new Date(2015,11,7,0,0,0), "finalEnd": new Date(2015,11,7,0,0,0,0), "finalLocation": "", "finalRoom": ""},
	{"courseName": "CS", "courseNum": 501, "CRN": 26929, "classTime": "02:00 PM TR", "finalStart": new Date(2015,11, 9,15,30,0), "finalEnd": new Date(2015,11, 9,17,30,0,0), "finalLocation": "2TH", "finalRoom": "215"},
	{"courseName": "CS", "courseNum": 501, "CRN": 34850, "classTime": "11:00 AM MWF", "finalStart": new Date(2015,11,10,10,30,0), "finalEnd": new Date(2015,11,10,12,30,0,0), "finalLocation": "2BSB", "finalRoom": "219"},
	{"courseName": "CS", "courseNum": 514, "CRN": 22882, "classTime": "10:00 AM MWF", "finalStart": new Date(2015,11,11,10,30,0), "finalEnd": new Date(2015,11,11,12,30,0,0), "finalLocation": "2LH", "finalRoom": "311"},
	{"courseName": "CS", "courseNum": 521, "CRN": 25674, "classTime": "11:00 PM MWF", "finalStart": new Date(2015,11, 8,8,0,0), "finalEnd": new Date(2015,11, 8,10,0,0,0), "finalLocation": "2BH", "finalRoom": "B10"},
	{"courseName": "CS", "courseNum": 522, "CRN": 37373, "classTime": "10:00 AM MWF", "finalStart": new Date(2015,11,11,10,30,0), "finalEnd": new Date(2015,11,11,12,30,0,0), "finalLocation": "2ERF", "finalRoom": "2068"},
	{"courseName": "CS", "courseNum": 526, "CRN": 38727, "classTime": "03:30 PM W", "finalStart": new Date(2015,11, 7,8,0,0), "finalEnd": new Date(2015,11, 7,10,0,0,0), "finalLocation": "2ERF", "finalRoom": "2068"},
	{"courseName": "CS", "courseNum": 545, "CRN": 34999, "classTime": "01:00 PM MW", "finalStart": new Date(2015,11, 7,13,0,0), "finalEnd": new Date(2015,11, 7,15,0,0,0), "finalLocation": "2SH", "finalRoom": "303"},
	{"courseName": "CS", "courseNum": 554, "CRN": 28116, "classTime": "05:00 PM TR", "finalStart": new Date(2015,11,7,0,0,0), "finalEnd": new Date(2015,11,7,0,0,0,0), "finalLocation": "", "finalRoom": ""},
	{"courseName": "CS", "courseNum": 559, "CRN": 25622, "classTime": "05:00 PM TR", "finalStart": new Date(2015,11,10,15,30,0), "finalEnd": new Date(2015,11,10,17,30,0,0), "finalLocation": "2TH", "finalRoom": "216"},
	{"courseName": "CS", "courseNum": 565, "CRN": 28478, "classTime": "06:00 PM TR", "finalStart": new Date(2015,11,7,0,0,0), "finalEnd": new Date(2015,11,7,0,0,0,0), "finalLocation": "", "finalRoom": ""},
	{"courseName": "CS", "courseNum": 566, "CRN": 33741, "classTime": "03:30 PM TR", "finalStart": new Date(2015,11,11,13,0,0), "finalEnd": new Date(2015,11,11,15,0,0,0), "finalLocation": "2TH", "finalRoom": "215"},
	{"courseName": "CS", "courseNum": 583, "CRN": 30286, "classTime": "03:30 PM TR", "finalStart": new Date(2015,11,11,13,0,0), "finalEnd": new Date(2015,11,11,15,0,0,0), "finalLocation": "2TH", "finalRoom": "216"},
	{"courseName": "CS", "courseNum": 584, "CRN": 33487, "classTime": "09:30 AM TR", "finalStart": new Date(2015,11, 9,10,30,0), "finalEnd": new Date(2015,11, 9,12,30,0,0), "finalLocation": "2SH", "finalRoom": "220"},
	{"courseName": "CS", "courseNum": 586, "CRN": 22888, "classTime": "11:30 PM TR", "finalStart": new Date(2015,11,11,8,0,0), "finalEnd": new Date(2015,11,11,10,0,0,0), "finalLocation": "2SH", "finalRoom": "220"},
	{"courseName": "CS", "courseNum": 587, "CRN": 38056, "classTime": "03:00 PM MW", "finalStart": new Date(2015,11, 7,8,0,0), "finalEnd": new Date(2015,11, 7,10,0,0,0), "finalLocation": "BH", "finalRoom": "308"}
];
	
	$interval(function(){ $scope.$broadcast('timer-start'); }, 1000); // This is a HACK! :-(
	$scope.model = [
	];
		$scope.stateText = function(input) {
		if (input.finalStart > new Date()) {
			return "Starts in: (" + moment(input.finalStart).format("h:mm A") + ")";
		}else if (input.finalEnd < new Date()) {
			return "Ended! (" + moment(input.finalStart).format("h:mm A") + " - " + moment(input.finalEnd).format("h:mm A") + ")";
		} else {
			return "Ends in: (" + moment(input.finalEnd).format("h:mm A") + ")";
		}
	}

	$scope.colorstatus = function (input) {
		if (input.finalStart > new Date()) {
			return "waiting";
		}else if (input.finalEnd < new Date()) {
			return "ended";
		} else {
			return "pending";
		}

	}
	$scope.startTimer = function (){
		$scope.$broadcast('timer-start');
	};
	// Determines to give end date or beginning date in milliseconds
	// Depends on if we are counting to the end of the final exam
	// or the beginning of the final examination.
	$scope.timedur = function (input) {
		if (input.finalStart > new Date()) {
			return input.finalStart.getTime();
		}else {
			return input.finalEnd.getTime();
		}
	}

	$scope.timerfinished = function (id) {
		if (!$scope.$$phase) {
		var curData;
		for (i = 0; i < $scope.mydata.length; i++) {
			if ($scope.mydata[i].CRN == id) {
				curData = $scope.mydata[i];
			}
		}
		// 3 cases
		for (i = 0; i < $scope.model.length; i++) {
			console.log("model id: " + $scope.model[i].id + ", ID just callbacked: " + id);
			if ($scope.model[i].id == id) {
				if (curData.finalEnd > new Date()) { // We are taking the exam.
					console.log("Entering exam!: " + id);
					$scope.model[i].timedur = $scope.timedur(curData);
					$scope.model[i].stateText = $scope.stateText(curData);
					$scope.model[i].color = $scope.colorstatus(curData);
					//$scope.$broadcast('timer-start');
					$scope.$apply();
				}else if (curData.finalEnd < new Date()) { // We have ended the exam.
					$scope.model[i].stateText = $scope.stateText(curData);
					$scope.model[i].color = $scope.colorstatus(curData);
					//$scope.$broadcast('timer-start');
					$scope.$apply();
				}
			}
		}
		console.log($scope.model);
		console.log('Exam finished!: ' + id);
		}
	}
//	$scope.$broadcast('timer-start');
for(i = 0; i < $scope.mydata.length; i++) {
//	if ($scope.mydata[i].finalEnd > new Date()) {
	if (true) {
		$scope.model.push({"courseName": $scope.mydata[i].courseName, "courseNum": $scope.mydata[i].courseNum, "finalLocation": $scope.mydata[i].finalLocation, "finalRoom": $scope.mydata[i].finalRoom, "stateText": $scope.stateText($scope.mydata[i]), "timedur": $scope.timedur($scope.mydata[i]), "id": $scope.mydata[i].CRN, "color": $scope.colorstatus($scope.mydata[i]) });
	}
	}

});

app.filter('orderObjectBy', function(){
 return function(input, attribute) {
    if (!angular.isObject(input)) return input;

    var array = [];
    for(var objectKey in input) {
        array.push(input[objectKey]);
    }

    array.sort(function(a, b){
        a = parseInt(a[attribute]);
        b = parseInt(b[attribute]);
        return a - b;
    });
    return array;
 }
});
