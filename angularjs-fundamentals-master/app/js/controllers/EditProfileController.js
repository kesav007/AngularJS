'use strict';

eventsApp.controller('EditProfileController', function($scope, EditProfileService){
	$scope.getImageUrl = function(email){
		return EditProfileService.profileImg(email);
	}
});