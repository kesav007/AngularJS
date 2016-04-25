'use strict';
eventsApp.controller('EventController', function($scope, $anchorScroll, EventService) {
	$scope.snippet ="<h2><font color='red'>hi there</font></h2>";
	$scope.boolValue = false;
	$scope.mystyle = {color:'red'};
	
    $scope.disableBtn = false;
    $scope.upVoteSession = function(session) {
        session.upVoteCount++
    };
    $scope.downVoteSession = function(session) {
        session.upVoteCount--
    };

    $scope.event = EventService.getPromisedResourceEventData();
    console.log($scope.event);

    $scope.event.then(
        function(event){
            console.log(event);
        },
        function(status){
            console.log(status);
        }
    );

    $scope.scrollToSession = function(){
        $anchorScroll();
    }

/*    
    EventService.getHttpEventData(function(cbf){
        $scope.event = cbf;    
    }); 
*/
    // $scope.event = EventService.getPromisedEventData();
    // $scope.event = EventService.getResourceEventData();

/*
    $scope.event.then(
        function(event){
            localEvent = event;
            console.log(event);
        },
        function(status){
            console.log(status);
        }
    );
    console.log(localEvent);    
*/
    // $scope.event = EventService.eventData;

});