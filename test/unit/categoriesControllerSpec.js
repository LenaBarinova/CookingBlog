'use strict';

describe('CategoriesController', function() {
  var scope, $controllerConstructor, mockCategoriesData;
  
  beforeEach(module('cookingBlog'));
  
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    mockCategoriesData = [{slug: "all", name: "All"}, {slug: "brunch", name: "Brunch"}];
    $controllerConstructor = $controller;
  }));
  
  it('should set the list of categories to the scope', function() {    
    $controllerConstructor("CategoriesController", {$scope: scope, categoriesData: mockCategoriesData});
    expect(scope.categories).toEqual(mockCategoriesData);
  })
});