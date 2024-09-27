import BurgerPreview from './components/BurgerPreview/BurgerPreview';
import { Ingredient } from './types.d';
import { ingredients } from './static-data.ts';
import './App.css';

const activeLayers: Ingredient[] = [];
activeLayers.push(ingredients.breadTop, ingredients.salad, ingredients.cheese, ingredients.bacon, ingredients.cheese, ingredients.breadBottom);

const App = () => {
  return (
    <>
      <BurgerPreview ingredients={activeLayers} />
    </>
  );
};

export default App;
