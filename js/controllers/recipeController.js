(function (app) {

  'use strict';

  var RecipeController = function (recipesData, $scope, $routeParams) {

    var id = $routeParams.id;

    var onRecipeComplete = function (resource) {
      $scope.recipe = resource;
      $scope.ingredients = $scope.recipe.ingredients;
      $scope.instructions = $scope.recipe.instructions;
    };

    var onError = function (reason) {
      $scope.error = "Could not fetch data";
    };

    recipesData.getRecipe(id).$promise.then(onRecipeComplete, onError);

  };

  app.controller("RecipeController", ["recipesData", "$scope", "$routeParams", RecipeController]);

}(angular.module("cookingBlog")));