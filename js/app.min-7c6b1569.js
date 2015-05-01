!function(){"use strict";var e=angular.module("cookingBlog",["ngRoute","ngResource"]);e.config(["$routeProvider",function(e){e.when("/recipes",{templateUrl:"partials/recipes.html",controller:"RecipesController"}).when("/recipes/:id",{templateUrl:"partials/recipe.html",controller:"RecipeController"}).when("/recipes?category",{templateUrl:"partials/recipes.html",controller:"RecipeController"}).when("/about",{templateUrl:"partials/about.html"}).otherwise({redirectTo:"/recipes"})}])}(),function(e){"use strict";var r=function(){return{templateUrl:"././partials/jbFooter.html",restrict:"E"}};e.directive("jbFooter",r)}(angular.module("cookingBlog")),function(e){"use strict";var r=function(){return{templateUrl:"././partials/jbSidebar.html"}};e.directive("jbSidebar",r)}(angular.module("cookingBlog")),function(e){"use strict";var r=function(){return function(e){var r=Math.floor(e),t=r>0?r+" & ":"";switch(e-r){case.25:return t+"1/4";case.3:return t+"1/3";case.5:return t+"1/2";case.6:return t+"2/3";case.75:return t+"3/4";default:return e}}};e.filter("amount",r)}(angular.module("cookingBlog")),function(e){"use strict";var r=function(e){return{getRecipe:function(r){return e("././data/recipes/"+r+".json").get()},getRecipes:function(){return e("././data/recipes/all_recipes.json").query()}}};e.factory("recipesData",["$resource",r])}(angular.module("cookingBlog")),function(e){"use strict";e.constant("categoriesData",[{slug:"all",name:"All"},{slug:"sweets",name:"Sweets"},{slug:"to-go",name:"To go"},{slug:"15-min-meals",name:"15 min meals"}])}(angular.module("cookingBlog")),function(e){"use strict";var r=function(e){e.$on("$viewContentLoaded",function(){$("#nav > ul").dropotron({mode:"fade",noOpenerFade:!0,hoverDelay:150,hideDelay:350,easing:"swing"})})};e.controller("MainController",["$scope",r])}(angular.module("cookingBlog")),function(e){"use strict";var r=function(e,r,t){var o=t.id,n=function(e){r.recipe=e,r.ingredients=r.recipe.ingredients,r.instructions=r.recipe.instructions},i=function(e){r.error="Could not fetch data"};e.getRecipe(o).$promise.then(n,i)};e.controller("RecipeController",["recipesData","$scope","$routeParams",r])}(angular.module("cookingBlog")),function(e){"use strict";var r=function(e,r,t){var o=function(e){r.recipes=e},n=function(e){r.error="Could not fetch data"};e.getRecipes().$promise.then(o,n),""!==t.category&&(r.byCategory="all"==t.category?"":t.category)};e.controller("RecipesController",["recipesData","$scope","$routeParams",r])}(angular.module("cookingBlog")),function(e){"use strict";var r=function(e,r){e.categories=r};e.controller("CategoriesController",["$scope","categoriesData",r])}(angular.module("cookingBlog"));