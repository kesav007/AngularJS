eventsApp.factory('EventService', function($http, $log, $q, $resource){
	var factory = {};

	var resource = $resource('/data/event/:id', {id: '@id'});

	factory.getPromisedResourceEventData = function(){
		var deffered = $q.defer();
		resource.get({id:4},
			function(event) {
				deffered.resolve(event);
			},
			function(status) {
				deffered.reject(status);
			}
		);
		return deffered.promise;
	},

	factory.save = function(event){
		var deffered = $q.defer();
		event.id = 6;
		resource.save(event, 
			function(response){
				deffered.resolve(response);
			},
			function(){
				deffered.reject(response);
			}
		);
	}

/*	factory.getResourceEventData = function(){
		return $resource('/data/event/:id', {id: '@id'}).get({id:5});
	}
*/
	/*factory.getPromisedEventData = function() {
		var deffered = $q.defer();
		$http({method: 'GET', url : '/data/event/5'})
		.success(function(data, status, headers, config){
			deffered.resolve(data);	
		})
		.error(function(data, status, headers, config){
			deffered.reject(status);
		});
		return deffered.promise;
	}
	*/
/*
	factory.getHttpEventData = function(callBackFunction){
		$http({method: 'GET', url : '/data/event/4'})
		.success(function(data, status, headers, config){
			callBackFunction(data);
		})
		.error(function(data, status, headers, config){
			$log.warn(status);
		});
	}
*/

	return factory;
});