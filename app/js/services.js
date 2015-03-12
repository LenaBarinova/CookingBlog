angular.module('LenasRecipes.services', []).
  factory('recipesAPIservice', function($http) {

    var recipesAPI = {};

    recipesAPI.getRecipes = function() {
    return $http({
        method: 'GET', 
        url: 'data/recipes.json'
      });
    }
      
    recipesAPI.getRecipeDetails = function(id) {
    return $http({
        method: 'GET', 
        url: 'data/recipes.json'
      });
    } 
      
    return recipesAPI;
  });