var app = angular.module("alcoApp");

app.controller("MainController", function($scope){
	$scope.alcohols = [];
	$scope.total = 0;
	$scope.alcoName = {
		brand :""
	};
	var whiskeyDrink =    {strength:0.4, name : "Ўіскі"};
	var vodkaDrink =      {strength:0.4, name : "Гарэлка"};
	var cognacDrink=     {strength:0.4, name : "Каньяк"};
	var beerDrink =      {strength:0.05, name : "Піва"};
	var wineDrink =       {strength:0.12, name : "Віно"};
	var strongDrink =     {strength:0.18, name : "Партвейн"};
	
	function calc(weight, item, amount){		
		var spiritus = +(amount * item.strength * 0.79 * 0.9).toFixed(3);
		var water = weight * 0.7;		
		var promille = +(spiritus/water).toFixed(3);
		$scope.total += promille;
		alcoData={};
		alcoData.amount = +(amount/1000).toFixed(2);
		alcoData.alcoStrength = item.strength*100;
		alcoData.brand = item.name;
		alcoData.alcoPromille = promille;
		return alcoData;		
	};
	$scope.calculate = function(){
	
			 if($scope.alcoName.brand == "wine"){
			 	console.log(name);
				var drink = calc($scope.weight, wineDrink, $scope.amount)
				$scope.alcohols.push(drink);


			}
			else if($scope.alcoName.brand == "wineStrong"){
				var drink = calc($scope.weight, strongDrink, $scope.amount)
				$scope.alcohols.push(drink);
				console
				
			}
			else if($scope.alcoName.brand == "beer"){
				var drink = calc($scope.weight, beerDrink, $scope.amount)
				$scope.alcohols.push(drink);

				
			}
			else if($scope.alcoName.brand=="vodka"){
				var drink = calc($scope.weight, vodkaDrink, $scope.amount)
				$scope.alcohols.push(drink);

				
			}
			else if($scope.alcoName.brand == "cognac"){
				var drink = calc($scope.weight, cognacDrink, $scope.amount)
				$scope.alcohols.push(drink);
				
			}
			else if($scope.alcoName.brand=="whiskey"){
				var drink = calc($scope.weight, whiskeyDrink, $scope.amount)
				$scope.alcohols.push(drink);				
			}
			else{
				alert("Выберыце напой");
			}
			
	};
});