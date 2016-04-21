'use strict';
eventsApp.controller('EditEventController', function($scope){
	$scope.save = function(event){
		console.log(event);
	}
	$scope.cancel = function(){
		window.location('/EventDetails.html');
	}
});