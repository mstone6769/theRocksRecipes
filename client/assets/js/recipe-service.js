(function() {
  'use strict';

  var app = angular.module('application');
  app.factory('recipeService', ['$state', 'FoundationApi', 
    function recipeServiceFactory ($state, FoundationApi) {
    var recipes = [
      {
        'id': 0,
        'name':'The Rock\'s Ultimate Chocolate Chip Cookies',
        'ingredients': [
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'butter, softened'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'white sugar'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'packed brown sugar'
          },
          {
            'quantity': 2,
            'measurement': '',
            'name': 'eggs'
          },
          {
            'quantity': 2,
            'measurement': 'teaspoons',
            'name': 'vanilla extract'
          },
          {
            'quantity': 3,
            'measurement': 'cups',
            'name': 'all purpose flour'
          },
          {
            'quantity': 1,
            'measurement': 'teaspoon',
            'name': 'baking soda'
          },
          {
            'quantity': 2,
            'measurement': 'teaspoons',
            'name': 'hot water'
          },
          {
            'quantity': 0.5,
            'measurement': 'teaspoon',
            'name': 'salt'
          },
          {
            'quantity': 2,
            'measurement': 'cups',
            'name': 'semisweet chocolate chips'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'chopped walnuts'
          }
        ],
        'description': 'Crisp edges, chewy middles.',
        'directions': [
          {'instruction': 'Preheat oven to 350 degrees F (175 degrees C).'},
          {'instruction': 'Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.'},
          {'instruction': 'Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.'}
        ]
      },{
        'id': 1,
        'name':'The Rock\'s Power Shake',
        'ingredients': [
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'butter, softened'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'white sugar'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'packed brown sugar'
          },
          {
            'quantity': 2,
            'measurement': '',
            'name': 'eggs'
          },
          {
            'quantity': 2,
            'measurement': 'teaspoons',
            'name': 'vanilla extract'
          },
          {
            'quantity': 3,
            'measurement': 'cups',
            'name': 'all purpose flour'
          },
          {
            'quantity': 1,
            'measurement': 'teaspoon',
            'name': 'baking soda'
          },
          {
            'quantity': 2,
            'measurement': 'teaspoons',
            'name': 'hot water'
          },
          {
            'quantity': 0.5,
            'measurement': 'teaspoon',
            'name': 'salt'
          },
          {
            'quantity': 2,
            'measurement': 'cups',
            'name': 'semisweet chocolate chips'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'chopped walnuts'
          }
        ],
        'description': 'Delicious and nutritious',
        'directions': [
          {'instruction': 'Preheat oven to 350 degrees F (175 degrees C).'},
          {'instruction': 'Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.'},
          {'instruction': 'Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.'}
        ]
      },{
        'id': 2,
        'name':'The Rock\'s Best Lemonade Ever',
        'ingredients': [
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'butter, softened'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'white sugar'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'packed brown sugar'
          },
          {
            'quantity': 2,
            'measurement': '',
            'name': 'eggs'
          },
          {
            'quantity': 2,
            'measurement': 'teaspoons',
            'name': 'vanilla extract'
          },
          {
            'quantity': 3,
            'measurement': 'cups',
            'name': 'all purpose flour'
          },
          {
            'quantity': 1,
            'measurement': 'teaspoon',
            'name': 'baking soda'
          },
          {
            'quantity': 2,
            'measurement': 'teaspoons',
            'name': 'hot water'
          },
          {
            'quantity': 0.5,
            'measurement': 'teaspoon',
            'name': 'salt'
          },
          {
            'quantity': 2,
            'measurement': 'cups',
            'name': 'semisweet chocolate chips'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'chopped walnuts'
          }
        ],
        'description': 'Thirst quenching',
        'directions': [
          {'instruction': 'Preheat oven to 350 degrees F (175 degrees C).'},
          {'instruction': 'Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.'},
          {'instruction': 'Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.'}
        ]
      },{
        'id': 3,
        'name':'The Rock\'s Rock Candy',
        'ingredients': [
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'butter, softened'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'white sugar'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'packed brown sugar'
          },
          {
            'quantity': 2,
            'measurement': '',
            'name': 'eggs'
          },
          {
            'quantity': 2,
            'measurement': 'teaspoons',
            'name': 'vanilla extract'
          },
          {
            'quantity': 3,
            'measurement': 'cups',
            'name': 'all purpose flour'
          },
          {
            'quantity': 1,
            'measurement': 'teaspoon',
            'name': 'baking soda'
          },
          {
            'quantity': 2,
            'measurement': 'teaspoons',
            'name': 'hot water'
          },
          {
            'quantity': 0.5,
            'measurement': 'teaspoon',
            'name': 'salt'
          },
          {
            'quantity': 2,
            'measurement': 'cups',
            'name': 'semisweet chocolate chips'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'chopped walnuts'
          }
        ],
        'description': 'It will Rock your world',
        'directions': [
          {'instruction': 'Preheat oven to 350 degrees F (175 degrees C).'},
          {'instruction': 'Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.'},
          {'instruction': 'Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.'}
        ]
      },{
        'id': 4,
        'name':'The Rock\'s Pizza',
        'ingredients': [
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'butter, softened'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'white sugar'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'packed brown sugar'
          },
          {
            'quantity': 2,
            'measurement': '',
            'name': 'eggs'
          },
          {
            'quantity': 2,
            'measurement': 'teaspoons',
            'name': 'vanilla extract'
          },
          {
            'quantity': 3,
            'measurement': 'cups',
            'name': 'all purpose flour'
          },
          {
            'quantity': 1,
            'measurement': 'teaspoon',
            'name': 'baking soda'
          },
          {
            'quantity': 2,
            'measurement': 'teaspoons',
            'name': 'hot water'
          },
          {
            'quantity': 0.5,
            'measurement': 'teaspoon',
            'name': 'salt'
          },
          {
            'quantity': 2,
            'measurement': 'cups',
            'name': 'semisweet chocolate chips'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'chopped walnuts'
          }
        ],
        'description': 'Carb it up bro-ham',
        'directions': [
          {'instruction': 'Preheat oven to 350 degrees F (175 degrees C).'},
          {'instruction': 'Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.'},
          {'instruction': 'Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.'}
        ]
      },{
        'id': 5,
        'name':'The Rock\'s Bacon',
        'ingredients': [
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'butter, softened'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'white sugar'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'packed brown sugar'
          },
          {
            'quantity': 2,
            'measurement': '',
            'name': 'eggs'
          },
          {
            'quantity': 2,
            'measurement': 'teaspoons',
            'name': 'vanilla extract'
          },
          {
            'quantity': 3,
            'measurement': 'cups',
            'name': 'all purpose flour'
          },
          {
            'quantity': 1,
            'measurement': 'teaspoon',
            'name': 'baking soda'
          },
          {
            'quantity': 2,
            'measurement': 'teaspoons',
            'name': 'hot water'
          },
          {
            'quantity': 0.5,
            'measurement': 'teaspoon',
            'name': 'salt'
          },
          {
            'quantity': 2,
            'measurement': 'cups',
            'name': 'semisweet chocolate chips'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'chopped walnuts'
          }
        ],
        'description': 'Crispy',
        'directions': [
          {'instruction': 'Preheat oven to 350 degrees F (175 degrees C).'},
          {'instruction': 'Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.'},
          {'instruction': 'Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.'}
        ]
      },{
        'id': 6,
        'name':'The Rock\'s Pasta',
        'ingredients': [
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'butter, softened'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'white sugar'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'packed brown sugar'
          },
          {
            'quantity': 2,
            'measurement': '',
            'name': 'eggs'
          },
          {
            'quantity': 2,
            'measurement': 'teaspoons',
            'name': 'vanilla extract'
          },
          {
            'quantity': 3,
            'measurement': 'cups',
            'name': 'all purpose flour'
          },
          {
            'quantity': 1,
            'measurement': 'teaspoon',
            'name': 'baking soda'
          },
          {
            'quantity': 2,
            'measurement': 'teaspoons',
            'name': 'hot water'
          },
          {
            'quantity': 0.5,
            'measurement': 'teaspoon',
            'name': 'salt'
          },
          {
            'quantity': 2,
            'measurement': 'cups',
            'name': 'semisweet chocolate chips'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'chopped walnuts'
          }
        ],
        'description': 'For the beast inside',
        'directions': [
          {'instruction': 'Preheat oven to 350 degrees F (175 degrees C).'},
          {'instruction': 'Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.'},
          {'instruction': 'Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.'}
        ]
      },{
        'id': 7,
        'name':'The Rock\'s Pancakes',
        'ingredients': [
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'butter, softened'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'white sugar'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'packed brown sugar'
          },
          {
            'quantity': 2,
            'measurement': '',
            'name': 'eggs'
          },
          {
            'quantity': 2,
            'measurement': 'teaspoons',
            'name': 'vanilla extract'
          },
          {
            'quantity': 3,
            'measurement': 'cups',
            'name': 'all purpose flour'
          },
          {
            'quantity': 1,
            'measurement': 'teaspoon',
            'name': 'baking soda'
          },
          {
            'quantity': 2,
            'measurement': 'teaspoons',
            'name': 'hot water'
          },
          {
            'quantity': 0.5,
            'measurement': 'teaspoon',
            'name': 'salt'
          },
          {
            'quantity': 2,
            'measurement': 'cups',
            'name': 'semisweet chocolate chips'
          },
          {
            'quantity': 1,
            'measurement': 'cup',
            'name': 'chopped walnuts'
          }
        ],
        'description': 'Start a day off right',
        'directions': [
          {'instruction': 'Preheat oven to 350 degrees F (175 degrees C).'},
          {'instruction': 'Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.'},
          {'instruction': 'Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.'}
        ]
      }
    ];
    var getRecipes = function() {
      return this.recipes;
    };
    var getRecipe = function(recipeId) {
      var recipes = this.recipes;
      for (var i = 0; i < recipes.length; i++) {
        if (recipes[i].id === parseInt(recipeId)) {
          return recipes[i];
        }
      }
    };
    var createRecipe = function(recipe) {
      recipe.id = this.recipes.length;
      var copiedRecipe = angular.copy(recipe);
      this.recipes.push(copiedRecipe);



      FoundationApi.publish('main-notifications', { 
        autoclose: 3000, 
        title: 'Congratulations ', 
        content: recipe.name + ' has been created'
      });
      $state.go('recipe', {'id': recipe.id});
    };
    var updateRecipe = function(recipe) {
      this.recipes[recipe.id] = recipe;

      FoundationApi.publish('main-notifications', { 
        autoclose: 3000, 
        title: recipe.name + ' has been updated'
      });

      $state.go('recipe', {'id': recipe.id});
    };
    var deleteRecipe = function(recipe) {
      var recipes = this.recipes;
      for (var i = 0; i < recipes.length; i++) {
        if (recipes[i].id === parseInt(recipe.id)) {
          recipes.splice(i, 1);
        }
      }
      FoundationApi.publish('main-notifications', { 
        autoclose: 3000, 
        title: recipe.name + ' has been deleted'
      });
      $state.go('home');
    };
    return {
      recipes: recipes,
      getRecipes: getRecipes,
      createRecipe: createRecipe,
      getRecipe: getRecipe,
      updateRecipe: updateRecipe,
      deleteRecipe: deleteRecipe
    }
  }]);

})();
