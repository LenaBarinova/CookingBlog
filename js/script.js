(function (app) {

  'use strict';

  var RecipesController = function ($scope, $http) {

    var onRecipesComplete = function (response) {
      $scope.recipes = response.data;
    };

    var onError = function (reason) {
      $scope.error = "Could not fetch data";
    };

    $http.get("./data/recipes/all_recipes_preview.json")
      .then(onRecipesComplete, onError);

    //$resour
  };

  app.controller("RecipesController", ["$scope", "$http", RecipesController]);

}(angular.module("cookingBlog")));