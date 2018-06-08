(function(){
	angular.module("main_module",['ngAnimate'])
	.controller("animate_controller",function($scope,$interval){
		$scope.number = 0;
		$interval(function(){
			$scope.number++;
		},3000);
		
		var colors = ['red','green','yellow'];
		$scope.colorClass = function(number){
			return colors[number % colors.length];
		};
	});
})();