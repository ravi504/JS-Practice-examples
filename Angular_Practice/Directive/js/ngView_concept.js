(function(){
	angular.module("main_module",['ngRoute'])
	.config(function($routeProvider,$locationProvider){
		$routeProvider
		.when('book/:bookId',{
			templateUrl : 'book.html1',
			controller  : 'book_controller',
			controllerAs: 'book' 
		})
		.when('/book/:bookId/ch/:chapterId',{
			templateUrl : 'chapter.html',
			controller  : 'chapter_controller',
			controllerAs: 'chapter'
		});
		$locationProvider.html5Mode({
			enabled : true,
			requireBase : false
		});
		
	})
	.controller("main_controller",function($route,$routeParams,$location){
		this.$route = $route;
		this.$routeParams = $routeParams;
		this.$location = $location;
	})
	.controller("book_controller",function($routeParams){
		this.name = "BookController";
		this.params = $routeParams;
	})
	.controller("chapter_controller",function($routeParams){
		this.name = "chapterController";
		this.params = $routeParams;
	});
	
})();

