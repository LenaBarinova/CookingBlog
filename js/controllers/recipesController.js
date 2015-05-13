(function (app) {

  'use strict';

  var RecipesController = function (recipesData, $scope, $routeParams) {

    var onRecipesComplete = function (resource) {
      $scope.recipes = resource;
    };

    var onError = function (reason) {
      $scope.error = "Could not fetch data";
    };


    recipesData.getRecipes().then(onRecipesComplete, onError);

    if ($routeParams.category !== "") {
      $scope.byCategory = ($routeParams.category == "all") ? "" : $routeParams.category;
    }


  };

  app.controller("RecipesController", ["recipesData", "$scope", "$routeParams", RecipesController]);

}(angular.module("cookingBlog")));