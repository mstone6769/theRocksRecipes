(function() {
  'use strict';

  var app = angular.module('application');
  app.controller('AddRecipeController', ['recipeService', function (recipeService) {
    var addRecipe = this;

    addRecipe.createRecipe = function (recipe) {
      recipeService.createRecipe(recipe);
    };
    
  }]);

  app.controller('HomeController', ['recipeService', function (recipeService) {
    var home = this;
    home.recipes = recipeService.getRecipes();
  }]);
  app.controller('RecipesCardController', ['recipeService', function (recipeService) {
    var recipesCard = this;
    recipesCard.recipes = recipeService.getRecipes();
  }]);
  app.controller('RecipeController', ['recipeService', '$stateParams', function (recipeService, $stateParams) {
    var recipe = this;
    var recipeId = $stateParams.id;
    recipe.details = recipeService.getRecipe(recipeId);
  }]);
  app.controller('EditRecipeController', ['recipeService', '$stateParams', function (recipeService, $stateParams) {
    var editRecipe = this;
    var recipeId = $stateParams.id;
    var recipe = recipeService.getRecipe(recipeId);
    editRecipe.recipe = angular.copy(recipe);
    editRecipe.updateRecipe = function (recipe) {
      recipeService.updateRecipe(recipe);
    };
    editRecipe.deleteRecipe = function () {
      recipeService.deleteRecipe(editRecipe.recipe);
    };
  }]);

})();
