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

}());