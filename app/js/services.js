angular.module('LenasRecipes.services', []).
  factory('recipesAPIservice', function($http) {

    var recipesAPI = {};

    recipesAPI.getRecipes = function() {

      return $http({
        method: 'GET', 
        url: 'http://localhost:8080/api/recipes'
      });
    }

    recipesAPI.getRecipesByCategory = function(category) {

      return $http({
        method: 'GET', 
        url: 'http://localhost:8080/api/recipes?category=' + category
      });
    }

    recipesAPI.getRecipeDetails = function(id) {
      return $http({
        method: 'GET', 
        url: 'http://localhost:8080/api/recipes/' + id
      });
    } 

    return recipesAPI;
  });