
var oscarsModule = angular.module('Oscars', []);

oscarsModule.controller('OscarsController', ['$scope', function($scope){
	
	$scope.initialize = function(){
        $scope.section = "bet";//"results"
    }

    $scope.changeSection = function(value){
    	$scope.section = value;
    }    
    
}]);

