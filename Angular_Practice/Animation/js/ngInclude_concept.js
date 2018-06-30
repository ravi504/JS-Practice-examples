(function(){
	angular.module("main_module",['ngAnimate'])
	.controller("animate_controller",function($scope){
		$scope.templates = [
		{name : "temp1.html", url : "temp1.html"},
		{name : "temp2.html", url : "temp2.html"},
		];
		$scope.templat = $scope.templates[0];
	})
})();