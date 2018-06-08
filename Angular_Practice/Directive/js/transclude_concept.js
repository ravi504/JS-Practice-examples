(function(){
	angular.module("main_module",[])
	.controller("main_controller",function($scope){
		$scope.name = "jerry";
	})
	.directive("myDialog",function(){
		return {
      restrict: 'E',
      transclude: true, //transclude is print outside the scope value.
      scope: {},
      //template: '<div ng-transclude>{{name}}</div>',
      templateUrl: 'translude_data.html',
      link: function(scope) {
        scope.name = 'Jeff';
      }
			
		};
	});
})();