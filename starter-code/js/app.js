/* setup your angular app here */
var app = angular.module("fruitAndVeggies", []);
app.controller("homeCtrl", ["$scope", function($scope) {
	$scope.fruit = fruit;
	$scope.vegetables = vegetables;
	allArray = fruit.concat(vegetables);
	$scope.showAnswer = false;
	$scope.numCorrect = 0;

	$scope.fruitCol = [];
	$scope.mixedCol = shuffle(allArray).slice(0,20);
	$scope.veggyCol = [];

  function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

  $scope.moveLeft = function(item){
  	$scope.fruitCol.push(item);
  	$scope.mixedCol.splice($scope.mixedCol.indexOf(item),1);
  	checkEmptyMixedCol();
  };

  $scope.moveRight = function(item){
  	$scope.veggyCol.push(item);
  	$scope.mixedCol.splice($scope.mixedCol.indexOf(item),1);
  	checkEmptyMixedCol();
  };

  $scope.moveFromLeft = function(item){
  	$scope.mixedCol.push(item);
  	$scope.fruitCol.splice($scope.fruitCol.indexOf(item),1);
  	checkEmptyMixedCol();
  };

  $scope.moveFromRight = function(item){
  	$scope.mixedCol.push(item);
  	$scope.veggyCol.splice($scope.veggyCol.indexOf(item),1);
  	checkEmptyMixedCol();
  };

  checkEmptyMixedCol = function(){
  	if($scope.mixedCol != 0){
  		$scope.showAnswer = false;
  		$scope.numCorrect = 0;
  		return;
  	}
  	console.log('check answers')
  	$scope.showAnswer = true;

  	$scope.fruitCol.forEach(function(item){
  		if($scope.fruit.indexOf(item) != -1){
  			$scope.numCorrect += 1;
  		}
  	});

  	$scope.veggyCol.forEach(function(item){
  		if($scope.vegetables.indexOf(item) != -1){
  			$scope.numCorrect += 1;
  		}
  	});
  };

  checkFruits = function(){
  	// Do nothing
  };

  checkVeggies = function(){
  	// Do nothing
  }

}]);


//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);