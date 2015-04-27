(function (app) {

  'use strict';

  var RecipesPreviewController = function (recipeDetails, $scope) {

    var onRecipesComplete = function (resource) {
      $scope.recipes = resource;
    };

    var onError = function (reason) {
      $scope.error = "Could not fetch data";
    };

    recipeDetails.getRecipes().$promise.then(onRecipesComplete, onError);

  };

  app.controller("RecipesPreviewController", ["recipeDetails", "$scope", "$http", RecipesPreviewController]);

}(angular.module("cookingBlog")));