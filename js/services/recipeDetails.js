(function () {
  
  'use strict';

  var app = angular.module("cookingBlog");
  
  var recipeDetails = function ($resource) {
    return {
    
      getRecipe: function (recipeID) {
    
        return $resource("http://localhost:8080/api/recipes/:id", {id : '@id'})
          .get({id : recipeID});

      }
    };
  };
  
  app.factory("recipeDetails", ["$resource", recipeDetails]);
  
}());