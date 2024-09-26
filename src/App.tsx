import BurgerPreview from './components/BurgerPreview/BurgerPreview';
import Burger from './components/BurgerPreview/Burger/Burger.tsx';
import { Layer } from './types.d';
import { layers } from './shared.tsx';
import './App.css';

const activeLayers: Layer[] = [];
activeLayers.push(layers.breadTop, layers.salad, layers.cheese, layers.bacon, layers.breadBottom);

const App = () => {
  return (
    <>
      <Burger layers={activeLayers} />
    </>
  );
};

export default App;
