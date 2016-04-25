'use strict'
eventsApp.factory('EditProfileService', function EditProfileService() {
	var factory = {};
	factory.profileImg = function(email) {
		var img = '/img/profile.jpg';
		if(email === 'kesav.nallan@gmail.com'){
			img = '/img/kesav.jpg';
		}
		return img;
	}
	return factory;
});