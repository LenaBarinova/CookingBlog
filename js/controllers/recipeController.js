(function (app) {

  'use strict';

  var RecipeController = function (recipesData, $scope, $routeParams, $sce, $location) {

    var id = $routeParams.id;
    
    var onRecipeComplete = function (resource) {
      $scope.recipe = resource;
      $scope.ingredients = $scope.recipe.ingredients;
      $scope.instructions = $scope.recipe.instructions;
      
      /*
      var imgUrl = $location.protocol() + "://" + $location.host() + "/" + $scope.recipe.imageURL;
      
      $scope.shareOnFacebookUrl =  "http://www.facebook.com/sharer/sharer.php?s=100&p[url]=" 
             + $location.absUrl() 
             + "&p[images][0]=" 
             + imgUrl 
             + "&p[title]=" + $scope.recipe.slug;  

      console.log(imgUrl);
      console.log($scope.shareOnFacebookUrl);
      */
    };

    var onError = function (reason) {
      $scope.error = "Could not fetch data";
    };

    recipesData.getRecipe(id).then(onRecipeComplete, onError);

    $scope.displaySafeHtml = function(html){
      return $sce.trustAsHtml(html);
    };
  };

  app.controller("RecipeController", ["recipesData", "$scope", "$routeParams", "$sce", "$location", RecipeController]);

}(angular.module("cookingBlog")));