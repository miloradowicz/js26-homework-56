import { BuilderIngredient, Ingredient, IngredientType } from './types.d';
import { ingredients } from './static-data.ts';
import { useState } from 'react';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder.tsx';
import BurgerPreview from './components/BurgerPreview/BurgerPreview';
import './App.css';
import Layout from './components/Layout/Layout.tsx';

const selectables = Object.values(ingredients).filter((x) => x.type === IngredientType.Stuffing);

const App = () => {
  const [selection, setSelection] = useState<Ingredient[]>([]);

  const onItemAdd = (x: BuilderIngredient) => {
    const item = selectables.find((y) => y.id === x.id);

    if (item !== undefined) {
      setSelection((selection) => [...selection, { ...item }]);
    }
  };

  const onItemDelete = (x: BuilderIngredient) => {
    setSelection((selection) => {
      const reverseCopy = [...selection].reverse();

      const i = reverseCopy.findIndex((y) => y.id === x.id);

      if (i >= 0) {
        reverseCopy.splice(i, 1);
      }

      return reverseCopy.reverse();
    });
  };

  return (
    <>
      <Layout>
        <BurgerBuilder ingredients={selectables} selection={selection} onItemAdd={onItemAdd} onItemDelete={onItemDelete} />
        <BurgerPreview ingredients={[ingredients.breadTop, ...selection, ingredients.breadBottom]} />
      </Layout>
    </>
  );
};

export default App;
