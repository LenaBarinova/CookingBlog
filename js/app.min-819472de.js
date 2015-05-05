!function(){"use strict";var e=angular.module("cookingBlog",["ngRoute","ngResource","td.easySocialShare"]);e.config(["$routeProvider",function(e){e.when("/recipes",{templateUrl:"partials/recipes.html",controller:"RecipesController"}).when("/recipes/:id",{templateUrl:"partials/recipe.html",controller:"RecipeController"}).when("/recipes?category",{templateUrl:"partials/recipes.html",controller:"RecipeController"}).when("/about",{templateUrl:"partials/about.html"}).otherwise({redirectTo:"/recipes"})}])}(),function(e){"use strict";var t=function(){return{templateUrl:"././partials/jbFooter.html",restrict:"E"}};e.directive("jbFooter",t)}(angular.module("cookingBlog")),function(e){"use strict";var t=function(){return{templateUrl:"././partials/jbSidebar.html"}};e.directive("jbSidebar",t)}(angular.module("cookingBlog")),function(e){"use strict";var t=function(){return function(e){var t=Math.floor(e),r=t>0?t+" & ":"";switch(e-t){case.25:return r+"1/4";case.3:return r+"1/3";case.5:return r+"1/2";case.6:return r+"2/3";case.75:return r+"3/4";default:return e}}};e.filter("amount",t)}(angular.module("cookingBlog")),function(e){"use strict";var t=function(e){return{getRecipe:function(t){return e("././data/recipes/"+t+".json").get()},getRecipes:function(){return e("././data/recipes/all_recipes.json").query()}}};e.factory("recipesData",["$resource",t])}(angular.module("cookingBlog")),function(e){"use strict";e.constant("categoriesData",[{slug:"all",name:"All"},{slug:"sweets",name:"Sweets"},{slug:"to-go",name:"To go"},{slug:"15-min-meals",name:"15 min meals"}])}(angular.module("cookingBlog")),function(e){"use strict";var t=function(e){e.$on("$viewContentLoaded",function(){$("#nav > ul").dropotron({mode:"fade",noOpenerFade:!0,hoverDelay:150,hideDelay:350,easing:"swing"})})};e.controller("MainController",["$scope",t])}(angular.module("cookingBlog")),function(e){"use strict";var t=function(e,t,r){var o=r.id,n=function(e){t.recipe=e,t.ingredients=t.recipe.ingredients,t.instructions=t.recipe.instructions},a=function(e){t.error="Could not fetch data"};e.getRecipe(o).$promise.then(n,a)};e.controller("RecipeController",["recipesData","$scope","$routeParams",t])}(angular.module("cookingBlog")),function(e){"use strict";var t=function(e,t,r){var o=function(e){t.recipes=e},n=function(e){t.error="Could not fetch data"};e.getRecipes().$promise.then(o,n),""!==r.category&&(t.byCategory="all"==r.category?"":r.category)};e.controller("RecipesController",["recipesData","$scope","$routeParams",t])}(angular.module("cookingBlog")),function(e){"use strict";var t=function(e,t){e.categories=t};e.controller("CategoriesController",["$scope","categoriesData",t])}(angular.module("cookingBlog")),angular.module("td.easySocialShare",[]).directive("shareLinks",["$location",function(e){return{link:function(t,r,o){var n,a,i=["twitter","facebook","linkedin","google-plus"],c=o.shareLinks.toLowerCase().split(","),l=encodeURIComponent(e.absUrl()),s=o.shareTitle,u=encodeURIComponent(s),g=[],p="";for(r.addClass("td-easy-social-share"),p=o.shareSquare&&"true"===o.shareSquare.toString()?"-square":"",angular.forEach(c,function(e){switch(e=e.trim()){case"twitter":a="http://twitter.com/intent/tweet?text="+u+"%20"+l;break;case"facebook":a="http://facebook.com/sharer.php?u="+l;break;case"linkedin":a="http://www.linkedin.com/shareArticle?mini=true&url="+l+"&title="+u;break;case"google-plus":a="https://plus.google.com/share?url="+l}i.indexOf(e)>-1&&g.push({network:e,url:a})}),n=0;n<g.length;n++){var d="";d+='<a href="'+g[n].url+'"',d+=' class="fa fa-'+g[n].network+p+'" target="_blank"',d+="></a>",r.append(d)}}}}]);