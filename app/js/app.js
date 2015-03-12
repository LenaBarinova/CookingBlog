'use strict';

angular.module('LenasRecipes', [
  'LenasRecipes.controllers',
  'LenasRecipes.services',
  'ngRoute'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/recipes", {templateUrl: "partial_views/recipes.html", controller: "recipesController"}).
	when("/recipes/:id", {templateUrl: "partial_views/recipe.html", controller: "recipeController"}).
	otherwise({redirectTo: '/recipes'});
}]);