(function(){
	angular.module("main_module",['ngAnimate'])
	.controller("main_controller",function($scope){
		$scope.names = [1,2,'pam',3,4,'jack']
	});
})();