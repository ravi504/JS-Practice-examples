(function(){
	angular.module("main_module",[])
	.directive("myTabs",function(){
		return{
			restrict : "E",
			transclude : true,
			scope : {},
			controller : function($scope){
				var panes = $scope.panes = [];
				
				$scope.select = function(pane){
					angular.forEach(panes, function(pane){
						pane.selected = false;
					});
						pane.selected = true;
				};
				this.addPane = function(pane){
					if(panes.length === 0){
						$scope.select(pane);
					}
						panes.push(pane);
				}
			},
			templateUrl : 'my-tabs.html'
		};
	})
	.directive("myPane",function(){
		return{
			restrict : "E",
			required : '^^myTabs',
			transclude : true,
			scope : {
				title : '@'
			},
			link : function(scope,elem,attr,ctrl){
				ctrl.addPane(scope);
			},
			templateUrl : 'my-panes.html'
		};
	});
})();