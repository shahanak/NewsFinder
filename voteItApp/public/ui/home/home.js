angular.module('voteIt').controller('HomeCtrl',function($scope,$firebase){

	var ref = new window.Firebase("https://blinding-heat-4724.firebaseio.com/news");  
	var fb = $firebase(ref);	
	$scope.show = function(){
		$scope.showDiv = true;
	};
	$scope.save = function(news){
		var title =news.title;
		var desc = news.description;
		var voteCount = 0;
		fb.$push({

			title:title,
			description:desc,
			voteCount:voteCount

		});	
		$scope.news={};
		$scope.showDiv = false;
			
	};
	$scope.cancel = function(){
		$scope.showDiv = false;
	};
	var syncObject = fb.$asObject();
	syncObject.$bindTo($scope, 'newses');	
		
		$scope.up = function(details){
			
			details.voteCount ++;	
		}
		$scope.down = function(details){
			
			details.voteCount --;

			
		}


});