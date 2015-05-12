(function (app) {

  'use strict';

  var recipesData = function ($resource) {
    var root = "././data/recipes/";
    return {

      getRecipe: function (id) {
        return $resource(root + id + ".json").get();
      },

      getRecipes: function () {
        return $resource(root + "all_recipes.json").query();
      }
    };
  };

  app.factory("recipesData", ["$resource", recipesData]);

}(angular.module("cookingBlog")));