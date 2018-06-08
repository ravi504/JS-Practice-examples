(function(){
	angular.module("main_module",[])
	.controller("main_controller", function($scope,$timeout){
		$scope.name = "jack";
		$scope.message = "";
		$scope.hideDialog_Msg = function(message){
			$scope.message = message;
			$scope.hideDialog = true;
			$timeout(function(){
				$scope.message = "";
				$scope.hideDialog = false;
			},2000);
		};
	})
	.directive("myDialog",function(){
		return{
			restrict : "E",
			transclude : true,
			scope:{
				'close' : '&onClose'
			},
			//template : "<div><a href='#' ng-click='close({message : 'heloo frnz !'})'>&times;</a><div ng-transclude></div></div>"
			templateUrl : "transclude_bind_concept.html"
		};
	});
})();