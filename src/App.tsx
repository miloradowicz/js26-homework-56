import { BuilderIngredient, Ingredient, IngredientType } from './types.d';
import { ingredients, basePrice } from './static-data.ts';
import { useState } from 'react';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder.tsx';
import BurgerPreview from './components/BurgerPreview/BurgerPreview';
import './App.css';

const selectables = Object.values(ingredients).filter((x) => x.type === IngredientType.Stuffing);

const App = () => {
  const [selection, setSelection] = useState<Ingredient[]>([]);

  const onItemAdd = (x: BuilderIngredient) => {
    const item = selectables.find((y) => y.id === x.id);

    if (item !== undefined) {
      setSelection((selection) => [{ ...item }, ...selection]);
    }
  };

  const onItemDelete = (x: BuilderIngredient) => {
    setSelection((selection) => {
      const copy = [...selection];

      const i = copy.findIndex((y) => y.id === x.id);

      if (i >= 0) {
        copy.splice(i, 1);
      }

      return copy;
    });
  };

  return (
    <>
      <h1 className='mb-5'>Build your dream burger!</h1>
      <div className='container mx-auto d-flex flex-column flex-md-row'>
        <div className='col-12 col-md-6'>
          <BurgerBuilder
            ingredients={selectables}
            selection={selection}
            price={selection.reduce((a, x) => a + (x.price ?? 0), basePrice)}
            onItemAdd={onItemAdd}
            onItemDelete={onItemDelete}
          />
        </div>
        <div className='col-12 col-md-6'>
          <BurgerPreview selection={[ingredients.breadTop, ...selection, ingredients.breadBottom]} />
        </div>
      </div>
    </>
  );
};

export default App;
