var app = angular.module('finalscountdown', ['timer']);

app.controller('listingCtrl', function ($scope, $interval) {

	$scope.mydata = [
//{"courseName": "CS", "courseNum": 107, "CRN": "10634", "classTime": "4:0PM MWF", "finalStart": new Date(2015,11,7,3,30,0,0), "finalEnd": new Date(2015,11,7,5,30,0,0), "finalLocation": "2LCC", "finalRoom": "C3"},
{"courseName": "CS", "courseNum": 10, "CRN": 0, "classTime": " 1:0 PM (MWF)", "finalStart": new Date(2017,11,11,13,0,0,0), "finalEnd": new Date(2017,11,11,15,0,0,0), "finalLocation": "2BSB", "finalRoom": "140"},
{"courseName": "CS", "courseNum": 107, "CRN": 0, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2017,11,15,13,0,0,0), "finalEnd": new Date(2017,11,15,15,0,0,0), "finalLocation": "2LCC", "finalRoom": "C04"},
{"courseName": "CS", "courseNum": 109, "CRN": 0, "classTime": " 4:0 PM (MW)", "finalStart": new Date(2017,11,12,15,30,0,0), "finalEnd": new Date(2017,11,12,17,30,0,0), "finalLocation": "2BSB", "finalRoom": "250"},
{"courseName": "CS", "courseNum": 111, "CRN": 0, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2017,11,15,8,0,0,0), "finalEnd": new Date(2017,11,15,10,0,0,0), "finalLocation": "2LCC", "finalRoom": "C03"},
{"courseName": "CS", "courseNum": 111, "CRN": 0, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2017,11,15,8,0,0,0), "finalEnd": new Date(2017,11,15,10,0,0,0), "finalLocation": "2BSB", "finalRoom": "250"},
{"courseName": "CS", "courseNum": 141, "CRN": 0, "classTime": " 3:0 PM (MWF)", "finalStart": new Date(2017,11,11,8,0,0,0), "finalEnd": new Date(2017,11,11,10,0,0,0), "finalLocation": "2BSB", "finalRoom": "250"},
{"courseName": "CS", "courseNum": 151, "CRN": 0, "classTime": " ", "finalStart": new Date(2017,11,15,15,30,0,0), "finalEnd": new Date(2017,11,15,17,30,0,0), "finalLocation": "2LCD", "finalRoom": "D01, D05, 2LCC C06"},
{"courseName": "CS", "courseNum": 211, "CRN": 0, "classTime": " 5:0 PM (T)", "finalStart": new Date(2017,11,14,15,30,0,0), "finalEnd": new Date(2017,11,14,17,30,0,0), "finalLocation": "2LCA", "finalRoom": "A01"},
{"courseName": "CS", "courseNum": 251, "CRN": 0, "classTime": " ", "finalStart": new Date(2017,11,12,18,0,0,0), "finalEnd": new Date(2017,11,12,20,0,0,0), "finalLocation": "2SES", "finalRoom": "250"},
{"courseName": "CS", "courseNum": 261, "CRN": 0, "classTime": " ", "finalStart": new Date(2017,11,13,18,0,0,0), "finalEnd": new Date(2017,11,13,20,0,0,0), "finalLocation": "2SES", "finalRoom": "250"},
{"courseName": "CS", "courseNum": 301, "CRN": 0, "classTime": " 4:0 PM (MW)", "finalStart": new Date(2017,11,12,15,30,0,0), "finalEnd": new Date(2017,11,12,17,30,0,0), "finalLocation": "2LCB", "finalRoom": "B101 "},
{"courseName": "CS", "courseNum": 341, "CRN": 0, "classTime": " 1:0 PM (MWF)", "finalStart": new Date(2017,11,11,13,0,0,0), "finalEnd": new Date(2017,11,11,15,0,0,0), "finalLocation": "2LCD", "finalRoom": "D04, D01"},
{"courseName": "CS", "courseNum": 342, "CRN": 0, "classTime": " ", "finalStart": new Date(2017,11,15,13,0,0,0), "finalEnd": new Date(2017,11,15,15,0,0,0), "finalLocation": "2LCD", "finalRoom": "D04, 2LCE E101"},
{"courseName": "CS", "courseNum": 361, "CRN": 0, "classTime": " 2:0 PM (TR)", "finalStart": new Date(2017,11,13,15,30,0,0), "finalEnd": new Date(2017,11,13,17,30,0,0), "finalLocation": "2SES", "finalRoom": "250"},
{"courseName": "CS", "courseNum": 362, "CRN": 0, "classTime": " 9:30 AM (TR)", "finalStart": new Date(2017,11,13,10,30,0,0), "finalEnd": new Date(2017,11,13,12,30,0,0), "finalLocation": "2LCD", "finalRoom": "D04"},
{"courseName": "CS", "courseNum": 385, "CRN": 0, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2017,11,15,13,0,0,0), "finalEnd": new Date(2017,11,15,15,0,0,0), "finalLocation": "2SES", "finalRoom": "138"},
{"courseName": "CS", "courseNum": 401, "CRN": 0, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2017,11,15,13,0,0,0), "finalEnd": new Date(2017,11,15,15,0,0,0), "finalLocation": "2LCC", "finalRoom": "C01; 2LCF F06"},
{"courseName": "CS", "courseNum": 401, "CRN": 0, "classTime": " 3:0 PM (MW)", "finalStart": new Date(2017,11,11,8,0,0,0), "finalEnd": new Date(2017,11,11,10,0,0,0), "finalLocation": "2LCF", "finalRoom": "F04"},
{"courseName": "CS", "courseNum": 401, "CRN": 0, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2017,11,15,8,0,0,0), "finalEnd": new Date(2017,11,15,10,0,0,0), "finalLocation": "2LCF", "finalRoom": "F01"},
{"courseName": "CS", "courseNum": 401, "CRN": 0, "classTime": " 2:0 PM (MWF)", "finalStart": new Date(2017,11,13,13,0,0,0), "finalEnd": new Date(2017,11,13,15,0,0,0), "finalLocation": "2TBH", "finalRoom": "180F"},
{"courseName": "CS", "courseNum": 401, "CRN": 0, "classTime": " 3:0 PM (MW)", "finalStart": new Date(2017,11,11,8,0,0,0), "finalEnd": new Date(2017,11,11,10,0,0,0), "finalLocation": "2LCF", "finalRoom": "F04"},
{"courseName": "CS", "courseNum": 401, "CRN": 0, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2017,11,15,8,0,0,0), "finalEnd": new Date(2017,11,15,10,0,0,0), "finalLocation": "2LCF", "finalRoom": "F01"},
{"courseName": "CS", "courseNum": 401, "CRN": 0, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2017,11,15,13,0,0,0), "finalEnd": new Date(2017,11,15,15,0,0,0), "finalLocation": "2LCC", "finalRoom": "C01; 2LCF F06"},
{"courseName": "CS", "courseNum": 401, "CRN": 0, "classTime": " 2:0 PM (MWF)", "finalStart": new Date(2017,11,13,13,0,0,0), "finalEnd": new Date(2017,11,13,15,0,0,0), "finalLocation": "2TBH", "finalRoom": "180F"},
{"courseName": "CS", "courseNum": 411, "CRN": 0, "classTime": " 9:0 AM (MWF)", "finalStart": new Date(2017,11,12,10,30,0,0), "finalEnd": new Date(2017,11,12,12,30,0,0), "finalLocation": "2TBH", "finalRoom": "180G"},
{"courseName": "CS", "courseNum": 411, "CRN": 0, "classTime": " 9:0 AM (MWF)", "finalStart": new Date(2017,11,12,10,30,0,0), "finalEnd": new Date(2017,11,12,12,30,0,0), "finalLocation": "2TBH", "finalRoom": "180G"},
{"courseName": "CS", "courseNum": 412, "CRN": 0, "classTime": " 9:30 AM (TR)", "finalStart": new Date(2017,11,13,10,30,0,0), "finalEnd": new Date(2017,11,13,12,30,0,0), "finalLocation": "2SES", "finalRoom": "138"},
{"courseName": "CS", "courseNum": 412, "CRN": 0, "classTime": " 9:30 AM (TR)", "finalStart": new Date(2017,11,13,10,30,0,0), "finalEnd": new Date(2017,11,13,12,30,0,0), "finalLocation": "2SES", "finalRoom": "138"},
{"courseName": "CS", "courseNum": 425, "CRN": 0, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2017,11,15,8,0,0,0), "finalEnd": new Date(2017,11,15,10,0,0,0), "finalLocation": "2TBH", "finalRoom": "180G"},
{"courseName": "CS", "courseNum": 425, "CRN": 0, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2017,11,15,8,0,0,0), "finalEnd": new Date(2017,11,15,10,0,0,0), "finalLocation": "2TBH", "finalRoom": "180G"},
{"courseName": "CS", "courseNum": 440, "CRN": 0, "classTime": " ", "finalStart": new Date(2017,11,13,18,0,0,0), "finalEnd": new Date(2017,11,13,20,0,0,0), "finalLocation": "2BSB", "finalRoom": "145"},
{"courseName": "CS", "courseNum": 441, "CRN": 0, "classTime": " 2:0 PM (TR)", "finalStart": new Date(2017,11,13,15,30,0,0), "finalEnd": new Date(2017,11,13,17,30,0,0), "finalLocation": "2BH", "finalRoom": "317"},
{"courseName": "CS", "courseNum": 441, "CRN": 0, "classTime": " 2:0 PM (TR)", "finalStart": new Date(2017,11,13,15,30,0,0), "finalEnd": new Date(2017,11,13,17,30,0,0), "finalLocation": "2BH", "finalRoom": "317"},
{"courseName": "CS", "courseNum": 450, "CRN": 0, "classTime": " 3:0 PM (MWF)", "finalStart": new Date(2017,11,11,8,0,0,0), "finalEnd": new Date(2017,11,11,10,0,0,0), "finalLocation": "2TBH", "finalRoom": "180G"},
{"courseName": "CS", "courseNum": 450, "CRN": 0, "classTime": " 3:0 PM (MWF)", "finalStart": new Date(2017,11,11,8,0,0,0), "finalEnd": new Date(2017,11,11,10,0,0,0), "finalLocation": "2TBH", "finalRoom": "180G"},
{"courseName": "CS", "courseNum": 466, "CRN": 0, "classTime": " 11:0 AM (TR)", "finalStart": new Date(2017,11,11,10,30,0,0), "finalEnd": new Date(2017,11,11,12,30,0,0), "finalLocation": "2TBH", "finalRoom": "180F"},
{"courseName": "CS", "courseNum": 466, "CRN": 0, "classTime": " 11:0 AM (TR)", "finalStart": new Date(2017,11,11,10,30,0,0), "finalEnd": new Date(2017,11,11,12,30,0,0), "finalLocation": "2TBH", "finalRoom": "180F"},
{"courseName": "CS", "courseNum": 474, "CRN": 0, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2017,11,15,8,0,0,0), "finalEnd": new Date(2017,11,15,10,0,0,0), "finalLocation": "2LCC", "finalRoom": "C04"},
{"courseName": "CS", "courseNum": 474, "CRN": 0, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2017,11,15,8,0,0,0), "finalEnd": new Date(2017,11,15,10,0,0,0), "finalLocation": "2LCC", "finalRoom": "C04"},
{"courseName": "CS", "courseNum": 478, "CRN": 0, "classTime": " 9:30 AM (TR)", "finalStart": new Date(2017,11,13,10,30,0,0), "finalEnd": new Date(2017,11,13,12,30,0,0), "finalLocation": "2LCD", "finalRoom": "D01"},
{"courseName": "CS", "courseNum": 478, "CRN": 0, "classTime": " 9:30 AM (TR)", "finalStart": new Date(2017,11,13,10,30,0,0), "finalEnd": new Date(2017,11,13,12,30,0,0), "finalLocation": "2LCD", "finalRoom": "D01"},
{"courseName": "CS", "courseNum": 480, "CRN": 0, "classTime": " 5:0 PM (TR)", "finalStart": new Date(2017,11,14,15,30,0,0), "finalEnd": new Date(2017,11,14,17,30,0,0), "finalLocation": "2LCC", "finalRoom": "C01"},
{"courseName": "CS", "courseNum": 480, "CRN": 0, "classTime": " 5:0 PM (MW)", "finalStart": new Date(2017,11,15,15,30,0,0), "finalEnd": new Date(2017,11,15,17,30,0,0), "finalLocation": "2TBH", "finalRoom": "180F"},
{"courseName": "CS", "courseNum": 480, "CRN": 0, "classTime": " 5:0 PM (TR)", "finalStart": new Date(2017,11,14,15,30,0,0), "finalEnd": new Date(2017,11,14,17,30,0,0), "finalLocation": "2LCC", "finalRoom": "C01"},
{"courseName": "CS", "courseNum": 480, "CRN": 0, "classTime": " 5:0 PM (MW)", "finalStart": new Date(2017,11,15,15,30,0,0), "finalEnd": new Date(2017,11,15,17,30,0,0), "finalLocation": "2TBH", "finalRoom": "180F"},
{"courseName": "CS", "courseNum": 491, "CRN": 0, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2017,11,15,8,0,0,0), "finalEnd": new Date(2017,11,15,10,0,0,0), "finalLocation": "2ERF", "finalRoom": "2068 "},
{"courseName": "CS", "courseNum": 491, "CRN": 0, "classTime": " 3:0 PM (MW)", "finalStart": new Date(2017,11,11,8,0,0,0), "finalEnd": new Date(2017,11,11,10,0,0,0), "finalLocation": "2LCA", "finalRoom": "A06"},
{"courseName": "CS", "courseNum": 491, "CRN": 0, "classTime": " 2:0 PM (R)", "finalStart": new Date(2017,11,13,15,30,0,0), "finalEnd": new Date(2017,11,13,17,30,0,0), "finalLocation": "", "finalRoom": ""},
{"courseName": "CS", "courseNum": 491, "CRN": 0, "classTime": " 9:0 AM (M)", "finalStart": new Date(2017,11,14,13,0,0,0), "finalEnd": new Date(2017,11,14,15,0,0,0), "finalLocation": "", "finalRoom": ""},
{"courseName": "CS", "courseNum": 491, "CRN": 0, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2017,11,15,8,0,0,0), "finalEnd": new Date(2017,11,15,10,0,0,0), "finalLocation": "2ERF", "finalRoom": "2068 "},
{"courseName": "CS", "courseNum": 491, "CRN": 0, "classTime": " 3:0 PM (MW)", "finalStart": new Date(2017,11,11,8,0,0,0), "finalEnd": new Date(2017,11,11,10,0,0,0), "finalLocation": "2LCA", "finalRoom": "A06"},
{"courseName": "CS", "courseNum": 491, "CRN": 0, "classTime": " 9:0 AM (M)", "finalStart": new Date(2017,11,14,13,0,0,0), "finalEnd": new Date(2017,11,14,15,0,0,0), "finalLocation": "", "finalRoom": ""},
{"courseName": "CS", "courseNum": 491, "CRN": 0, "classTime": " 2:0 PM (R)", "finalStart": new Date(2017,11,13,15,30,0,0), "finalEnd": new Date(2017,11,13,17,30,0,0), "finalLocation": "", "finalRoom": ""},
{"courseName": "CS", "courseNum": 514, "CRN": 0, "classTime": " 10:0 AM (MWF)", "finalStart": new Date(2017,11,15,10,30,0,0), "finalEnd": new Date(2017,11,15,12,30,0,0), "finalLocation": "2TBH", "finalRoom": "180E"},
{"courseName": "CS", "courseNum": 521, "CRN": 0, "classTime": " 9:30 AM (TR)", "finalStart": new Date(2017,11,13,10,30,0,0), "finalEnd": new Date(2017,11,13,12,30,0,0), "finalLocation": "2LH", "finalRoom": "312"},
{"courseName": "CS", "courseNum": 527, "CRN": 0, "classTime": " 4:0 PM (W)", "finalStart": new Date(2017,11,12,15,30,0,0), "finalEnd": new Date(2017,11,12,17,30,0,0), "finalLocation": "2ERF", "finalRoom": "2068"},
{"courseName": "CS", "courseNum": 553, "CRN": 0, "classTime": " 2:0 PM (TR)", "finalStart": new Date(2017,11,11,15,30,0,0), "finalEnd": new Date(2017,11,11,17,30,0,0), "finalLocation": "2BH", "finalRoom": "208"},
{"courseName": "CS", "courseNum": 559, "CRN": 0, "classTime": " 2:0 PM (MWF)", "finalStart": new Date(2017,11,13,13,0,0,0), "finalEnd": new Date(2017,11,13,15,0,0,0), "finalLocation": "2BH", "finalRoom": "305"},
{"courseName": "CS", "courseNum": 565, "CRN": 0, "classTime": " 6:0 PM (TR)", "finalStart": new Date(2017,11,12,18,0,0,0), "finalEnd": new Date(2017,11,12,20,0,0,0), "finalLocation": "2BH", "finalRoom": "B6"},
{"courseName": "CS", "courseNum": 566, "CRN": 0, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2017,11,15,13,0,0,0), "finalEnd": new Date(2017,11,15,15,0,0,0), "finalLocation": "2LCA", "finalRoom": "A07"},
{"courseName": "CS", "courseNum": 583, "CRN": 0, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2017,11,15,13,0,0,0), "finalEnd": new Date(2017,11,15,15,0,0,0), "finalLocation": "2LCA", "finalRoom": "A02"},
{"courseName": "CS", "courseNum": 584, "CRN": 0, "classTime": " 9:30 AM (TR)", "finalStart": new Date(2017,11,13,10,30,0,0), "finalEnd": new Date(2017,11,13,12,30,0,0), "finalLocation": "2SES", "finalRoom": "170"},
{"courseName": "CS", "courseNum": 587, "CRN": 0, "classTime": " 6:0 PM (MW)", "finalStart": new Date(2017,11,11,18,0,0,0), "finalEnd": new Date(2017,11,11,20,0,0,0), "finalLocation": "2LCA", "finalRoom": "A07"},
{"courseName": "CS", "courseNum": 594, "CRN": 0, "classTime": " 3:0 PM (MW)", "finalStart": new Date(2017,11,11,8,0,0,0), "finalEnd": new Date(2017,11,11,10,0,0,0), "finalLocation": "2TBH", "finalRoom": "180E"}
	
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
			if ($scope.model[i].id == id) {
				if (curData.finalEnd > new Date()) { // We are taking the exam.
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
