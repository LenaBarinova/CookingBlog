(function (app) {

  'use strict';

  var CategoriesController = function ($scope, categoriesData) {

    $scope.categories = categoriesData;

  };

  app.controller("CategoriesController", ["$scope", "categoriesData", CategoriesController]);

}(angular.module("cookingBlog")));