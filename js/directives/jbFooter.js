(function () {
  
  'use strict';

  var app = angular.module("cookingBlog");
  
  var jbFooter = function () {
    return {
      templateUrl: "././partials/jbFooter.html",
      restrict: "E"
    };
  };
  
  app.directive('jbFooter', jbFooter);
  
}());