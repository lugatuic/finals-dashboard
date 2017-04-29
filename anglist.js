var app = angular.module('finalscountdown', ['timer']);

app.controller('listingCtrl', function ($scope, $interval) {

	$scope.mydata = [
//{"courseName": "CS", "courseNum": 107, "CRN": "10634", "classTime": "4:00PM MWF", "finalStart": new Date(2015,11,7,3,30,0,0), "finalEnd": new Date(2015,11,7,5,30,0,0), "finalLocation": "2LCC", "finalRoom": "C3"},
{"courseName": "CS", "courseNum": 100, "CRN": 17397, "classTime": " 3:00 PM (MWF)", "finalStart": new Date(2017,4,1,8,00,0,0), "finalEnd": new Date(2017,4,1,10,00,0,0), "finalLocation": "2BH", "finalRoom": "305"},
{"courseName": "CS", "courseNum": 107, "CRN": 17412, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2017,4,5,13,00,0,0), "finalEnd": new Date(2017,4,5,15,00,0,0), "finalLocation": "2LCF", "finalRoom": "F001"},
{"courseName": "CS", "courseNum": 109, "CRN": 19466, "classTime": " 4:00 PM (MW)", "finalStart": new Date(2017,4,2,15,30,0,0), "finalEnd": new Date(2017,4,2,17,30,0,0), "finalLocation": "2LCA", "finalRoom": "A001, 2LCB B101, 2LCD D001"},
{"courseName": "CS", "courseNum": 110, "CRN": 40117, "classTime": " 4:00 PM (MW)", "finalStart": new Date(2017,4,2,15,30,0,0), "finalEnd": new Date(2017,4,2,17,30,0,0), "finalLocation": "2LCA", "finalRoom": "A001"},
{"courseName": "CS", "courseNum": 111, "CRN": 34013, "classTime": " 11:00 AM (TR)", "finalStart": new Date(2017,4,1,10,30,0,0), "finalEnd": new Date(2017,4,1,12,30,0,0), "finalLocation": "2LCF", "finalRoom": "F004"},
{"courseName": "CS", "courseNum": 141, "CRN": 34447, "classTime": " 4:00 PM (MW)", "finalStart": new Date(2017,4,2,15,30,0,0), "finalEnd": new Date(2017,4,2,17,30,0,0), "finalLocation": "2SES", "finalRoom": "250"},
{"courseName": "CS", "courseNum": 151, "CRN": 34014, "classTime": " 2:00 PM (MWF)", "finalStart": new Date(2017,4,3,13,00,0,0), "finalEnd": new Date(2017,4,3,15,00,0,0), "finalLocation": "2LCA", "finalRoom": "A001"},
{"courseName": "CS", "courseNum": 201, "CRN": 17418, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2017,4,5,8,00,0,0), "finalEnd": new Date(2017,4,5,10,00,0,0), "finalLocation": "2SH", "finalRoom": "303"},
{"courseName": "CS", "courseNum": 211, "CRN": 34456, "classTime": " 10:00 AM (F)", "finalStart": new Date(2017,4,5,10,30,0,0), "finalEnd": new Date(2017,4,5,12,30,0,0), "finalLocation": "2LCB", "finalRoom": "B101"},
{"courseName": "CS", "courseNum": 251, "CRN": 34460, "classTime": " 11:00 AM (MWF)", "finalStart": new Date(2017,4,4,10,30,0,0), "finalEnd": new Date(2017,4,4,12,30,0,0), "finalLocation": "2LCD", "finalRoom": "D004"},
{"courseName": "CS", "courseNum": 261, "CRN": 34463, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2017,4,5,13,00,0,0), "finalEnd": new Date(2017,4,5,15,00,0,0), "finalLocation": "2BSB", "finalRoom": "250"},
{"courseName": "CS", "courseNum": 301, "CRN": 17422, "classTime": " 4:00 PM (MW)", "finalStart": new Date(2017,4,2,15,30,0,0), "finalEnd": new Date(2017,4,2,17,30,0,0), "finalLocation": "2LCD", "finalRoom": "D002"},
{"courseName": "CS", "courseNum": 341, "CRN": 34723, "classTime": " 3:00 PM (MWF)", "finalStart": new Date(2017,4,1,8,00,0,0), "finalEnd": new Date(2017,4,1,10,00,0,0), "finalLocation": "2LCA", "finalRoom": "A001"},
{"courseName": "CS", "courseNum": 361, "CRN": 36306, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2017,4,3,15,30,0,0), "finalEnd": new Date(2017,4,3,17,30,0,0), "finalLocation": "2LCF", "finalRoom": "F001"},
{"courseName": "CS", "courseNum": 362, "CRN": 36309, "classTime": " 11:00 AM (TR)", "finalStart": new Date(2017,4,1,10,30,0,0), "finalEnd": new Date(2017,4,1,12,30,0,0), "finalLocation": "2LCC", "finalRoom": "C004"},
{"courseName": "CS", "courseNum": 385, "CRN": 17428, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2017,4,5,13,00,0,0), "finalEnd": new Date(2017,4,5,15,00,0,0), "finalLocation": "2LCF", "finalRoom": "F006"},
{"courseName": "CS", "courseNum": 401, "CRN": 17454, "classTime": " 11:00 AM (MWF)", "finalStart": new Date(2017,4,4,10,30,0,0), "finalEnd": new Date(2017,4,4,12,30,0,0), "finalLocation": "2BH", "finalRoom": "317"},
{"courseName": "CS", "courseNum": 401, "CRN": 20667, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2017,4,5,8,00,0,0), "finalEnd": new Date(2017,4,5,10,00,0,0), "finalLocation": "2SES", "finalRoom": "230"},
{"courseName": "CS", "courseNum": 401, "CRN": 20665, "classTime": " 11:00 AM (MWF)", "finalStart": new Date(2017,4,4,10,30,0,0), "finalEnd": new Date(2017,4,4,12,30,0,0), "finalLocation": "2BH", "finalRoom": "317"},
{"courseName": "CS", "courseNum": 401, "CRN": 17455, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2017,4,5,8,00,0,0), "finalEnd": new Date(2017,4,5,10,00,0,0), "finalLocation": "2SES", "finalRoom": "230"},
{"courseName": "CS", "courseNum": 411, "CRN": 38550, "classTime": " 9:00 AM (MWF)", "finalStart": new Date(2017,4,2,10,30,0,0), "finalEnd": new Date(2017,4,2,12,30,0,0), "finalLocation": "2BH", "finalRoom": "317"},
{"courseName": "CS", "courseNum": 411, "CRN": 38549, "classTime": " 9:00 AM (MWF)", "finalStart": new Date(2017,4,2,10,30,0,0), "finalEnd": new Date(2017,4,2,12,30,0,0), "finalLocation": "2BH", "finalRoom": "317"},
{"courseName": "CS", "courseNum": 412, "CRN": 38114, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2017,4,3,15,30,0,0), "finalEnd": new Date(2017,4,3,17,30,0,0), "finalLocation": "2BH", "finalRoom": "208"},
{"courseName": "CS", "courseNum": 412, "CRN": 38115, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2017,4,3,15,30,0,0), "finalEnd": new Date(2017,4,3,17,30,0,0), "finalLocation": "2BH", "finalRoom": "208"},
{"courseName": "CS", "courseNum": 421, "CRN": 28653, "classTime": " 6:00 PM (W)", "finalStart": new Date(2017,4,3,18,00,0,0), "finalEnd": new Date(2017,4,3,20,00,0,0), "finalLocation": "2BH", "finalRoom": "208"},
{"courseName": "CS", "courseNum": 421, "CRN": 28654, "classTime": " 6:00 PM (W)", "finalStart": new Date(2017,4,3,18,00,0,0), "finalEnd": new Date(2017,4,3,20,00,0,0), "finalLocation": "2BH", "finalRoom": "208"},
{"courseName": "CS", "courseNum": 422, "CRN": 19650, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2017,4,3,15,30,0,0), "finalEnd": new Date(2017,4,3,17,30,0,0), "finalLocation": "2ERF", "finalRoom": "2068 "},
{"courseName": "CS", "courseNum": 422, "CRN": 20669, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2017,4,3,15,30,0,0), "finalEnd": new Date(2017,4,3,17,30,0,0), "finalLocation": "2ERF", "finalRoom": "2068 "},
{"courseName": "CS", "courseNum": 440, "CRN": 29904, "classTime": " 12:00 PM (MWF)", "finalStart": new Date(2017,4,2,8,00,0,0), "finalEnd": new Date(2017,4,2,10,00,0,0), "finalLocation": "2LCF", "finalRoom": "F001"},
{"courseName": "CS", "courseNum": 440, "CRN": 29905, "classTime": " 12:00 PM (MWF)", "finalStart": new Date(2017,4,2,8,00,0,0), "finalEnd": new Date(2017,4,2,10,00,0,0), "finalLocation": "2LCF", "finalRoom": "F001"},
{"courseName": "CS", "courseNum": 442, "CRN": 33786, "classTime": " 10:00 AM (MWF)", "finalStart": new Date(2017,4,5,10,30,0,0), "finalEnd": new Date(2017,4,5,12,30,0,0), "finalLocation": "2LCF", "finalRoom": "F004"},
{"courseName": "CS", "courseNum": 442, "CRN": 33785, "classTime": " 10:00 AM (MWF)", "finalStart": new Date(2017,4,5,10,30,0,0), "finalEnd": new Date(2017,4,5,12,30,0,0), "finalLocation": "2LCF", "finalRoom": "F004"},
{"courseName": "CS", "courseNum": 450, "CRN": 17432, "classTime": " 3:00 PM (MWF)", "finalStart": new Date(2017,4,1,8,00,0,0), "finalEnd": new Date(2017,4,1,10,00,0,0), "finalLocation": "2BH", "finalRoom": "209"},
{"courseName": "CS", "courseNum": 450, "CRN": 19163, "classTime": " 3:00 PM (MWF)", "finalStart": new Date(2017,4,1,8,00,0,0), "finalEnd": new Date(2017,4,1,10,00,0,0), "finalLocation": "2BH", "finalRoom": "209"},
{"courseName": "CS", "courseNum": 466, "CRN": 26695, "classTime": " 9:30 AM (TR)", "finalStart": new Date(2017,4,3,10,30,0,0), "finalEnd": new Date(2017,4,3,12,30,0,0), "finalLocation": "2LCC", "finalRoom": "C003"},
{"courseName": "CS", "courseNum": 466, "CRN": 26694, "classTime": " 9:30 AM (TR)", "finalStart": new Date(2017,4,3,10,30,0,0), "finalEnd": new Date(2017,4,3,12,30,0,0), "finalLocation": "2LCC", "finalRoom": "C003"},
{"courseName": "CS", "courseNum": 469, "CRN": 19165, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2017,4,3,15,30,0,0), "finalEnd": new Date(2017,4,3,17,30,0,0), "finalLocation": "2LCC", "finalRoom": "C001"},
{"courseName": "CS", "courseNum": 469, "CRN": 17434, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2017,4,3,15,30,0,0), "finalEnd": new Date(2017,4,3,17,30,0,0), "finalLocation": "2LCC", "finalRoom": "C001"},
{"courseName": "CS", "courseNum": 473, "CRN": 39849, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2017,4,5,8,00,0,0), "finalEnd": new Date(2017,4,5,10,00,0,0), "finalLocation": "2SES", "finalRoom": "238"},
{"courseName": "CS", "courseNum": 473, "CRN": 39850, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2017,4,5,8,00,0,0), "finalEnd": new Date(2017,4,5,10,00,0,0), "finalLocation": "2SES", "finalRoom": "238"},
{"courseName": "CS", "courseNum": 474, "CRN": 38617, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2017,4,3,15,30,0,0), "finalEnd": new Date(2017,4,3,17,30,0,0), "finalLocation": "2BSB", "finalRoom": "145"},
{"courseName": "CS", "courseNum": 474, "CRN": 38616, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2017,4,3,15,30,0,0), "finalEnd": new Date(2017,4,3,17,30,0,0), "finalLocation": "2BSB", "finalRoom": "145"},
{"courseName": "CS", "courseNum": 478, "CRN": 37634, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2017,4,5,13,00,0,0), "finalEnd": new Date(2017,4,5,15,00,0,0), "finalLocation": "2BSB", "finalRoom": "145"},
{"courseName": "CS", "courseNum": 478, "CRN": 37633, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2017,4,5,13,00,0,0), "finalEnd": new Date(2017,4,5,15,00,0,0), "finalLocation": "2BSB", "finalRoom": "145"},
{"courseName": "CS", "courseNum": 480, "CRN": 17438, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2017,4,5,13,00,0,0), "finalEnd": new Date(2017,4,5,15,00,0,0), "finalLocation": "2LCF", "finalRoom": "F004"},
{"courseName": "CS", "courseNum": 480, "CRN": 19171, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2017,4,5,13,00,0,0), "finalEnd": new Date(2017,4,5,15,00,0,0), "finalLocation": "2LCF", "finalRoom": "F004"},
{"courseName": "CS", "courseNum": 489, "CRN": 38327, "classTime": " 11:00 AM (TR)", "finalStart": new Date(2017,4,1,10,30,0,0), "finalEnd": new Date(2017,4,1,12,30,0,0), "finalLocation": "2ERF", "finalRoom": "2068 "},
{"courseName": "CS", "courseNum": 489, "CRN": 38328, "classTime": " 11:00 AM (TR)", "finalStart": new Date(2017,4,1,10,30,0,0), "finalEnd": new Date(2017,4,1,12,30,0,0), "finalLocation": "2ERF", "finalRoom": "2068 "},
{"courseName": "CS", "courseNum": 493, "CRN": 40119, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2017,4,5,13,00,0,0), "finalEnd": new Date(2017,4,5,15,00,0,0), "finalLocation": "2LCF", "finalRoom": "F006"},
{"courseName": "CS", "courseNum": 493, "CRN": 40120, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2017,4,5,13,00,0,0), "finalEnd": new Date(2017,4,5,15,00,0,0), "finalLocation": "2LCF", "finalRoom": "F006"},
{"courseName": "CS", "courseNum": 501, "CRN": 33788, "classTime": " 11:00 AM (MWF)", "finalStart": new Date(2017,4,4,10,30,0,0), "finalEnd": new Date(2017,4,4,12,30,0,0), "finalLocation": "2TH", "finalRoom": "216"},
{"courseName": "CS", "courseNum": 502, "CRN": 23104, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2017,4,3,15,30,0,0), "finalEnd": new Date(2017,4,3,17,30,0,0), "finalLocation": "2TH", "finalRoom": "117"},
{"courseName": "CS", "courseNum": 511, "CRN": 17442, "classTime": " 11:00 AM (MWF)", "finalStart": new Date(2017,4,4,10,30,0,0), "finalEnd": new Date(2017,4,4,12,30,0,0), "finalLocation": "2SES", "finalRoom": "170"},
{"courseName": "CS", "courseNum": 514, "CRN": 38618, "classTime": " 10:00 AM (MWF)", "finalStart": new Date(2017,4,5,10,30,0,0), "finalEnd": new Date(2017,4,5,12,30,0,0), "finalLocation": "2SES", "finalRoom": "170"},
{"courseName": "CS", "courseNum": 522, "CRN": 39385, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2017,4,5,8,00,0,0), "finalEnd": new Date(2017,4,5,10,00,0,0), "finalLocation": "2ERF", "finalRoom": "2068 "},
{"courseName": "CS", "courseNum": 553, "CRN": 31243, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2017,4,3,15,30,0,0), "finalEnd": new Date(2017,4,3,17,30,0,0), "finalLocation": "2LH", "finalRoom": "210"},
{"courseName": "CS", "courseNum": 569, "CRN": 27021, "classTime": " 11:00 AM (TR)", "finalStart": new Date(2017,4,1,10,30,0,0), "finalEnd": new Date(2017,4,1,12,30,0,0), "finalLocation": "2LH", "finalRoom": "312"},
{"courseName": "CS", "courseNum": 581, "CRN": 28655, "classTime": " 2:00 PM (MW)", "finalStart": new Date(2017,4,3,13,00,0,0), "finalEnd": new Date(2017,4,3,15,00,0,0), "finalLocation": "2SES", "finalRoom": "170"},
{"courseName": "CS", "courseNum": 583, "CRN": 0, "classTime": " ", "finalStart": new Date(2017,4,3,18,00,0,0), "finalEnd": new Date(2017,4,3,20,00,0,0), "finalLocation": "2SES", "finalRoom": "130"},
{"courseName": "CS", "courseNum": 588, "CRN": 38552, "classTime": " 3:00 PM (MW)", "finalStart": new Date(2017,4,1,8,00,0,0), "finalEnd": new Date(2017,4,1,10,00,0,0), "finalLocation": "2SES", "finalRoom": "138"},
{"courseName": "CS", "courseNum": 590, "CRN": 34836, "classTime": " 3:30 PM (M)", "finalStart": new Date(2017,4,1,8,00,0,0), "finalEnd": new Date(2017,4,1,10,00,0,0), "finalLocation": "2SES", "finalRoom": "170"},
{"courseName": "CS", "courseNum": 594, "CRN": 33792, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2017,4,5,13,00,0,0), "finalEnd": new Date(2017,4,5,15,00,0,0), "finalLocation": "2SH", "finalRoom": "220"}

];
	
	$interval(function(){ $scope.$broadcast('timer-start'); }, 1000); // This is a HACK! :-(
	$scope.model = [
	];
		$scope.stateText = function(input) {
		if (input.finalStart > new Date()) {
			console.log(input.finalStart);
			console.log(">");
			console.log(new Date());
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
		console.log($scope.mydata);
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
	if ($scope.mydata[i].finalEnd > new Date()) {
//	if (true) {
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
