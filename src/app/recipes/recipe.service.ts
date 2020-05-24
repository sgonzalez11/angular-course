import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Simply Test', 'https://c1.wallpaperflare.com/preview/992/474/505/food-meat-recipe-power.jpg'),
    new Recipe('Test Recipe 2', 'Simply Test 2', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
