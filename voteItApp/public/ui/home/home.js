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
		
		$scope.up = function(details,newses){				
				details.voteCount ++;	
				var arrObj = [];
				var i = 0 ;
				for(var key in newses){
					arrObj[i]  = newses[key];
					i++;				
				}
			console.log(arrObj);
			for(var i = 2; i<arrObj.length; i++){
				for(var j = 2; j<arrObj.length - 1; j++){
					if(arrObj[j].voteCount < arrObj[j+1].voteCount){
						var t = arrObj[j];
						arrObj[j] = arrObj[j+1];
						arrObj[j+1] = t;
					}
				}
			}
			i = 0 ;
			console.log(arrObj);
			for(var key in newses){
				newses[key]  = arrObj[i];
				i++;				
			}
			console.log(newses);
		};
		$scope.down = function(details,newses){

			details.voteCount --;
			var arrObj = [];
				var i = 0 ;
				for(var key in newses){					
				arrObj[i]  = newses[key];
				i++;						
			}
			console.log(arrObj);
			for(var i = 2; i<arrObj.length; i++){
				for(var j = 2; j<arrObj.length - 1; j++){
					if(arrObj[j].voteCount < arrObj[j+1].voteCount){
						var t = arrObj[j];
						arrObj[j] = arrObj[j+1];
						arrObj[j+1] = t;
					}
				}
			}
			i = 0 ;
			console.log(arrObj);
			for(var key in newses){
				newses[key]  = arrObj[i];
				i++;				
			}
			console.log(newses);

			
		};


});