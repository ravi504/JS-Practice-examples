(function(){
	angular.module("main_module",[])
	.controller("main_controller",function($scope){
		$scope.message = "click and Drag me ....";
	})
	.directive("dragMe",function($document){
		return{
			link : function(scope,elem,attr){
				var startX = 0, startY = 0, x = 0, y = 0;
				
				elem.css({
					position : 'relative',
					border : '1px solid grey',
					background : 'lightgrey',
					cursor : 'pointer',
					padding : '10px'	
				});
				elem.on('mousedown',function(event){
					event.preventDefault();
					startX = event.pageX - x;
					startY = event.pageY - y;
					$document.on('mousemove',mousemove);
					$document.on('mouseup',mouseup);
				});
				function mousemove(event){
					x = event.pageX - startX;
					y = event.pageY - startY;
					elem.css({
						top : y + 'px',
						left : x + 'px'
					});
				}
				function mouseup(){
					$document.off('mousemove',mousemove);
					$document.off('mouseup',mouseup);
				};
			}
		}
	})
})();