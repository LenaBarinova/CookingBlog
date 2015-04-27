(function (app) {

  'use strict';

  var recipeDetails = function ($resource) {
    return {

      getRecipe: function (id) {
        return $resource("././data/recipes/" + id + ".json")
          .get();
      },

      getRecipes: function () {
        return $resource("././data/recipes/all_recipes_preview.json")
          .query();
      }
    };
  };

  app.factory("recipeDetails", ["$resource", recipeDetails]);

}(angular.module("cookingBlog")));