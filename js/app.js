(function () {
  
  'use strict';
    
  var app = angular.module("cookingBlog", ["ngRoute"]);
    
  app.config(function ($routeProvider) {
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
      .otherwise({redirectTo: "/recipes"});
  });
    
}());