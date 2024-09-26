import Bacon from './components/BurgerPreview/Burger/Bacon/Bacon';
import BreadBottom from './components/BurgerPreview/Burger/BreadBottom/BreadBottom';
import BreadTop from './components/BurgerPreview/Burger/BreadTop/BreadTop';
import Cheese from './components/BurgerPreview/Burger/Cheese/Cheese';
import Meat from './components/BurgerPreview/Burger/Meat/Meat';
import Salad from './components/BurgerPreview/Burger/Salad/Salad';
import { LayerType, Layer } from './types.d';

interface LayerDictionary {
  [key: string]: Layer;
}

export const layers: LayerDictionary = {
  bacon: { displayName: 'Bacon', price: 10, type: LayerType.Stuffing, img: '', component: Bacon },
  breadBottom: { displayName: 'Bread bottom', price: 10, type: LayerType.Bread, img: '', component: BreadBottom },
  breadTop: { displayName: 'Bread top', price: 10, type: LayerType.Bread, img: '', component: BreadTop },
  cheese: { displayName: 'Cheese', price: 10, type: LayerType.Stuffing, img: '', component: Cheese },
  meat: { displayName: 'Meat', price: 10, type: LayerType.Stuffing, img: '', component: Meat },
  salad: { displayName: 'Salad', price: 10, type: LayerType.Stuffing, img: '', component: Salad },
};
