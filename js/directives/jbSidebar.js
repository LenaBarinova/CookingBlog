(function () {
    
  'use strict';

  var app = angular.module("cookingBlog");
  
  var jbSidebar = function () {
    return {
      templateUrl: "././partials/jbSidebar.html"
    };
  };
  
  app.directive('jbSidebar', jbSidebar);
  
}());