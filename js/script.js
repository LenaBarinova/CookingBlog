(function () {
  
  'use strict';

  var app = angular.module("cookingBlog");

  var RecipesController = function ($scope, $http) {
    
    var onRecipesComplete = function (response) {
      $scope.recipes = response.data;
    };

    var onError = function (reason) {
      $scope.error = "Could not fetch data";
    };

    $http.get("http://localhost:8080/api/recipes")
      .then(onRecipesComplete, onError);
    
  };
  
  app.controller("RecipesController", ["$scope", "$http", RecipesController]);

  
  var RecipeController = function ($scope, $http, $routeParams) {
    
    var id = $routeParams.id;
    
    var onRecipeComplete = function (response) {
      $scope.recipe = response.data;
      $scope.ingredients = $scope.recipe.Ingredients;
      $scope.instructions = $scope.recipe.Instructions;
    };

    var onError = function (reason) {
      $scope.error = "Could not fetch data";
    };

    $http.get("http://localhost:8080/api/recipes/" + id)
      .then(onRecipeComplete, onError);
    
  };
  
  app.controller("RecipeController", ["$scope", "$http", "$routeParams", RecipeController]);

}());