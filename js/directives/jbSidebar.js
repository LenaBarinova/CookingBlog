(function (app) {

  'use strict';

  var jbSidebar = function () {
    return {
      templateUrl: "././partials/jbSidebar.html"
    };
  };

  app.directive('jbSidebar', jbSidebar);

}(angular.module("cookingBlog")));