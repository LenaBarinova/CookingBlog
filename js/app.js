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


angular.module('yourApp', [])
  .run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
     $rootScope
        .$on('$stateChangeSuccess',
            function(event){
 
                if (!$window.ga)
                    return;
 
                $window.ga('send', 'pageview', { page: $location.path() });
        });
}]);

}());