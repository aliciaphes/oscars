
var oscarsModule = angular.module('Oscars', []);

oscarsModule.controller('OscarsController', ['$scope', function($scope){

	$scope.categories = [
					{id: "or", name: "Best actor", value: "Kevin Spacey"},
					{id: "ess", name: "Best actress", value: "Meryl Streep"},
					{id: "dir", name: "Best director", value: "Robert Zemeckis"},
					{id: "mov", name: "Best movie", value: "Birdman"},
					{id: "anim", name: "Best animation movie", value: "A bug's life"},
					{id: "sup-ess", name: "Best supporting actress", value: "Amy Adams"},
					{id: "sup-or", name: "Best supporting actor", value: "Edward Norton"},
					{id: "baward", name: "Baward", value: "2"}
					];

	
    $scope.bet = {};





	$scope.initialize = function(){
        $scope.section = "bet";//"results"
    }

    $scope.changeSection = function(value){
    	$scope.section = value;
    }    
    
}]);

