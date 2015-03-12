angular.module('LenasRecipes.controllers', []).
controller('recipesController', function($scope, recipesAPIservice) {
    $scope.recipesList = [];
    
    $scope.categoryFilter = function (recipe) {
        var re = new RegExp($scope.selectedCategory, 'i');
        return !$scope.selectedCategory || re.test(recipe.category);
    };
    
    recipesAPIservice.getRecipes().success(function (response) {
        $scope.recipesList = response;
   });
}). 
   
controller('recipeController', function($scope, $routeParams, recipesAPIservice) {
    $scope.id = $routeParams.id;
    $scope.recipe = null;
    recipesAPIservice.getRecipeDetails($scope.id).success(function (response) {
        for (var i = 0; i < response.length; i += 1) {
            if (response[i].Recipe.RecipeId === $scope.id) {
                $scope.recipe = response[i];
            }
        }
    });
});
