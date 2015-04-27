(function (app) {

  'use strict';

  var RecipesController = function (recipesData, $scope) {

    var onRecipesComplete = function (resource) {
      $scope.recipes = resource;
    };

    var onError = function (reason) {
      $scope.error = "Could not fetch data";
    };

    recipesData.getRecipes().$promise.then(onRecipesComplete, onError);

  };

  app.controller("RecipesController", ["recipesData", "$scope", "$http", RecipesController]);

}(angular.module("cookingBlog")));