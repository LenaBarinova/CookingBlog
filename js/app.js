/// <reference path="../typings/angularjs/angular.d.ts"/>
(function () {

  'use strict';

  var app = angular.module("cookingBlog", ["ngRoute", "ngResource", "socialLinks"]);

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
      .when("/recipes?category", {
      templateUrl: "partials/recipes.html",
      controller: "RecipeController"
    })
      .when("/about", {
      templateUrl: "partials/about.html"
    })
      .otherwise({
      redirectTo: "/recipes"
    });
  });


  app.run(function ($rootScope, $location, $routeParams, $window) {
    $rootScope.$on('$routeChangeSuccess', function () {
      $window.ga('send', 'pageview', { page: $location.url() });
    });
  })
} ());