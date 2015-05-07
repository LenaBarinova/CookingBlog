(function (app) {

  'use strict';

  app.constant("categoriesData", [
    {
      slug: "all",
      name: "All"
      },
    {
      slug: "brunch",
      name: "Brunch"
      },/*
    {
      slug: "snacks",
      name: "Snacks"
      },*/
    {
      slug: "sweets",
      name: "Sweets"
      },
        {
          slug: "after-work",
          name: "After work"
          },
        /*{
          slug: "takes-time",
          name: "Takes time"
          },*/
        {
          slug: "for-party",
          name: "For party"
          },
    {
      slug: "to-go",
      name: "To go"
      }/*,
    {
      slug: "15-min-meals",
      name: "15 min meals"
    }*/
    ]);

}(angular.module("cookingBlog")));