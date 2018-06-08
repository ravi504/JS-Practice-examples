
	angular.module("main_module",[])
	.controller("main_controller",function($scope,notify){
		$scope.callNotify = function(msg){
			notify(msg);
		};
	})
	.factory("notify",function($window){
		var msgg = [];
		return function(msg){
			msgg.push(msg);
			if(msgg.length === 3){
				$window.alert(msgg.join('\n'));
				msgg = [];
			}
		};
	});
