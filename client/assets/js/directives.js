(function() {
  'use strict';

  var app = angular.module('application');
  app.directive('recipeDetail', function() {
    return {
      scope: {
        recipe: '=',
        showFullDetails: '='
      },
      templateUrl: '/templates/recipe-detail.html'
    }
  });
  app.directive('addEditRecipe', ['FoundationApi', function(FoundationApi) {
    return {
      scope: {
        recipe: '=',
        submitRecipe: '=',
        deleteRecipe: '&',
        submitLabel: '@'
      },
      controllerAs: 'recipeForm',
      bindToController: true,
      controller: function() {
        var recipeForm = this;
        if (!recipeForm.recipe) {
          recipeForm.createMode = true;
          recipeForm.recipe = {};
          recipeForm.recipe.ingredients = [{}];
          recipeForm.recipe.directions = [{}];
        }
        recipeForm.addItem = function(arrayOfObjects) {
          arrayOfObjects.push({});
        };
        recipeForm.removeItem = function(arrayOfObjects, index) {
          arrayOfObjects.splice(index, 1);
        };
        FoundationApi.subscribe('recipePanel', function(callback) {
          recipeForm.previewOpen = !recipeForm.previewOpen;
        });
      },
      templateUrl: '/templates/add-edit-recipe.html'
    }
  }]);

})();
