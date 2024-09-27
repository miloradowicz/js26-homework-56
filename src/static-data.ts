import Bacon from './components/BurgerPreview/Burger/Bacon/Bacon';
import BreadBottom from './components/BurgerPreview/Burger/BreadBottom/BreadBottom';
import BreadTop from './components/BurgerPreview/Burger/BreadTop/BreadTop';
import Cheese from './components/BurgerPreview/Burger/Cheese/Cheese';
import Meat from './components/BurgerPreview/Burger/Meat/Meat';
import Salad from './components/BurgerPreview/Burger/Salad/Salad';
import { IngredientType, Ingredient } from './types.d';

import bacon from './assets/bacon-svgrepo-com.svg';
import cheese from './assets/cheese-wedge-svgrepo-com.svg';
import meat from './assets/steak-meat-svgrepo-com.svg';
import salad from './assets/salad-svgrepo-com.svg';

export interface Ingredients {
  [key: string]: Ingredient;
}

export const ingredients: Ingredients = {
  bacon: { id: 0, displayName: 'Bacon', price: 60, type: IngredientType.Stuffing, img: bacon, component: Bacon },
  breadBottom: { id: 1, displayName: 'Bread bottom', price: undefined, type: IngredientType.Bread, img: undefined, component: BreadBottom },
  breadTop: { id: 2, displayName: 'Bread top', price: undefined, type: IngredientType.Bread, img: undefined, component: BreadTop },
  cheese: { id: 3, displayName: 'Cheese', price: 50, type: IngredientType.Stuffing, img: cheese, component: Cheese },
  meat: { id: 4, displayName: 'Meat', price: 80, type: IngredientType.Stuffing, img: meat, component: Meat },
  salad: { id: 5, displayName: 'Salad', price: 10, type: IngredientType.Stuffing, img: salad, component: Salad },
};

export const basePrice = 30;
