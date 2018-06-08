
	angular.module("main_module",[])
	.controller("main_controller",function($scope){
		$scope.customer = {
			name : "jack",
			place : "UK"
		};
	})
	.directive("newDir", function(){
		return{
			restrict : 'E',
			templateUrl : 'customer-details.html'
		};
	});
