(function(){
	angular.module("main_module",[])
	.controller("main_controller",function($scope){
		$scope.format = "MM/dd/yyyy hh:mm:ss a";
	})
	.directive("currentTime",function($interval,dateFilter){
			function link(scope,elem,attr){
				var format, interval_id;
				
				function show_time(){
					elem.text(dateFilter(new Date(), format));
				}
				scope.$watch(attr.currentTime, function(value){
					format = value;
					show_time();
				});
				//$destroy is use for clean up function when directive is removed.
				//we can also use elem.on('$destroy',function(){});
				scope.$on('$destroy',function(){
					$interval.cancle(interval_id);
				})
				
				interval_id = $interval(function(){
					show_time();
				},1000)
			}
		return{
			link : link
		}
	});
})();