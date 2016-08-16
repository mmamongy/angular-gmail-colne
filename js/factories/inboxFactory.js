angular.module('myApp').factory('InboxFactory',
	function InboxFactory($q, $http , $location){
		'use strict';
		var exports = {};
		exports.messages=[];
		exports.goToMessage = function(id){
			if (angular.isNumber(id)){
				//$location.path('inbox/email/'+id)
			}
		}
		exports.deleteMessage= function(id , index){
			this.messages.splice(index,1);
		}

		exports.getMessages = function(){ 
			var deffered = $q.defer();
			return $http.get('json/emails.json').success(function(data){
				exports.messages=data ;
				deffered.resolve(data);
			})
			.error(function(data) {
				/* Act on the event */
				deffered.reject(data);
			});
			return deffered.promise;
		}; 
		return exports;
});