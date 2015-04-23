(function (app) {

  'use strict';

  var recipeDetails = function ($resource) {
    return {

      getRecipe: function (recipeID) {

        return $resource("http://localhost:8080/api/recipes/:id", {
              id: '@id'
            } //, {"getAll": {method: "GET", isArray:true, params:{}}}
          )
          .get({
            id: recipeID
          });

      },
      getRecipes: function () {

        return $resource("http://localhost:8080/api/recipes/", {
            id: '@id'
          })
          .get({
            id: recipeID
          });

      }
    };
  };

  app.factory("recipeDetails", ["$resource", recipeDetails]);

}(angular.module("cookingBlog")));