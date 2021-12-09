import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>(); 

    constructor(private shoppingListService: ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe("Chicken Burger",
            "A chicken burger is a burger that typically consists of boneless, skinless chicken breast served between slices of bread, on a bun, or on a roll. Variations on the chicken burger include the chicken sandwich or chicken on a bun, hot chicken, and chicken salad sandwich.",
            "https://img.huffingtonpost.com/asset/5cd3afa72400003300a9b36f.jpeg",
            [new Ingredient('Meat',1), new Ingredient('Fries',20)]),
        new Recipe("Fettuccine Alfredo",
            "Fettuccine Alfredo (Italian pronunciation: [fettut'tʃiːne alˈfreːdo]) or fettuccine al burro (fettuccine with butter) is an Italian pasta dish of fresh fettuccine tossed with butter and Parmesan cheese (Italian: pasta al burro e parmigiano).",
            "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg",
            [new Ingredient('Noodles',12), new Ingredient('Chicken',20)])
    ];

    getRecipes(){
        return this.recipes.slice();
    }

    addIngToSL(ingredients: Ingredient[]){
        this.shoppingListService.addingredients(ingredients);
    }
}