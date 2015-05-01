(function (app) {

  'use strict';

  var jbFooter = function () {
    return {
      templateUrl: "././partials/jbFooter.html",
      restrict: "E"
    };
  };

  app.directive('jbFooter', jbFooter);

}(angular.module("cookingBlog")));