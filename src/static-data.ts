import Bacon from './components/BurgerPreview/Burger/Bacon/Bacon';
import BreadBottom from './components/BurgerPreview/Burger/BreadBottom/BreadBottom';
import BreadTop from './components/BurgerPreview/Burger/BreadTop/BreadTop';
import Cheese from './components/BurgerPreview/Burger/Cheese/Cheese';
import Meat from './components/BurgerPreview/Burger/Meat/Meat';
import Salad from './components/BurgerPreview/Burger/Salad/Salad';
import { IngredientType, Ingredient } from './types';

interface Ingredients {
  [key: string]: Ingredient;
}

export const ingredients: Ingredients = {
  bacon: { displayName: 'Bacon', price: 10, type: IngredientType.Stuffing, img: '', component: Bacon },
  breadBottom: { displayName: 'Bread bottom', price: 10, type: IngredientType.Bread, img: '', component: BreadBottom },
  breadTop: { displayName: 'Bread top', price: 10, type: IngredientType.Bread, img: '', component: BreadTop },
  cheese: { displayName: 'Cheese', price: 10, type: IngredientType.Stuffing, img: '', component: Cheese },
  meat: { displayName: 'Meat', price: 10, type: IngredientType.Stuffing, img: '', component: Meat },
  salad: { displayName: 'Salad', price: 10, type: IngredientType.Stuffing, img: '', component: Salad },
};
