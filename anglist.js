var app = angular.module('finalscountdown', ['timer']);

app.controller('listingCtrl', function ($scope, $interval) {

	$scope.mydata = [
//{"courseName": "CS", "courseNum": 107, "CRN": "10634", "classTime": "4:0PM MWF", "finalStart": new Date(2015,11,7,3,30,0,0), "finalEnd": new Date(2015,11,7,5,30,0,0), "finalLocation": "2LCC", "finalRoom": "C3"},
{"courseName": "CS", "courseNum": 100, "CRN": 17397, "classTime": " 3:00 PM (MWF)", "finalStart": new Date(2018,4,7,8,0,0,0), "finalEnd": new Date(2018,4,7,10,0,0,0), "finalLocation": "2LCF", "finalRoom": "F004"},
{"courseName": "CS", "courseNum": 107, "CRN": 17412, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2018,4,11,13,0,0,0), "finalEnd": new Date(2018,4,11,15,0,0,0), "finalLocation": "2LCF", "finalRoom": "F004"},
{"courseName": "CS", "courseNum": 109, "CRN": 19466, "classTime": " 10:00 AM (MW)", "finalStart": new Date(2018,4,11,10,30,0,0), "finalEnd": new Date(2018,4,11,12,30,0,0), "finalLocation": "2SES", "finalRoom": "250"},
{"courseName": "CS", "courseNum": 111, "CRN": 34013, "classTime": " 9:30 AM (TR)", "finalStart": new Date(2018,4,9,10,30,0,0), "finalEnd": new Date(2018,4,9,12,30,0,0), "finalLocation": "2SES", "finalRoom": "250"},
{"courseName": "CS", "courseNum": 111, "CRN": 40575, "classTime": " 9:30 AM (TR)", "finalStart": new Date(2018,4,9,10,30,0,0), "finalEnd": new Date(2018,4,9,12,30,0,0), "finalLocation": "2TBH", "finalRoom": "180G"},
{"courseName": "CS", "courseNum": 141, "CRN": 10005, "classTime": " ", "finalStart": new Date(2018,4,9,18,0,0,0), "finalEnd": new Date(2018,4,9,20,0,0,0), "finalLocation": "2LCE", "finalRoom": "E101, 2LCB B101"},
{"courseName": "CS", "courseNum": 151, "CRN": 10004, "classTime": " ", "finalStart": new Date(2018,4,11,13,0,0,0), "finalEnd": new Date(2018,4,11,15,0,0,0), "finalLocation": "2BSB", "finalRoom": "250, 2LCE E101, 2SES 238"},
{"courseName": "CS", "courseNum": 201, "CRN": 17418, "classTime": " 12:00 PM (F)", "finalStart": new Date(2018,4,11,8,0,0,0), "finalEnd": new Date(2018,4,11,10,0,0,0), "finalLocation": "2BH", "finalRoom": "B6"},
{"courseName": "CS", "courseNum": 211, "CRN": 34456, "classTime": " 10:00 AM (F)", "finalStart": new Date(2018,4,11,10,30,0,0), "finalEnd": new Date(2018,4,11,12,30,0,0), "finalLocation": "2LCF", "finalRoom": "F001, F004"},
{"courseName": "CS", "courseNum": 251, "CRN": 10003, "classTime": " ", "finalStart": new Date(2018,4,8,18,0,0,0), "finalEnd": new Date(2018,4,8,20,0,0,0), "finalLocation": "2LCA", "finalRoom": "A001, 2LCE E101, 2LCD D002, A007"},
{"courseName": "CS", "courseNum": 261, "CRN": 10002, "classTime": " ", "finalStart": new Date(2018,4,9,18,0,0,0), "finalEnd": new Date(2018,4,9,20,0,0,0), "finalLocation": "2LCA", "finalRoom": "A001"},
{"courseName": "CS", "courseNum": 301, "CRN": 17422, "classTime": " 4:00 PM (MW)", "finalStart": new Date(2018,4,8,15,30,0,0), "finalEnd": new Date(2018,4,8,17,30,0,0), "finalLocation": "2LCE", "finalRoom": "E101"},
{"courseName": "CS", "courseNum": 301, "CRN": 40574, "classTime": " 12:00 PM (MWF)", "finalStart": new Date(2018,4,8,8,0,0,0), "finalEnd": new Date(2018,4,8,10,0,0,0), "finalLocation": "2LCF", "finalRoom": "F006"},
{"courseName": "CS", "courseNum": 341, "CRN": 34723, "classTime": " 4:00 PM (MWF)", "finalStart": new Date(2018,4,8,15,30,0,0), "finalEnd": new Date(2018,4,8,17,30,0,0), "finalLocation": "2LCB", "finalRoom": "B101, 2LCC C003"},
{"courseName": "CS", "courseNum": 342, "CRN": 35976, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2018,4,11,13,0,0,0), "finalEnd": new Date(2018,4,11,15,0,0,0), "finalLocation": "2LCB", "finalRoom": "B101 "},
{"courseName": "CS", "courseNum": 361, "CRN": 36306, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2018,4,9,15,30,0,0), "finalEnd": new Date(2018,4,9,17,30,0,0), "finalLocation": "2LCA", "finalRoom": "A001"},
{"courseName": "CS", "courseNum": 362, "CRN": 36309, "classTime": " 11:00 AM (TR)", "finalStart": new Date(2018,4,7,10,30,0,0), "finalEnd": new Date(2018,4,7,12,30,0,0), "finalLocation": "2LCE", "finalRoom": "E101"},
{"courseName": "CS", "courseNum": 377, "CRN": 36312, "classTime": " 9:00 AM (MW)", "finalStart": new Date(2018,4,8,10,30,0,0), "finalEnd": new Date(2018,4,8,12,30,0,0), "finalLocation": "2TBH", "finalRoom": "180B"},
{"courseName": "CS", "courseNum": 377, "CRN": 38111, "classTime": " 12:00 PM (MW)", "finalStart": new Date(2018,4,8,8,0,0,0), "finalEnd": new Date(2018,4,8,10,0,0,0), "finalLocation": "2TBH", "finalRoom": "180D"},
{"courseName": "CS", "courseNum": 377, "CRN": 40663, "classTime": " 2:00 PM (MW)", "finalStart": new Date(2018,4,9,13,0,0,0), "finalEnd": new Date(2018,4,9,15,0,0,0), "finalLocation": "2TBH", "finalRoom": "180D"},
{"courseName": "CS", "courseNum": 377, "CRN": 39374, "classTime": " 1:00 PM (MW)", "finalStart": new Date(2018,4,7,13,0,0,0), "finalEnd": new Date(2018,4,7,15,0,0,0), "finalLocation": "2TBH", "finalRoom": "180D"},
{"courseName": "CS", "courseNum": 401, "CRN": 17454, "classTime": " 11:00 AM (MWF)", "finalStart": new Date(2018,4,10,10,30,0,0), "finalEnd": new Date(2018,4,10,12,30,0,0), "finalLocation": "2BH", "finalRoom": "317"},
{"courseName": "CS", "courseNum": 401, "CRN": 17455, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2018,4,11,8,0,0,0), "finalEnd": new Date(2018,4,11,10,0,0,0), "finalLocation": "2LCC", "finalRoom": "C003"},
{"courseName": "CS", "courseNum": 401, "CRN": 20665, "classTime": " 11:00 AM (MWF)", "finalStart": new Date(2018,4,10,10,30,0,0), "finalEnd": new Date(2018,4,10,12,30,0,0), "finalLocation": "2BH", "finalRoom": "317"},
{"courseName": "CS", "courseNum": 401, "CRN": 20667, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2018,4,11,8,0,0,0), "finalEnd": new Date(2018,4,11,10,0,0,0), "finalLocation": "2LCC", "finalRoom": "C003"},
{"courseName": "CS", "courseNum": 401, "CRN": 41266, "classTime": " 12:00 PM (MWF)", "finalStart": new Date(2018,4,8,8,0,0,0), "finalEnd": new Date(2018,4,8,10,0,0,0), "finalLocation": "2BH", "finalRoom": "208"},
{"courseName": "CS", "courseNum": 401, "CRN": 41267, "classTime": " 12:00 PM (MWF)", "finalStart": new Date(2018,4,8,8,0,0,0), "finalEnd": new Date(2018,4,8,10,0,0,0), "finalLocation": "2BH", "finalRoom": "208"},
{"courseName": "CS", "courseNum": 411, "CRN": 38550, "classTime": " 4:00 PM (MW)", "finalStart": new Date(2018,4,8,15,30,0,0), "finalEnd": new Date(2018,4,8,17,30,0,0), "finalLocation": "2LCF", "finalRoom": "F006"},
{"courseName": "CS", "courseNum": 411, "CRN": 38549, "classTime": " 4:00 PM (MW)", "finalStart": new Date(2018,4,8,15,30,0,0), "finalEnd": new Date(2018,4,8,17,30,0,0), "finalLocation": "2LCF", "finalRoom": "F006"},
{"courseName": "CS", "courseNum": 412, "CRN": 38114, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2018,4,9,15,30,0,0), "finalEnd": new Date(2018,4,9,17,30,0,0), "finalLocation": "2LCF", "finalRoom": "F004"},
{"courseName": "CS", "courseNum": 412, "CRN": 38115, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2018,4,9,15,30,0,0), "finalEnd": new Date(2018,4,9,17,30,0,0), "finalLocation": "2LCF", "finalRoom": "F004"},
{"courseName": "CS", "courseNum": 421, "CRN": 28653, "classTime": " 9:30 AM (TR)", "finalStart": new Date(2018,4,9,10,30,0,0), "finalEnd": new Date(2018,4,9,12,30,0,0), "finalLocation": "2BH", "finalRoom": "208, 305"},
{"courseName": "CS", "courseNum": 421, "CRN": 28654, "classTime": " 9:30 AM (TR)", "finalStart": new Date(2018,4,9,10,30,0,0), "finalEnd": new Date(2018,4,9,12,30,0,0), "finalLocation": "2BH", "finalRoom": "208, 305"},
{"courseName": "CS", "courseNum": 422, "CRN": 20669, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2018,4,9,15,30,0,0), "finalEnd": new Date(2018,4,9,17,30,0,0), "finalLocation": "2SES", "finalRoom": "230"},
{"courseName": "CS", "courseNum": 422, "CRN": 19650, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2018,4,9,15,30,0,0), "finalEnd": new Date(2018,4,9,17,30,0,0), "finalLocation": "2SES", "finalRoom": "230"},
{"courseName": "CS", "courseNum": 440, "CRN": 0, "classTime": " ", "finalStart": new Date(2018,4,9,18,0,0,0), "finalEnd": new Date(2018,4,9,20,0,0,0), "finalLocation": "2LCD", "finalRoom": "D005"},
{"courseName": "CS", "courseNum": 442, "CRN": 33785, "classTime": " 10:00 AM (MWF)", "finalStart": new Date(2018,4,11,10,30,0,0), "finalEnd": new Date(2018,4,11,12,30,0,0), "finalLocation": "2LCD", "finalRoom": "D001"},
{"courseName": "CS", "courseNum": 442, "CRN": 33786, "classTime": " 10:00 AM (MWF)", "finalStart": new Date(2018,4,11,10,30,0,0), "finalEnd": new Date(2018,4,11,12,30,0,0), "finalLocation": "2LCD", "finalRoom": "D001"},
{"courseName": "CS", "courseNum": 450, "CRN": 17432, "classTime": " 5:00 PM (TR)", "finalStart": new Date(2018,4,10,15,30,0,0), "finalEnd": new Date(2018,4,10,17,30,0,0), "finalLocation": "LCF", "finalRoom": "F003"},
{"courseName": "CS", "courseNum": 450, "CRN": 19163, "classTime": " 5:00 PM (TR)", "finalStart": new Date(2018,4,10,15,30,0,0), "finalEnd": new Date(2018,4,10,17,30,0,0), "finalLocation": "2LCF", "finalRoom": "F003"},
{"courseName": "CS", "courseNum": 466, "CRN": 26694, "classTime": " 9:30 AM (TR)", "finalStart": new Date(2018,4,9,10,30,0,0), "finalEnd": new Date(2018,4,9,12,30,0,0), "finalLocation": "2LCE", "finalRoom": "E101"},
{"courseName": "CS", "courseNum": 466, "CRN": 26695, "classTime": " 9:30 AM (TR)", "finalStart": new Date(2018,4,9,10,30,0,0), "finalEnd": new Date(2018,4,9,12,30,0,0), "finalLocation": "2LCE", "finalRoom": "E101"},
{"courseName": "CS", "courseNum": 474, "CRN": 38616, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2018,4,9,15,30,0,0), "finalEnd": new Date(2018,4,9,17,30,0,0), "finalLocation": "2LCC", "finalRoom": "C001"},
{"courseName": "CS", "courseNum": 474, "CRN": 38617, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2018,4,9,15,30,0,0), "finalEnd": new Date(2018,4,9,17,30,0,0), "finalLocation": "2LCC", "finalRoom": "C001, 2LCE E101"},
{"courseName": "CS", "courseNum": 478, "CRN": 37633, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2018,4,11,13,0,0,0), "finalEnd": new Date(2018,4,11,15,0,0,0), "finalLocation": "2LCC", "finalRoom": "C003"},
{"courseName": "CS", "courseNum": 478, "CRN": 37634, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2018,4,11,13,0,0,0), "finalEnd": new Date(2018,4,11,15,0,0,0), "finalLocation": "2LCC", "finalRoom": "C003"},
{"courseName": "CS", "courseNum": 480, "CRN": 17438, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2018,4,11,13,0,0,0), "finalEnd": new Date(2018,4,11,15,0,0,0), "finalLocation": "2TBH", "finalRoom": "180G"},
{"courseName": "CS", "courseNum": 480, "CRN": 19171, "classTime": " 3:30 PM (TR)", "finalStart": new Date(2018,4,11,13,0,0,0), "finalEnd": new Date(2018,4,11,15,0,0,0), "finalLocation": "2TBH", "finalRoom": "180G"},
{"courseName": "CS", "courseNum": 485, "CRN": 41121, "classTime": " 6:30 PM (MW)", "finalStart": new Date(2018,4,7,18,0,0,0), "finalEnd": new Date(2018,4,7,20,0,0,0), "finalLocation": "2SES", "finalRoom": "238"},
{"courseName": "CS", "courseNum": 485, "CRN": 41112, "classTime": " 6:30 PM (MW)", "finalStart": new Date(2018,4,7,18,0,0,0), "finalEnd": new Date(2018,4,7,20,0,0,0), "finalLocation": "2SES", "finalRoom": "238"},
{"courseName": "CS", "courseNum": 489, "CRN": 38327, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2018,4,11,8,0,0,0), "finalEnd": new Date(2018,4,11,10,0,0,0), "finalLocation": "2ERF", "finalRoom": "3036 "},
{"courseName": "CS", "courseNum": 489, "CRN": 38328, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2018,4,11,8,0,0,0), "finalEnd": new Date(2018,4,11,10,0,0,0), "finalLocation": "2ERF", "finalRoom": "3036 "},
{"courseName": "CS", "courseNum": 491, "CRN": 41204, "classTime": " 2:00 PM (T)", "finalStart": new Date(2018,4,9,15,30,0,0), "finalEnd": new Date(2018,4,9,17,30,0,0), "finalLocation": "2SEL", "finalRoom": "4018"},
{"courseName": "CS", "courseNum": 501, "CRN": 33708, "classTime": " 9:00 AM (MWF)", "finalStart": new Date(2018,4,8,10,30,0,0), "finalEnd": new Date(2018,4,8,12,30,0,0), "finalLocation": "2SH", "finalRoom": "220"},
{"courseName": "CS", "courseNum": 511, "CRN": 17442, "classTime": " 11:00 AM (MWF)", "finalStart": new Date(2018,4,10,10,30,0,0), "finalEnd": new Date(2018,4,10,12,30,0,0), "finalLocation": "2LCA", "finalRoom": "A005"},
{"courseName": "CS", "courseNum": 514, "CRN": 38618, "classTime": " 10:00 AM (MWF)", "finalStart": new Date(2018,4,11,10,30,0,0), "finalEnd": new Date(2018,4,11,12,30,0,0), "finalLocation": "2LCA", "finalRoom": "A005"},
{"courseName": "CS", "courseNum": 540, "CRN": 37332, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2018,4,11,8,0,0,0), "finalEnd": new Date(2018,4,11,10,0,0,0), "finalLocation": "2BH", "finalRoom": "B10"},
{"courseName": "CS", "courseNum": 553, "CRN": 31242, "classTime": " 11:00 AM (MWF)", "finalStart": new Date(2018,4,10,10,30,0,0), "finalEnd": new Date(2018,4,10,12,30,0,0), "finalLocation": "2BH", "finalRoom": "B10"},
{"courseName": "CS", "courseNum": 566, "CRN": 33563, "classTime": " 6:30 PM (TR)", "finalStart": new Date(2018,4,8,18,30,0,0), "finalEnd": new Date(2018,4,8,21,30,0,0), "finalLocation": "2LH", "finalRoom": "103"},
{"courseName": "CS", "courseNum": 569, "CRN": 27021, "classTime": " 11:00 AM (TR)", "finalStart": new Date(2018,4,7,10,30,0,0), "finalEnd": new Date(2018,4,7,12,30,0,0), "finalLocation": "2BH", "finalRoom": "316"},
{"courseName": "CS", "courseNum": 581, "CRN": 38655, "classTime": " 2:00 PM (MW)", "finalStart": new Date(2018,4,9,13,0,0,0), "finalEnd": new Date(2018,4,9,15,0,0,0), "finalLocation": "2BH", "finalRoom": "304"},
{"courseName": "CS", "courseNum": 583, "CRN": 10001, "classTime": " ", "finalStart": new Date(2018,4,9,18,0,0,0), "finalEnd": new Date(2018,4,9,20,0,0,0), "finalLocation": "2LCF", "finalRoom": "F001"},
{"courseName": "CS", "courseNum": 588, "CRN": 38552, "classTime": " 3:30 PM (MW)", "finalStart": new Date(2018,4,7,8,0,0,0), "finalEnd": new Date(2018,4,7,10,0,0,0), "finalLocation": "2TBH", "finalRoom": "180A"},
{"courseName": "CS", "courseNum": 590, "CRN": 34836, "classTime": " 12:30 PM (TR)", "finalStart": new Date(2018,4,11,8,0,0,0), "finalEnd": new Date(2018,4,11,10,0,0,0), "finalLocation": "2TH", "finalRoom": "204"},
{"courseName": "CS", "courseNum": 594, "CRN": 33649, "classTime": " 2:00 PM (TR)", "finalStart": new Date(2018,4,9,15,30,0,0), "finalEnd": new Date(2018,4,9,17,30,0,0), "finalLocation": "2TH", "finalRoom": "215"},
{"courseName": "CS", "courseNum": 594, "CRN": 34724, "classTime": " 4:00 PM (MW)", "finalStart": new Date(2018,4,8,15,30,0,0), "finalEnd": new Date(2018,4,8,17,30,0,0), "finalLocation": "2TBH", "finalRoom": "180C"},
{"courseName": "CS", "courseNum": 594, "CRN": 38551, "classTime": " 5:00 PM (TR)", "finalStart": new Date(2018,4,10,15,30,0,0), "finalEnd": new Date(2018,4,10,17,30,0,0), "finalLocation": "2LH", "finalRoom": "210"},
{"courseName": "CS", "courseNum": 594, "CRN": 41289, "classTime": " 6:30 PM (R)", "finalStart": new Date(2018,4,10,18,30,0,0), "finalEnd": new Date(2018,4,10,20,30,0,0), "finalLocation": "2BH", "finalRoom": "B10"}
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

function refreshAt(hours, minutes, seconds) {
    var now = new Date();
    var then = new Date();

    if(now.getHours() > hours ||
       (now.getHours() == hours && now.getMinutes() > minutes) ||
        now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
        then.setDate(now.getDate() + 1);
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(seconds);

    var timeout = (then.getTime() - now.getTime());
    setTimeout(function() { window.location.reload(true); }, timeout);
}

refreshAt(6, 0, 0);
refreshAt(21, 0, 0);
refreshAt(23,59,59);
