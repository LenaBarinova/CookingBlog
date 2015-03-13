'use strict';

angular.module('LenasRecipes', [
  'LenasRecipes.controllers',
  'LenasRecipes.services',
  'ngRoute'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/recipes", {templateUrl: "partial_views/recipes.html", controller: "RecipesController"}).
	when("/recipes/:id", {templateUrl: "partial_views/recipe.html", controller: "RecipeController"}).
    when("/recipesbycategory/:category", {templateUrl: "partial_views/recipes.html", controller: "RecipesByCategoryController"}).
	otherwise({redirectTo: '/recipes'});
}]);