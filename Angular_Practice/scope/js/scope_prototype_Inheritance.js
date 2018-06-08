(function(){
	angular.module("main_module",[])
	.controller("msg_controller",function($scope,$rootScope){
		$scope.msg = "Employ List";
		$rootScope.department = "UI";
	})
	.controller("list_controller",function($scope){
		$scope.names = ["jack", "pam", "Adam"];
	})
	
})();