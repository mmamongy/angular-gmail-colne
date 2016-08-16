angular.module('myApp').controller('InboxCtrl', 
		function InboxCtrl($scope , InboxFactory){
		'use strict';
		$scope.meta = {
			title: "My Inbox"
		};
		InboxFactory.getMessages()
		.success(function(jsonData,statusCode){
			console.log('The request was successful!', statusCode);
			console.dir(jsonData);
			$scope.data = {
				emails: jsonData
			};
		});
	});