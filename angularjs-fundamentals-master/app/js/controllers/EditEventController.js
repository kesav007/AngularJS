'use strict';
eventsApp.controller('EditEventController', function($scope, EventService){
	$scope.save = function(event, newEventForm){
		console.log(event);
		if(newEventForm.$valid){
			console.log(event);	
			EventService.save(event);
		}
	};
	$scope.cancel = function(){
		window.location('/EventDetails.html');
	};
});