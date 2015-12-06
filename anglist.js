var app = angular.module('finalscountdown', ['timer']);

app.controller('listingCtrl', function ($scope, $interval) {

	$scope.mydata = [
//{"courseName": "CS", "courseNum": 107, "CRN": "10634", "classTime": "4:00PM MWF", "finalStart": new Date(2015,11,7,3,30,0,0), "finalEnd": new Date(2015,11,7,5,30,0,0), "finalLocation": "2LCC", "finalRoom": "C3"},
{"courseName": "CS", "courseNum": 107, "CRN": 17412, "classTime": " 11:00 AM TR", "finalStart": new Date(2016,4,2,10,30,0,0), "finalEnd": new Date(2016,4,2,12,30,0,0), "finalLocation": "2LCA; 2LCD", "finalRoom": "A002, A003; D002"},
{"courseName": "CS", "courseNum": 109, "CRN": 19466, "classTime": " 02:00 PM MW", "finalStart": new Date(2016,4,4,13,0,0,0), "finalEnd": new Date(2016,4,2,15,0,0,0), "finalLocation": "2LCA; 2LCE", "finalRoom": "A001; E101"},
{"courseName": "CS", "courseNum": 111, "CRN": 34013, "classTime": " 09:30 AM TR", "finalStart": new Date(2016,4,4,10,30,0,0), "finalEnd": new Date(2016,4,4,12,30,0,0), "finalLocation": "2LCC; 2LCD", "finalRoom": "C006; D005"},
{"courseName": "CS", "courseNum": 141, "CRN": 34447, "classTime": " 01:00 PM MWF", "finalStart": new Date(2016,4,2,13,0,0,0), "finalEnd": new Date(2016,4,2,15,0,0,0), "finalLocation": "2LCA", "finalRoom": "A001"},
{"courseName": "CS", "courseNum": 151, "CRN": 34014, "classTime": " 12:00 PM MWF", "finalStart": new Date(2016,4,3,8,0,0,0), "finalEnd": new Date(2016,4,3,10,0,0,0), "finalLocation": "2BSB", "finalRoom": "140, 145"},
{"courseName": "CS", "courseNum": 201, "CRN": 17418, "classTime": " 12:30 PM TR, 12:00 PM F", "finalStart": new Date(2016,4,6,8,0,0,0), "finalEnd": new Date(2016,4,6,10,0,0,0), "finalLocation": "2BH", "finalRoom": "304"},
{"courseName": "CS", "courseNum": 211, "CRN": 34456, "classTime": " 10:00 AM F", "finalStart": new Date(2016,4,6,10,30,0,0), "finalEnd": new Date(2016,4,6,12,30,0,0), "finalLocation": "2LCF", "finalRoom": "F004"},
{"courseName": "CS", "courseNum": 251, "CRN": 34460, "classTime": " 11:00 AM MWF", "finalStart": new Date(2016,4,5,10,30,0,0), "finalEnd": new Date(2016,4,5,12,30,0,0), "finalLocation": "2LCD", "finalRoom": "D004, D005"},
{"courseName": "CS", "courseNum": 261, "CRN": 34463, "classTime": " 02:00 PM TR", "finalStart": new Date(2016,4,4,15,30,0,0), "finalEnd": new Date(2016,4,4,17,30,0,0), "finalLocation": "2BSB", "finalRoom": "145"},
{"courseName": "CS", "courseNum": 301, "CRN": 17422, "classTime": " 01:00 PM MWF", "finalStart": new Date(2016,4,2,0,0,0,0), "finalEnd": new Date(2016,4,2,0,0,0,0), "finalLocation": "2LCC; 2LCF", "finalRoom": "C004; F003"},
{"courseName": "CS", "courseNum": 341, "CRN": 34723, "classTime": " 03:00 PM MWF", "finalStart": new Date(2016,4,2,0,0,0,0), "finalEnd": new Date(2016,4,2,0,0,0,0), "finalLocation": "2LCD", "finalRoom": "D005"},
{"courseName": "CS", "courseNum": 342, "CRN": 35976, "classTime": " 02:00 PM TR", "finalStart": new Date(2016,4,4,15,30,0,0), "finalEnd": new Date(2016,4,4,17,30,0,0), "finalLocation": "2SES", "finalRoom": "250"},
{"courseName": "CS", "courseNum": 361, "CRN": 36306, "classTime": " 12:30 PM TR", "finalStart": new Date(2016,4,6,8,0,0,0), "finalEnd": new Date(2016,4,6,10,0,0,0), "finalLocation": "2LCE", "finalRoom": "E101"},
{"courseName": "CS", "courseNum": 362, "CRN": 36309, "classTime": " 09:30 AM TR", "finalStart": new Date(2016,4,4,10,30,0,0), "finalEnd": new Date(2016,4,4,12,30,0,0), "finalLocation": "2LCE", "finalRoom": "E101"},
{"courseName": "CS", "courseNum": 377, "CRN": 36312, "classTime": " 12:00 PM MW", "finalStart": new Date(2016,4,3,8,0,0,0), "finalEnd": new Date(2016,4,3,10,0,0,0), "finalLocation": "2LH", "finalRoom": "312"},
{"courseName": "CS", "courseNum": 377, "CRN": 38111, "classTime": " 02:00 PM MW", "finalStart": new Date(2016,4,4,10,30,0,0), "finalEnd": new Date(2016,4,4,12,30,0,0), "finalLocation": "2LH", "finalRoom": "210"},
{"courseName": "CS", "courseNum": 385, "CRN": 17428, "classTime": " 03:30 PM TR", "finalStart": new Date(2016,4,6,13,0,0,0), "finalEnd": new Date(2016,4,6,15,0,0,0), "finalLocation": "2BSB", "finalRoom": "145"},
{"courseName": "CS", "courseNum": 401, "CRN": 17454, "classTime": " 11:00 AM MWF", "finalStart": new Date(2016,4,5,10,30,0,0), "finalEnd": new Date(2016,4,5,12,30,0,0), "finalLocation": "2BSB", "finalRoom": "319"},
{"courseName": "CS", "courseNum": 401, "CRN": 17455, "classTime": " 12:30 PM TR", "finalStart": new Date(2016,4,6,8,0,0,0), "finalEnd": new Date(2016,4,6,10,0,0,0), "finalLocation": "2LCF", "finalRoom": "F001"},
{"courseName": "CS", "courseNum": 411, "CRN": 38549, "classTime": " 10:00 AM MWF", "finalStart": new Date(2016,4,6,10,30,0,0), "finalEnd": new Date(2016,4,6,12,30,0,0), "finalLocation": "2LCC", "finalRoom": "C004"},
{"courseName": "CS", "courseNum": 412, "CRN": 38114, "classTime": " 02:00 PM TR", "finalStart": new Date(2016,4,4,15,30,0,0), "finalEnd": new Date(2016,4,4,17,30,0,0), "finalLocation": "2LCF", "finalRoom": "F006"},
{"courseName": "CS", "courseNum": 421, "CRN": 28653, "classTime": " 12:30 PM TR", "finalStart": new Date(2016,4,6,8,0,0,0), "finalEnd": new Date(2016,4,6,10,0,0,0), "finalLocation": "2SES", "finalRoom": "130"},
{"courseName": "CS", "courseNum": 422, "CRN": 19650, "classTime": " 02:00 PM TR", "finalStart": new Date(2016,4,4,15,30,0,0), "finalEnd": new Date(2016,4,4,17,30,0,0), "finalLocation": "2ERF", "finalRoom": "2068"},
{"courseName": "CS", "courseNum": 426, "CRN": 27145, "classTime": " 03:00 PM F", "finalStart": new Date(2016,4,2,8,0,0,0), "finalEnd": new Date(2016,4,2,10,0,0,0), "finalLocation": "2ERF", "finalRoom": "2068"},
{"courseName": "CS", "courseNum": 440, "CRN": 29904, "classTime": " 12:00 PM MWF", "finalStart": new Date(2016,4,3,8,0,0,0), "finalEnd": new Date(2016,4,3,10,0,0,0), "finalLocation": "2LCF", "finalRoom": "F004"},
{"courseName": "CS", "courseNum": 442, "CRN": 33785, "classTime": " 09:30 AM TR", "finalStart": new Date(2016,4,4,10,30,0,0), "finalEnd": new Date(2016,4,4,12,30,0,0), "finalLocation": "2LCF", "finalRoom": "F006"},
{"courseName": "CS", "courseNum": 450, "CRN": 17432, "classTime": " 01:00 PM MWF", "finalStart": new Date(2016,4,2,13,0,0,0), "finalEnd": new Date(2016,4,2,15,0,0,0), "finalLocation": "2SES", "finalRoom": "138"},
{"courseName": "CS", "courseNum": 466, "CRN": 26694, "classTime": " 09:30 AM TR", "finalStart": new Date(2016,4,4,10,30,0,0), "finalEnd": new Date(2016,4,4,12,30,0,0), "finalLocation": "2SES", "finalRoom": "238"},
{"courseName": "CS", "courseNum": 469, "CRN": 17434, "classTime": " 02:00 PM TR", "finalStart": new Date(2016,4,4,15,30,0,0), "finalEnd": new Date(2016,4,4,17,30,0,0), "finalLocation": "2BH", "finalRoom": "305"},
{"courseName": "CS", "courseNum": 473, "CRN": 26540, "classTime": " 02:00 PM MWF", "finalStart": new Date(2016,4,4,13,0,0,0), "finalEnd": new Date(2016,4,4,15,0,0,0), "finalLocation": "2LCF", "finalRoom": "F003"},
{"courseName": "CS", "courseNum": 474, "CRN": 38616, "classTime": " 11:00 AM TR", "finalStart": new Date(2016,4,2,10,30,0,0), "finalEnd": new Date(2016,4,2,12,30,0,0), "finalLocation": "2ERF", "finalRoom": "1003, 1023"},
{"courseName": "CS", "courseNum": 478, "CRN": 37633, "classTime": " 09:30 AM TR", "finalStart": new Date(2016,4,4,10,30,0,0), "finalEnd": new Date(2016,4,4,12,30,0,0), "finalLocation": "2LCF", "finalRoom": "F003"},
{"courseName": "CS", "courseNum": 480, "CRN": 17438, "classTime": " 05:30 PM TR", "finalStart": new Date(2016,4,5,15,30,0,0), "finalEnd": new Date(2016,4,5,17,30,0,0), "finalLocation": "2LCC", "finalRoom": "C003"},
{"courseName": "CS", "courseNum": 486, "CRN": 37268, "classTime": " 04:00 PM MWF", "finalStart": new Date(2016,4,3,15,30,0,0), "finalEnd": new Date(2016,4,3,17,30,0,0), "finalLocation": "2LH", "finalRoom": "312"},
{"courseName": "CS", "courseNum": 489, "CRN": 38327, "classTime": " 03:30 PM TR", "finalStart": new Date(2016,4,6,13,0,0,0), "finalEnd": new Date(2016,4,6,15,0,0,0), "finalLocation": "2BSB", "finalRoom": "335"},
{"courseName": "CS", "courseNum": 491, "CRN": 3726830476 , "classTime": "NA", "finalStart": new Date(2016,4,2,18,0,0,0), "finalEnd": new Date(2016,4,2,20,0,0,0), "finalLocation": "LCD", "finalRoom": "D2"},
{"courseName": "CS", "courseNum": 491, "CRN": 30475, "classTime": " 04:00 PM T", "finalStart": new Date(2016,4,0,0,0,0,0), "finalEnd": new Date(2016,4,0,0,0,0,0), "finalLocation": "", "finalRoom": ""},
{"courseName": "CS", "courseNum": 491, "CRN": 30476, "classTime": " 02:30 PM R", "finalStart": new Date(2016,4,0,0,0,0,0), "finalEnd": new Date(2016,4,0,0,0,0,0), "finalLocation": "", "finalRoom": ""},
{"courseName": "CS", "courseNum": 501, "CRN": 33788, "classTime": " 03:30 PM TR", "finalStart": new Date(2016,4,6,13,0,0,0), "finalEnd": new Date(2016,4,6,0,0,0,0), "finalLocation": "2LCA", "finalRoom": "A003"},
{"courseName": "CS", "courseNum": 502, "CRN": 23104, "classTime": " 02:00 PM TR", "finalStart": new Date(2016,4,4,15,30,0,0), "finalEnd": new Date(2016,4,4,0,0,0,0), "finalLocation": "2LCA", "finalRoom": "A004"},
{"courseName": "CS", "courseNum": 511, "CRN": 17442, "classTime": " 11:00 AM MWF", "finalStart": new Date(2016,4,5,10,30,0,0), "finalEnd": new Date(2016,4,5,12,30,0,0), "finalLocation": "2SES", "finalRoom": "170"},
{"courseName": "CS", "courseNum": 514, "CRN": 38618, "classTime": " 12:00 PM MWF", "finalStart": new Date(2016,4,3,8,0,0,0), "finalEnd": new Date(2016,4,3,10,0,0,0), "finalLocation": "2SES", "finalRoom": "238"},
{"courseName": "CS", "courseNum": 523, "CRN": 38501, "classTime": " 09:30 AM TR", "finalStart": new Date(2016,4,4,10,30,0,0), "finalEnd": new Date(2016,4,4,12,30,0,0), "finalLocation": "2ETMSW", "finalRoom": "2219"},
{"courseName": "CS", "courseNum": 553, "CRN": 31243, "classTime": " 02:00 PM TR", "finalStart": new Date(2016,4,4,15,30,0,0), "finalEnd": new Date(2016,4,4,17,30,0,0), "finalLocation": "2TH", "finalRoom": "100"},
{"courseName": "CS", "courseNum": 569, "CRN": 27021, "classTime": " 11:00 AM TR", "finalStart": new Date(2016,4,2,10,30,0,0), "finalEnd": new Date(2016,4,2,12,30,0,0), "finalLocation": "2LCA", "finalRoom": "A005"},
{"courseName": "CS", "courseNum": 581, "CRN": 28655, "classTime": " 02:00 PM MW", "finalStart": new Date(2016,4,4,13,0,0,0), "finalEnd": new Date(2016,4,4,15,0,0,0), "finalLocation": "2LCA", "finalRoom": "A004"},
{"courseName": "CS", "courseNum": 588, "CRN": 38552, "classTime": " 03:00 PM MWF", "finalStart": new Date(2016,4,2,8,0,0,0), "finalEnd": new Date(2016,4,2,10,0,0,0), "finalLocation": "2LH", "finalRoom": "312"},
{"courseName": "CS", "courseNum": 594, "CRN": 33648, "classTime": " 03:30 PM TR", "finalStart": new Date(2016,4,6,13,0,0,0), "finalEnd": new Date(2016,4,6,15,0,0,0), "finalLocation": "2TH", "finalRoom": "208"},
{"courseName": "CS", "courseNum": 594, "CRN": 33792, "classTime": " 03:30 PM TR", "finalStart": new Date(2016,4,6,13,0,0,0), "finalEnd": new Date(2016,4,6,15,0,0,0), "finalLocation": "2TH", "finalRoom": "204"},
{"courseName": "CS", "courseNum": 594, "CRN": 34724, "classTime": " 12:00 PM T", "finalStart": new Date(2016,4,6,8,0,0,0), "finalEnd": new Date(2016,4,6,10,0,0,0), "finalLocation": "2TH", "finalRoom": "120"},
{"courseName": "CS", "courseNum": 594, "CRN": 38551, "classTime": " 12:30 PM TR", "finalStart": new Date(2016,4,6,8,0,0,0), "finalEnd": new Date(2016,4,6,10,0,0,0), "finalLocation": "2SH", "finalRoom": "304"},
{"courseName": "CS", "courseNum": 594, "CRN": 38839, "classTime": " 09:30 AM T", "finalStart": new Date(2016,4,4,10,30,0,0), "finalEnd": new Date(2016,4,4,12,30,0,0), "finalLocation": "", "finalRoom": ""}
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
