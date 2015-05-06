(function (app) {

  'use strict';

  var RecipeController = function (recipesData, $scope, $routeParams, $sce) {

    var id = $routeParams.id;

    var onRecipeComplete = function (resource) {
      $scope.recipe = resource;
      $scope.ingredients = $scope.recipe.ingredients;
      $scope.instructions = $scope.recipe.instructions;
      $scope.pageUrl = "http://127.0.0.1:54138/index.html#/recipes/" + $scope.recipe.slug;
      console.log($scope.pageUrl);
    };

    var onError = function (reason) {
      $scope.error = "Could not fetch data";
    };

    recipesData.getRecipe(id).$promise.then(onRecipeComplete, onError);

    $scope.displaySafeHtml = function(html){
      return $sce.trustAsHtml(html);
    };
  };

  app.controller("RecipeController", ["recipesData", "$scope", "$routeParams", "$sce", RecipeController]);

}(angular.module("cookingBlog")));