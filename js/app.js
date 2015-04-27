(function () {

  'use strict';

  var app = angular.module("cookingBlog", ["ngRoute", "ngResource"]);

  app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when("/recipes", {
        templateUrl: "partials/recipes.html",
        controller: "RecipesController"
      })
      .when("/recipes/:id", {
        templateUrl: "partials/recipe.html",
        controller: "RecipeController"
      })
      .when("/about", {
        templateUrl: "partials/about.html"
      })
      .otherwise({
        redirectTo: "/recipes"
      });
    $locationProvider.html5Mode(true);
  });


}());