(function(){
	angular.module("main_module",[])
	.controller("main_controller",function($scope){
		$scope.message = "How are you !";
		$scope.name = "jack";
		$scope.show_val = function(){
			$scope.msg_text = "Hello " + $scope.name + " " + $scope.message;
		}
	})
})();