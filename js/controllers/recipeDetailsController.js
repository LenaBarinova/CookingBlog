(function () {

  'use strict';

  var app = angular.module("cookingBlog");

  var RecipeController = function (recipeDetails, $scope, $routeParams) {

    var id = $routeParams.id;

    var onRecipeComplete = function (resource) {
      $scope.recipe = resource;
      $scope.ingredients = $scope.recipe.Ingredients;
      $scope.instructions = $scope.recipe.Instructions;
    };

    var onError = function (reason) {
      $scope.error = "Could not fetch data";
    };

    recipeDetails.getRecipe(id).$promise.then(onRecipeComplete, onError);

  };

  app.controller("RecipeController", ["recipeDetails", "$scope", "$routeParams", RecipeController]);

}());