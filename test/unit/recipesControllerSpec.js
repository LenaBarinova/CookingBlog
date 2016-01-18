/// <reference path="../../typings/sinon/sinon.d.ts"/>
'use strict';

describe('RecipesController', function() {
  var scope, $controllerConstructor, mockRecipesData, q;
  
  beforeEach(module('cookingBlog'));
  
  beforeEach(inject(function($controller, $rootScope, $q) {
    
     q = $q;
   
    mockRecipesData = {
      getRecipes: function() {return {$promise: q.defer().promise}}
    };
 
    scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));
  
  it('should set the list of categories to the scope', function() {
    var mockRecipes = {};
    //console.log(deferred);
    
    
    //deferred.resolve(mockRecipes);
    //console.log(mockRecipesData);
    //mockRecipesData.GetRecipes.resolve(mockRecipes); 
    $controllerConstructor("RecipesController", {recipesData: mockRecipesData, $scope: scope, $routeParams: {}});
    
    expect(scope.recipes).toEqual(mockRecipes);
  })
});
//http://projectpoppycock.com/2014/03/05/mocking-resource-and-promises-in-angularjs-unit-tests/