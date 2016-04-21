'use strict';
eventsApp.controller('EventController', function($scope) {
	$scope.snippet ="<h2><font color='red'>hi there</font></h2>";
	$scope.boolValue = false;
	$scope.mystyle = {color:'red'};
	$scope.disableBtn = false;
    $scope.event = {
            name: 'Angular Boot Camp By Manju',
            date: '1/1/2013',
            time: '11:30 am',
            location: {
                address: 'Google Headquaters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/AngularJS_logo.png',
            sessions: [{
                name: 'Directives Master Class Kesav',
                creatorName: 'Kesav',
                duration: 1,
                level: 'Advance',
                abstract: 'In this session you will learn In and outs of directives.',
                upVoteCount: 0
            }, {
                name: 'Scopes for fun and profit',
                creatorName: 'Nallan',
                duration: 2,
                level: 'Introductory',
                abstract: 'This session will take you to closer look at scopes.',
                upVoteCount: 0
            }, {
                name: 'Well Behaved Controllers',
                creatorName: 'Kesav Nallan',
                duration: 4,
                level: 'Intermediate',
                abstract: 'Controllers are the beginng of everything.',
                upVoteCount: 4
            }]
        };

        $scope.upVoteSession = function(session) {
            session.upVoteCount++
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--
        }
});