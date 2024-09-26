import BurgerPreview from './components/BurgerPreview/BurgerPreview';
import Burger from './components/BurgerPreview/Burger/Burger.tsx';
import { Layer } from './types.d';
import { layers } from './data.tsx';
import './App.css';

const activeLayers: Layer[] = [];
activeLayers.push(layers.breadTop, layers.salad, layers.cheese, layers.bacon, layers.cheese, layers.breadBottom);

const App = () => {
  return (
    <>
      <BurgerPreview layers={activeLayers} />
    </>
  );
};

export default App;
